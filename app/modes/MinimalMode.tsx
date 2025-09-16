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
            Software Engineer at Apple in San Diego, CA. Previously led
            full-stack projects and driving end-to-end solutions that scale at
            Daikin Comfort. Passionate about turning complex problems into simple, impactful products. UCLA alum and former Intel intern. Writing{" "}
            <a
              href="https://writer.is"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-normal cursor-pointer relative"
            >
              Writer
            </a>{" "}
            in my free time. Happy to connect on{" "}
            <a
              href="https://linkedin.com/in/kaywakabayashi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-normal cursor-pointer relative"
            >
              LinkedIn
            </a>{" "}
            or feel free to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="underline font-normal cursor-pointer relative"
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
