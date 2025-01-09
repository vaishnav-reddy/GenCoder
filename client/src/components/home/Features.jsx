import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Share2, Globe, LineChart, Target, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart2 size={24} />,
      title: "Live Performance Metrics",
      description:
        "Analyze your social media stats in real-time with detailed metrics and actionable insights. Make quick, informed decisions effortlessly.",
    },
    {
      icon: <Globe size={24} />,
      title: "Worldwide Reach Insights",
      description:
        "Gain a deeper understanding of your audience’s location and engagement across different regions and social platforms.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Growth Monitoring",
      description:
        "Track your follower count, content engagement, and overall performance trends over time.",
    },
    {
      icon: <Target size={24} />,
      title: "Deep Audience Understanding",
      description:
        "Discover your audience’s preferences, habits, and interaction patterns with comprehensive data.",
    },
    {
      icon: <Share2 size={24} />,
      title: "AI-Powered Suggestions",
      description:
        "Harness the power of AI to create engaging content, schedule posts optimally, and boost interaction rates.",
    },
    {
      icon: <Zap size={24} />,
      title: "Intelligent Workflow Automation",
      description:
        "Simplify your social media management with smart scheduling and automated posting tools.",
    },
  ];


  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock your full potential on social media with AI-driven tools and innovative technology.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
