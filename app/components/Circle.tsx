"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "../../styles/Home.modules.scss";
import {
  Bitter as MainFont,
  Moon_Dance as HandwritingFont,
  Satisfy as HandwritingFont2,
  Great_Vibes as HandwritingFont3,
} from "@next/font/google";

const handwritingFont = HandwritingFont({
  weight: "400",
  subsets: ["latin"],
  fallback: ["HandwritingFont2", "HandwritingFont3", "MainFont", "system-ui"],
});

export default function Circle() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setDate(new Date());
    setLoading(false);
  }, []);

  if (loading) return null;
  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div onClick={() => toggleTheme()}>
      <div className="relative">
        <svg
          className="absolute"
          // preserveAspectRatio="xMidYMin"
          style={{
            animation: "rotate 20s linear infinite",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <path
              id="textPath"
              d="M 250 500 A 250,250 0 1 1 250 500.0001"
              fill="transparent"
            />
          </defs>
          <text
            x="0"
            y="0"
            textAnchor="middle"
            className="fill-current text-xl"
          >
            <textPath href="#textPath" startOffset="50%" letterSpacing="19">
              <tspan className="opacity-40">
                {" "}
                {date.toLocaleString("en-US", {
                  timeZone: "America/Los_Angeles",
                  timeZoneName: "short",
                  weekday: "short",
                  hour: "numeric",
                  month: "short",
                  day: "2-digit",
                })}{" "}
                - Los Angeles CA -{" "}
              </tspan>

              <tspan className="animate-pulse opacity-100 hover:cursor-pointer">
                {theme == "light" ? "too light?" : "too dark?"}
              </tspan>
            </textPath>
          </text>
        </svg>
        <a href="#" onClick={() => toggleTheme()}></a>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden text-6xl">
        <span className={handwritingFont.className}>kw</span>
      </div>
    </div>
  );
}
