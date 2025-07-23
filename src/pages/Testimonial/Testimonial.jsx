import "./Testimonial.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nusrat Jahan",
    Title: "Senior Product Designer",
    Company: "PixelForge",
    feedback:
      "Their attention to detail and commitment to quality is unmatched",
    image: "https://i.pravatar.cc/100?img=1",
    star: "🌟🌟🌟🌟🌟",
  },
  {
    name: "Rahim Uddin",
    Title: "Software Engineer",
    Company: "CodeCraft Labs",
    feedback: "Seamless collaboration, timely delivery, and top-notch quality.",
    image: "https://i.pravatar.cc/100?img=2",
    star: "🌟🌟🌟🌟",
  },
  {
    name: "Tanvir Hasan",
    Title: "Marketing Director",
    Company: "NovaReach Agency",
    feedback:
      "From strategy to execution, everything was handled professionally.",
    image: "https://i.pravatar.cc/100?img=3",
    star: "🌟🌟🌟🌟🌟",
  },
];

const Testimonial = () => {
  return (
    <div  >
      <section className="relative overflow-hidden py-16 px-6 ">
        {/* Top-left  */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-black opacity-40   animate-diagonal-right" />

        {/* Top-right  */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-black opacity-40   animate-diagonal-left" />

        {/* Bottom-right */}
        <div className="absolute bottom-6 right-24 w-56 h-56 bg-black opacity-40 hidden md:block rounded-tr-full animate-float-down-right" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-black opacity-40 rounded-bl-full  animate-float-down-left" />
        


        {/* Bottom-left  */}
        <div className="absolute bottom-6 left-24 w-56 h-56 bg-black opacity-40 hidden md:block rounded-bl-full animate-float-down-left" />
        <div className="absolute bottom-10 left-20 w-56 h-56 bg-black opacity-40 rounded-tr-full  animate-float-up-right" />


        <div className="relative z-10">
          <section className="text-white py-14 px-">
            <h2 className="text-3xl font-bold text-center mb-20">
              💬 What Clients Say
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, i) => {
                const { image, name, star, feedback, Company, Title } =
                  testimonial;

                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                    className="bg-white/5 p-6 mb-6 rounded-2xl border border-white/10 shadow-xl relative "
                  >
                    <img
                      src={image}
                      alt={name}
                      className="w-20 h-20 rounded-full border-2 border-y-teal-300 absolute -top-9 left-1"
                    />
                    <div className="mt-8">
                      <p className="text-gray-300 italic mb-4">❝{feedback}❞</p>
                      <p>{star}</p>
                      <h4 className="text-lg font-semibold">{name}</h4>
                      <p>
                        {Title}{" "}
                        <span className="text-amber-700 font-bold">
                          {Company}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
