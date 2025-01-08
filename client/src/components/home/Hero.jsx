import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced Hero Section
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              Powered by AI
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Elevate Your <br />
              <span className="text-primary-600">Social Media</span> Presence
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              Harness the power of AI-driven insights to supercharge your engagement and grow your community effortlessly.
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight size={20} />
              </Link>

              <Link
                to="https://youtu.be/TGx_P_ZqODM?si=xarEUl8PBNHYYbXy"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-300 border border-primary-200">
                View Demo
                <ChartBar size={20} />
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/40/40?random=${i}`}
                    alt={`User ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-bold text-primary-600">200+</span>{" "}
                  satisfied users
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl blur-2xl opacity-20 transform rotate-3"></div>
            <img
              src="/hero.png"
              alt="Analytics Dashboard"
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
