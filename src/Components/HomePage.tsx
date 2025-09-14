import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // Generate random hearts across the whole screen
  const hearts = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    delay: Math.random() * 4.5, // so they don't all start at once
    size: Math.random() * 2 + 1, // scale factor for different sizes
  }));

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Floating hearts across the screen */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-500"
          style={{
            left: heart.x,
            fontSize: `${heart.size * 2.5}rem`,
          }}
          initial={{ y: "110vh" }}
          animate={{ y: "-20vh" }}
          transition={{
            duration: 3 + Math.random() * 3, // faster floating
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Title */}
      <motion.h1
        className="text-[5rem] md:text-[7rem] font-extrabold text-pink-700 drop-shadow-2xl mb-14 text-center z-20 leading-tight"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Happy 6 Months, My Love 💕
      </motion.h1>

      {/* Button */}
      <motion.button
        onClick={() => navigate("/memories")}
        className="px-[2rem] py-[1rem] bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 text-white text-[1.5rem] md:text-[1.5rem] font-extrabold rounded-full shadow-2xl hover:from-pink-500 hover:via-rose-500 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-pink-400/70 animate-pulse z-20"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Click 💖
      </motion.button>
    </div>
  );
};

export default HomePage;
