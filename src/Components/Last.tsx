import { motion } from "framer-motion";
import { useRef } from "react";
import kissImage from "../assets/kiss.jpg";

const ImageRightPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-400 px-8 py-6">
      
      {/* Forever With You text */}
      <motion.h1
        className="text-[5rem] md:text-[5rem] font-extrabold text-pink-700 text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Forever With You 💖
      </motion.h1>

      {/* Small image below text */}
      <motion.img
        src={kissImage}
        alt="Kiss"
        className="w-[10rem] md:w-[10rem] rounded-[1.5rem] shadow-lg mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <br></br>

      {/* Button to play music */}
      <button
        onClick={handlePlayMusic}
        className="mt-1 px-[1rem] py-[1rem] bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 text-white text-[1rem] md:text-[1rem] font-extrabold rounded-full shadow-2xl hover:from-pink-500 hover:via-rose-500 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-pink-400/70 animate-pulse z-20"
      >
        Play ❤️
      </button>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/Elvis Presley - Can't Help Falling In Love (Official Audio).mp3" loop />
    </div>
  );
};

export default ImageRightPage;
