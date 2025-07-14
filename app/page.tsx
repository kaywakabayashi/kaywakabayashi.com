"use client";

import "../styles/Home.modules.scss";
import { Bitter as MainFont } from "next/font/google";
import { useState, useEffect } from "react";
import MinimalMode from "./modes/MinimalMode";
import ScrollMode from "./modes/ScrollMode";

const mainFont = MainFont({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [currentMode, setCurrentMode] = useState("minimal");
  const [isClient, setIsClient] = useState(false);
  const [showModeHint, setShowModeHint] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const switchMode = () => {
    setCurrentMode(currentMode === "minimal" ? "scroll" : "minimal");
  };

  const handleCornerClick = () => {
    switchMode();
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Press 'M' key to switch modes
      if (e.key === "m" || e.key === "M") {
        switchMode();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentMode]);

  const [sequence, setSequence] = useState<string[]>([]);
  const targetSequence = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

  useEffect(() => {
    const handleSequence = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key].slice(-4);
      setSequence(newSequence);

      if (JSON.stringify(newSequence) === JSON.stringify(targetSequence)) {
        switchMode();
        setSequence([]);
      }
    };

    window.addEventListener("keydown", handleSequence);
    return () => window.removeEventListener("keydown", handleSequence);
  }, [sequence, currentMode]);

  if (!isClient) {
    return null;
  }

  return (
    <div key={currentMode}>
      {/* Render the appropriate mode */}
      {currentMode === "minimal" ? (
        <MinimalMode mainFont={mainFont} />
      ) : (
        <ScrollMode mainFont={mainFont} />
      )}

      <div
        onClick={handleCornerClick}
        className="fixed top-0 right-0 w-8 h-8 z-50 cursor-pointer"
        title="Switch mode"
      />
      <div
        className="fixed bottom-4 left-4 z-50 text-xs text-gray-400 opacity-50"
        onClick={switchMode}
      >
        Press M or click
      </div>
    </div>
  );
}
