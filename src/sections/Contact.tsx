// src/sections/Contact.tsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-display text-saberTeal mb-12 text-center drop-shadow-glow">
        Transmission Incoming
      </h2>

      <motion.form
        action="https://formspree.io/f/your_form_id"  // replace with real ID
        method="POST"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-6 bg-black/30 backdrop-blur-lg p-8 rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.2)] border border-saberTeal/20"
      >
        <div>
          <label className="block text-starWhite text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 bg-hyperspace border border-saberTeal/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-saberTeal/60"
          />
        </div>

        <div>
          <label className="block text-starWhite text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-hyperspace border border-saberTeal/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-saberTeal/60"
          />
        </div>

        <div>
          <label className="block text-starWhite text-sm mb-1">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 bg-hyperspace border border-saberTeal/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-saberTeal/60"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-saberTeal text-black px-6 py-3 font-display font-bold rounded shadow-glow hover:shadow-[0_0_20px_#00FFFF] transition"
        >
          Send Transmission
        </motion.button>
      </motion.form>
    </section>
  );
}
