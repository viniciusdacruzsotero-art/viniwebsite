"""Backend API tests for Vini 3D Creator portfolio."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://jack-3d-creator-5.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root endpoint ---
class TestRoot:
    def test_root_returns_vini_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Vini" in data["message"] and "3D Creator" in data["message"]


# --- Contact create ---
class TestContactCreate:
    def test_create_valid_contact(self, client):
        payload = {"name": "TEST_Alice", "email": "test_alice@example.com", "phone": "+1-555-1234"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert "_id" not in data

    def test_invalid_email_returns_422(self, client):
        r = client.post(f"{API}/contact", json={"name": "TEST_X", "email": "not-an-email", "phone": "12345"})
        assert r.status_code == 422

    def test_missing_fields_returns_422(self, client):
        r = client.post(f"{API}/contact", json={"name": "TEST_X"})
        assert r.status_code == 422

    def test_empty_name_returns_422(self, client):
        r = client.post(f"{API}/contact", json={"name": "", "email": "a@b.com", "phone": "12345"})
        assert r.status_code == 422


# --- Contact list ---
class TestContactList:
    def test_list_contacts_and_no_id_leak(self, client):
        # Create one to ensure non-empty
        seed = {"name": "TEST_Bob", "email": "test_bob@example.com", "phone": "+1-555-9999"}
        cr = client.post(f"{API}/contact", json=seed)
        assert cr.status_code == 200
        created_id = cr.json()["id"]

        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) > 0
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "name" in it and "email" in it and "phone" in it
            assert "created_at" in it
        # Verify our created item is in the list
        ids = [it["id"] for it in items]
        assert created_id in ids
