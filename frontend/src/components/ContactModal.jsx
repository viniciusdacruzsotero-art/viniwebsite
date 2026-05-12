import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const ContactModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape" && typeof onClose === "function") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handler);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof onClose === "function") onClose();
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill all fields.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setStatus("error");
      setError(
        err?.response?.data?.detail?.[0]?.msg ||
          err?.response?.data?.detail ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          data-testid="contact-modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="modal-card"
            data-testid="contact-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              type="button"
              onClick={handleClose}
              data-testid="contact-modal-close"
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "transparent",
                border: "none",
                color: "#D7E2EA",
                cursor: "pointer",
                opacity: 0.7,
                transition: "opacity 0.2s ease",
                padding: 6,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
            >
              <X size={20} />
            </button>

            <div className="mb-1" style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>
              Let’s talk
            </div>
            <h2
              className="hero-heading"
              style={{
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                marginBottom: "1.4rem",
              }}
            >
              Start a project
            </h2>

            {status === "success" ? (
              <div data-testid="contact-success" style={{ padding: "1rem 0" }}>
                <p style={{ color: "#BBCCD7", fontWeight: 500, marginBottom: 8 }}>
                  Message received.
                </p>
                <p style={{ opacity: 0.65, fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Thanks for reaching out. Vini will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  data-testid="contact-success-close"
                  className="pill-btn px-8 py-3 text-sm"
                  style={{ marginTop: "1.5rem" }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <input
                  className="modal-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  data-testid="contact-input-name"
                  autoComplete="name"
                />
                <input
                  className="modal-input"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  data-testid="contact-input-email"
                  autoComplete="email"
                />
                <input
                  className="modal-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  data-testid="contact-input-phone"
                  autoComplete="tel"
                />

                {error && (
                  <div
                    data-testid="contact-error"
                    style={{ color: "#ff8585", fontSize: 13, marginTop: 4 }}
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-testid="contact-submit"
                  className="pill-btn px-10 py-3 text-sm"
                  style={{ marginTop: "0.75rem", width: "100%", opacity: status === "loading" ? 0.6 : 1 }}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
