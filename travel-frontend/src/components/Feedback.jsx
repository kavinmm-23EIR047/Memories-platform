import { useState } from "react";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStarClick = (value) => {
    setForm({ ...form, rating: value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);

    if (!validateEmail(form.email)) {
      setSuccess(false);
      return;
    }

    if (form.rating === 0) {
      alert("Please select at least one star for your rating.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/feedback`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();
      if (data.success) {
        setForm({ name: "", email: "", comment: "", rating: 0 });
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error("Feedback error:", err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full bg-gray-100 p-8 rounded-xl shadow-md border border-yellow-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
          Leave Your Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              disabled={loading}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              disabled={loading}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Star Rating */}
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleStarClick(star)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill={form.rating >= star ? "#facc15" : "#e5e7eb"}
                className="w-8 h-8 cursor-pointer transition"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.64a1 1 0 00.95.69h3.829c.969 0 1.371 1.24.588 1.81l-3.1 2.25a1 1 0 00-.364 1.118l1.183 3.64c.3.921-.755 1.688-1.54 1.118l-3.1-2.25a1 1 0 00-1.175 0l-3.1 2.25c-.784.57-1.838-.197-1.54-1.118l1.183-3.64a1 1 0 00-.364-1.118l-3.1-2.25c-.784-.57-.38-1.81.588-1.81h3.829a1 1 0 00.95-.69l1.184-3.64z" />
              </svg>
            ))}
          </div>

          {/* Comment */}
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Your Feedback"
            rows="4"
            required
            disabled={loading}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-2 rounded-md hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Submit Feedback"}
          </button>

          {/* Success / Error Message */}
          {success === true && (
            <p className="text-green-600 text-center font-semibold animate-pulse">
              ✅ Thank you for your feedback!
            </p>
          )}
          {success === false && (
            <p className="text-red-600 text-center font-medium">
              ❌ Failed to send. Please check your inputs and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Feedback;
