import "./Card.css";
import { motion } from "framer-motion";
import { FaBolt, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaBolt size={30} />,
    title: "Fast Performance",
    desc: "Optimized for speed across all devices.",
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: "Beautiful Design",
    desc: "Modern and clean UI/UX tailored to your brand.",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Custom Development",
    desc: "Scalable code tailored to your needs.",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Custom Development",
    desc: "Scalable code tailored to your needs.",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Custom Development",
    desc: "Scalable code tailored to your needs.",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Custom Development",
    desc: "Scalable code tailored to your needs.",
  },
];

const Card = () => {
  return (
    <>
      <section className="relative overflow-hidden py-16 px-6">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-black  to-gray-800  opacity-90  z-0" />
        <div className="relative z-10">
          <section className=" text-white py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              🚀 Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, i) => {
                const { icon, title, desc } = service;

                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg"
                  >
                    <div className="mb-4 text-blue-400">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-300">{desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
