// src/sections/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-display text-saberTeal mb-4 drop-shadow-glow">
        Let's Connect
      </h2>

      {/* Links */}
      <div className="flex justify-center gap-8 mb-12 text-starWhite">
        <a
          href="mailto:paarth.sharma.3110@gmail.com"
          className="flex items-center gap-2 hover:text-saberTeal transition"
        >
          <MdEmail className="text-xl text-saberTeal" /> paarth.sharma.3110@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/paarthsharma16/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-saberTeal transition"
        >
          <SiLinkedin className="text-xl text-saberTeal" /> linkedin.com/in/paarthsharma16
        </a>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mzzjkrzn" // replace with your real Formspree endpoint
        method="POST"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-6 bg-black/30 backdrop-blur-lg p-8 rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.2)] border border-saberTeal/20"
      >
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="_subject" value="New message from Starforge contact form" />

        <div>
          <label className="block text-starWhite text-sm mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 bg-hyperspace border border-saberTeal/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-saberTeal/60"
          />
        </div>

        <div>
          <label className="block text-starWhite text-sm mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-hyperspace border border-saberTeal/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-saberTeal/60"
          />
        </div>

        <div>
          <label className="block text-starWhite text-sm mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 bg-hyperspace border border-saberTeal/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-saberTeal/60"
          />
        </div>

        {/* Centered button */}
        <div className="flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "sending"}
            className="bg-saberTeal text-black px-6 py-3 font-display font-bold rounded shadow-glow hover:shadow-[0_0_20px_#00FFFF] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Transmission"}
          </motion.button>

          {/* Feedback */}
          <span aria-live="polite" className="text-sm mt-3">
            {status === "sent" && (
              <span className="text-saberTeal">
                ✅ Transmission received! I’ll reply soon.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-400">
                ⚠️ Something went wrong. Try again later.
              </span>
            )}
          </span>
        </div>
      </motion.form>
    </section>
  );
}
