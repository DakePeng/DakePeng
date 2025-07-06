import { useState } from "react";
import SectionHeader from "./SectionHeader";
import SectionLine from "./SectionLine";
import {BACKEND_URL} from '../../config.js'

export default function Contact() {
  const sectionTitle = "Get in Touch";
  const sectionDescription =
    "Have a question, project, or just want to say hi? Drop me a message!";

  const [status, setStatus] = useState(""); // success, error, or empty
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(BACKEND_URL + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-24" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader title={sectionTitle} description={sectionDescription} />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-4 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full transition duration-300 cursor-pointer ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700 hover:text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-4">✅ Your message was sent!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-4">❌ Something went wrong. Please try again.</p>
          )}
        </form>
      </div>

      <SectionLine />
    </section>
  );
}
