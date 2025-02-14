"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LetsChat() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget; // Ensures we get the form element
    const formData = new FormData(form);
    formData.append("access_key", "f8585ef9-2e0b-4346-96d2-f6deff4460f1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        toast.success("Inquiry sent successfully! Check your email for confirmation.");
        form.reset(); // Ensures the form is reset properly
      } else {
        console.error("Error:", data);
        setResult(data.message);
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">Let's Build Your Project</h2>
        <p className="text-gray-400 text-center mb-6">Fill out the form below, and I'll get back to you ASAP!</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          {/* Name Input */}
          <div>
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="your@email.com"
            />
          </div>

          {/* Project Type Dropdown */}
          <div>
            <label className="block text-gray-300 mb-1">Project Type</label>
            <select
              name="projectType"
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select a type</option>
              <option value="Website Development">Website Development</option>
              <option value="E-Commerce Store">E-Commerce Store</option>
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Budget Dropdown */}
          <div>
            <label className="block text-gray-300 mb-1">Estimated Budget</label>
            <select
              name="budget"
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select your budget</option>
              <option value="$100 - $500">$100 - $500</option>
              <option value="$500 - $1000">$500 - $1,000</option>
              <option value="$1000 - $5000">$1,000 - $5,000</option>
              <option value="$5000+">$5,000+</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-gray-300 mb-1">Project Description</label>
            <textarea
              name="message"
              required
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Describe your project details here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 transition duration-200 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Send Inquiry
          </button>

          {/* Confirmation Message */}
          <p className="text-center text-gray-400 text-sm mt-3">{result}</p>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
