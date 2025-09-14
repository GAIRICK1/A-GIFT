import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LovePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-400 px-8 py-6">
      
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[1.5rem] md:text-[2rem] font-extrabold text-pink-700 leading-relaxed">
          Hiiiii Babbyyy! 🥰 <br /><br />
          Happy 6 months, my love! These past 6 months have been the happiest of my life. I feel so lucky to have you in my world, and I will always cherish every moment with you. You mean everything to me ❤️.<br /><br />
          I LOVE YOU endlessly, and I always want to be by your side, now and forever 💕💖
        </p>

        {/* Clickable Button */}
        <motion.button
          onClick={() => navigate("/last")}
                 className="px-[2rem] py-[1rem] bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 text-white text-[1rem] md:text-[1rem] font-extrabold rounded-full shadow-2xl hover:from-pink-500 hover:via-rose-500 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-pink-400/70 animate-pulse z-20"

          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          Click 💖
        </motion.button>
      </motion.div>

    </div>
  );
};

export default LovePage;
