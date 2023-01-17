"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "../../styles/Home.modules.scss";

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
    <div className="relative">
      <svg
        className="absolute overflow-hidden"
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
        <text x="0" y="0" textAnchor="middle" className=" fill-current text-xl">
          <textPath href="#textPath" startOffset="50%" letterSpacing="24">
            <tspan className="opacity-40">
              {" "}
              {date.toLocaleString("en-US", {
                timeZone: "America/Los_Angeles",
                timeZoneName: "short",
                weekday: "short",
                // year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
              - Los Angeles CA -{" "}
            </tspan>

            <tspan
              onClick={() => toggleTheme()}
              className="animate-pulse opacity-100 hover:cursor-pointer"
            >
              {theme == "light" ? "too bright?" : "too dark?"}
            </tspan>
          </textPath>
        </text>
      </svg>
      <a href="#" onClick={() => toggleTheme()}></a>
    </div>
  );
}
