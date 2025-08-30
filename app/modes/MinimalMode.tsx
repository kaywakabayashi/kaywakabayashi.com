"use client";

import React from "react";
import { EMAIL, LINKEDIN_LINK } from "../constants";

const MinimalMode: React.FC = () => {
  return (
    <div 
      className="min-h-screen bg-white relative flex items-center justify-center"
      style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-gray-700 leading-relaxed text-lg space-y-6">
          <p>
            Software Engineer at Daikin Comfort in Houston, TX. Leading
            full-stack projects and driving end-to-end solutions that scale.
            UCLA alum and former Intel intern. Writing{" "}
            <a
              href="https://writer.is"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold cursor-pointer relative"
            >
              Writer
            </a>{" "}
            in my free time. Happy to connect on{" "}
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold cursor-pointer relative"
            >
              LinkedIn
            </a>{" "}
            or feel free to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="hover:underline font-semibold cursor-pointer relative"
            >
              write
            </a>{" "}
            to me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinimalMode;
