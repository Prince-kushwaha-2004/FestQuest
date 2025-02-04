import { motion } from "framer-motion";
import React, { useState } from "react";

const FeatureCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Seamless Integration",
      description:
        "Connect with your favorite tools and apps to streamline your event management workflows.",
      gradient: "from-pink-500 via-purple-600 to-indigo-700",
      pattern:
        "radial-gradient(circle at top right, rgba(255,255,255,0.15) 1px, transparent 1px) 0 0/20px 20px",
      bgAccent:
        "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Connect with your favorite tools and apps to streamline your event management workflows.",
      gradient: "from-green-500 via-teal-400 to-cyan-600",
      pattern:
        "radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px) 0 0/15px 15px",
      bgAccent:
        "linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
    },
    {
      title: "Comprehensive Planning",
      description:
        "Connect with your favorite tools and apps to streamline your event management workflows.",
      gradient: "from-orange-500 via-amber-400 to-yellow-600",
      pattern:
        "radial-gradient(circle at bottom left, rgba(255,255,255,0.15) 1px, transparent 1px) 0 0/18px 18px",
      bgAccent:
        "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
    },
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="py-12 px-4  ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <motion.div
              className={`
                relative overflow-hidden rounded-xl p-8
                bg-gradient-to-br ${feature.gradient}
                shadow-lg transition-all duration-500
              
              `}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: feature.pattern }}
              />

              <div
                className="absolute inset-0 opacity-20 bg-[size:30px_30px] transition-all duration-700 group-hover:bg-[size:40px_40px]"
                style={{ backgroundImage: feature.bgAccent }}
              />

              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl" />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ scale: 1.01 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  className="text-white/90"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {feature.description}
                </motion.p>

                <motion.div
                  className="mt-6 flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                ></motion.div>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                         bg-gradient-to-t to-transparent"
                initial={false}
                animate={{
                  opacity: hoveredCard === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureCards;
