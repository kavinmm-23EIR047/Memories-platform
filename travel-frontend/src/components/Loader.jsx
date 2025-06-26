import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const runLoader = async () => {
      await new Promise((r) => setTimeout(r, 1500)); // wait for bus to start
      setShowText(true); // show full glowing text
      await new Promise((r) => setTimeout(r, 3000)); // hold with glow
      setFadeOut(true); // start fade out
      await new Promise((r) => setTimeout(r, 1000)); // complete fade
      onComplete?.(); // go to main page
    };

    runLoader();
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Loader Content */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        {/* Bus Lottie Animation */}
        <div className="w-[300px] sm:w-[360px] md:w-[440px] lg:w-[520px] xl:w-[600px] animate-float-bus">
          <DotLottieReact
            src="https://lottie.host/807a502c-2c29-46ed-854a-0a12cdb1923b/ikv7FMeRRJ.lottie"
            loop
            autoplay
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Glowing Text */}
        <div className="mt-6 text-center">
          <div className="text-gray-800 font-bold drop-shadow-lg">
            <div
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-2 text-amber-800 font-mui transition-all duration-1000 transform ${
                showText ? 'opacity-100 scale-100 animate-title-glow animate-slide-up' : 'opacity-0 scale-75'
              }`}
            >
              MEMORIES
            </div>
            <div
              className={`text-sm sm:text-lg md:text-xl font-light tracking-wider text-gray-700 transition-all duration-1000 transform ${
                showText ? 'opacity-100 scale-100 animate-title-glow animate-slide-up' : 'opacity-0 scale-75'
              }`}
            >
              PLATFORM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
