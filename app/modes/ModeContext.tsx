"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Mode = "scroll" | "click" | string;
interface ModeContextType {
  currentMode: Mode;
  switchMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentMode, setCurrentMode] = useState<Mode>("scroll");

  const switchMode = (mode: Mode) => {
    setCurrentMode(mode);
  };

  return (
    <ModeContext.Provider value={{ currentMode, switchMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = (): ModeContextType => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
};

const renderContent = (activeSection: string): JSX.Element => {
  switch (activeSection) {
    case "about":
      return (
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-5xl font-thin">Hello!</h2>
          <p className="text-2xl leading-relaxed font-thin">
            I am <span className="font-bold">FULL_NAME</span>, a{" "}
            <span className="font-bold">POSITION</span> in{" "}
            <span className="font-bold">LOCATION</span>.
          </p>
        </div>
      );

    case "work":
      return (
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-5xl font-thin">Work</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 p-4">
              <h3 className="text-xl font-semibold">
                Software Engineer at Daikin Comfort
              </h3>
              <p className="text-gray-600">Daikin One Team</p>
            </div>
          </div>
        </div>
      );

    default:
      return <div>Content loading...</div>;
  }
};

export { renderContent };
