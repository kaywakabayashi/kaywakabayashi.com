"use client";
import { useEffect, useState } from "react";
import "../../styles/Home.modules.scss";
import {
  Bitter as MainFont,
  Moon_Dance as HandwritingFont,
} from "next/font/google";
import { LOCATION } from "../constants";

const handwritingFont = HandwritingFont({
  weight: "400",
  subsets: ["latin"],
  fallback: ["MainFont", "system-ui"],
});


export default function Circle() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDate(new Date());
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div>
      <div className="relative">
        <svg
          className="absolute"
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
            <textPath
              href="#textPath"
              startOffset="50%"
              letterSpacing="20"
              className="opacity-40"
            >
              <tspan>
                {" "}
                {date.toLocaleString("en-US", {
                  timeZone: "America/Chicago",
                  timeZoneName: "short",
                  weekday: "short",
                  hour: "numeric",
                  month: "short",
                  day: "2-digit",
                })}{" "}
                | {LOCATION} |{" "}
              </tspan>
              <tspan>
                Contact{" "}
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden text-6xl">
        <span className={handwritingFont.className}>kw</span>
      </div>
    </div>
  );
}
