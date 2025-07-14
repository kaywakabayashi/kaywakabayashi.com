"use client";

import { useMode } from "../modes/ModeContext";

const ModeSwitch: React.FC = () => {
  const { currentMode, switchMode } = useMode();

  const handleModeSwitch = () => {
    const newMode = currentMode === "scroll" ? "simple" : "scroll";
    switchMode(newMode);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleModeSwitch}
        className="group bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
        aria-label={`Switch to ${
          currentMode === "scroll" ? "simple" : "scroll"
        } mode`}
      >
        Switch to {currentMode === "scroll" ? "Simple" : "Scroll"} Mode
      </button>
    </div>
  );
};

export default ModeSwitch;
