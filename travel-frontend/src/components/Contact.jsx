import { useEffect, useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    buslist: "",
    need: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const busOptions = [
    "RKG",
    "Sabari",
    "NPS",
    "Murugan",
    "Chandru",
    "Mano",
    "Traveller",
    "Senthur",
    "Jai Sri",
    "Pettakarran",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validateEmail(form.email)) {
      setStatus(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setForm({ name: "", email: "", contact: "", buslist: "", need: "" });
        setStatus(true);
      } else {
        setStatus(false);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  const renderFormFields = () => (
    <>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <input
        type="text"
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Contact Number"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <select
        name="buslist"
        value={form.buslist}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      >
        <option value="">Select Bus</option>
        {busOptions.map((bus) => (
          <option key={bus} value={bus}>
            {bus}
          </option>
        ))}
      </select>
      <textarea
        name="need"
        value={form.need}
        onChange={handleChange}
        placeholder="Describe your need"
        required
        rows={4}
        className="w-full p-3 border rounded-md"
        disabled={loading}
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:opacity-90"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {status === true && (
        <>
          <p className="text-green-600 text-center mt-2 font-semibold animate-pulse">
            ✅ Registered successfully!
          </p>
          <p className="text-center text-sm text-blue-600">
            🎉 Thanks for contacting us about <strong>{form.buslist}</strong>. We'll reach out soon!
          </p>
        </>
      )}
      {status === false && (
        <p className="text-red-600 text-center mt-2 font-medium">
          ❌ Submission failed. Please check details and try again.
        </p>
      )}
    </>
  );

  return (
    <>
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md border border-yellow-300">
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {renderFormFields()}
          </form>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl max-w-xl w-full shadow-2xl border border-yellow-400 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-4 text-gray-600 text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-center mb-4 text-yellow-600">
              Quick Contact
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFormFields()}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
