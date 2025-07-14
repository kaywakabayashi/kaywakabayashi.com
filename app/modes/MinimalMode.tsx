"use client";

import { useState, useRef } from "react";
import {
  FULL_NAME,
  POSITION,
  SCHOOL,
  MAJOR,
  LOCATION,
  EMAIL,
  RESUME_LINK,
  LINKEDIN_LINK,
  GITHUB_LINK,
} from "../constants";

interface MinimalModeProps {
  mainFont: {
    className: string;
  };
}

const MinimalMode: React.FC<MinimalModeProps> = ({ mainFont }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
    showBelow: true,
  });

  const tooltipContent = {
    daikin: {
      title: "Daikin Comfort",
      content: "As you may know for Daikin Park",
      link: "https://daikincomfort.com",
    },
    bruinwalk: {
      title: "Bruinwalk",
      content: "UCLA's #1 course review platform",
      link: "https://bruinwalk.com",
    },
  };

  const handleMouseEnter = (item: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipWidth = 320;
    const tooltipHeight = 150;
    const padding = 40;
    const gap = 10;

    let x = rect.left + rect.width / 2;
    let y = rect.bottom + gap;
    let showBelow = true;

    if (y + tooltipHeight > window.innerHeight - padding) {
      y = rect.top - gap;
      showBelow = false;
    }

    if (x + tooltipWidth / 2 > window.innerWidth - padding) {
      x = window.innerWidth - tooltipWidth / 2 - padding;
    }

    if (x - tooltipWidth / 2 < padding) {
      x = tooltipWidth / 2 + padding;
    }

    if (!showBelow && y - tooltipHeight < padding) {
      y = rect.bottom + gap;
      showBelow = true;
    }

    setTooltipPosition({ x, y, showBelow });
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div
      className="min-h-screen bg-white relative"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-light mb-12 tracking-wide">
          {FULL_NAME}.
        </h1>

        {/* One Simple Paragraph */}
        <div className="text-gray-700 leading-relaxed text-lg space-y-6">
          <p>
            I'm a {POSITION} at{" "}
            <a
              href="https://daikincomfort.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-medium cursor-pointer relative"
              onMouseEnter={(e) => handleMouseEnter("daikin", e)}
              onMouseLeave={handleMouseLeave}
            >
              Daikin Comfort
            </a>{" "}
            in {LOCATION}, leading full-stack projects. I previously interned at{" "}
            <a
              href="https://intel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-medium cursor-pointer relative"
              onMouseEnter={(e) => handleMouseEnter("intel", e)}
              onMouseLeave={handleMouseLeave}
            >
              Intel
            </a>{" "}
            . At UCLA, I studied linguistics and cs and I was part of{" "}
            <a
              href="https://bruinwalk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-medium cursor-pointer relative"
              onMouseEnter={(e) => handleMouseEnter("bruinwalk", e)}
              onMouseLeave={handleMouseLeave}
            >
              Bruinwalk.
            </a>{" "}
            Check out my{" "}
            <a
              href={RESUME_LINK}
              className="underline hover:no-underline font-medium cursor-pointer relative"
            >
              resume
            </a>
            ,{" "}
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-medium cursor-pointer relative"
              onMouseEnter={(e) => handleMouseEnter("linkedin", e)}
              onMouseLeave={handleMouseLeave}
            >
              LinkedIn
            </a>
            , or{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="underline hover:no-underline font-medium cursor-pointer relative"
              onMouseLeave={handleMouseLeave}
            >
              get in touch
            </a>
            .
          </p>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredItem &&
        tooltipContent[hoveredItem as keyof typeof tooltipContent] && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transform: tooltipPosition.showBelow
                ? "translate(-50%, 0)"
                : "translate(-50%, -100%)",
            }}
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                {
                  tooltipContent[hoveredItem as keyof typeof tooltipContent]
                    .title
                }
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {
                  tooltipContent[hoveredItem as keyof typeof tooltipContent]
                    .content
                }
              </p>
            </div>
          </div>
        )}
    </div>
  );
};

export default MinimalMode;
