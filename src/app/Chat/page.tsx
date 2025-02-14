"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import Footer1 from "../Components/Footer/footer1";

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const LetsChat = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();
  const [result, setResult] = useState<string>("");

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "f8585ef9-2e0b-4346-96d2-f6deff4460f1");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const resData = await response.json();

    if (resData.success) {
      setResult("✅ Form Submitted Successfully!");
      reset();
    } else {
      console.error("Error:", resData);
      setResult(`❌ ${resData.message}`);
    }
  };
  
  return (
    <>
      <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-teal-900 to-black">
        <motion.div
          className="w-full max-w-lg bg-white/10 backdrop-blur-lg shadow-lg border border-teal-400/50 p-6 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
            Let's Chat 💬
          </h2>
          <p className="text-teal-300 text-center mt-2">Have any queries? Feel free to reach out!</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full bg-black/20 border border-teal-400/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                className="w-full bg-black/20 border border-teal-400/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required.</p>}
            </div>

            {/* Message Input */}
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="w-full bg-black/20 border border-teal-400/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg"
            >
              <FiSend size={20} /> Send Message
            </motion.button>
          </form>

          {/* Success / Error Message */}
          {result && <p className="text-center mt-4 text-white">{result}</p>}
        </motion.div>
      </section>

      <Footer1 />
    </>
  );
};

export default LetsChat;
