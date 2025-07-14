"use client";

import { memo, useMemo, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Circle from "../components/Circle";
import ProjectSection from "../components/ProjectSection";
import {
  FIRST_NAME,
  POSITION,
  SCHOOL,
  MAJOR,
  LOCATION,
  EMAIL,
  RESUME_LINK,
  LINKEDIN_LINK,
  GITHUB_LINK,
} from "../constants";

interface ScrollModeProps {
  mainFont: {
    className: string;
  };
}

interface StudySection {
  title: string;
  courses: readonly string[];
  gradient: string;
}

interface WorkExperience {
  title: string;
  description: string;
  gradient: string;
}

interface InteractiveTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

interface AnimatedContainerProps {
  title: string;
  content: string | readonly string[];
  gradient: string;
  glowColor?: string;
  variant?: "default" | "compact";
}

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
  glowColor?: string;
  gradient?: string;
}

interface SectionContainerProps {
  items: ReadonlyArray<{
    title: string;
    courses?: readonly string[];
    description?: string;
    gradient: string;
  }>;
  glowColor?: string;
  variant?: "default" | "compact";
  containerClassName?: string;
}

interface HeadlineSectionProps {
  title: string;
  children?: React.ReactNode;
}

const STUDY_SECTIONS: readonly StudySection[] = [
  {
    title: "Computer Science",
    courses: [
      "Algorithm and Complexity",
      "Formal Languages and Automata Theory",
      "Fundamentals of Artificial Intelligence",
      "Program Languages",
      "Software Construction Laboratory",
      "Data Structures",
      "x86 Assembly",
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Mathematics",
    courses: [
      "Linear Algebra",
      "Differential Equations",
      "Multivariable Calculus",
      "Discrete Structures",
      "Probability",
    ],
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Linguistics",
    courses: [
      "Computational Linguistics",
      "Syntax",
      "Phonetics",
      "Phonology",
      "Phonology II",
      "Syntactic Typology",
      "Linguistic Analysis",
      "Current Methods of Language Teaching",
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
] as const;

const WORK_EXPERIENCE: readonly WorkExperience[] = [
  {
    title: "Software Engineer at Daikin Comfort",
    description: "Daikin One Team",
    gradient: "from-blue-600/10 to-indigo-600/10",
  },
  {
    title: "Software Engineer Intern at Intel Corporation",
    description: "Intel Evo Team",
    gradient: "from-cyan-600/10 to-blue-600/10",
  },
  {
    title: "Full-Stack Developer at Bruinwalk",
    description: "UCLA #1 Course & Apartment Review Website",
    gradient: "from-purple-600/10 to-pink-600/10",
  },
] as const;

const CONTACT_LINKS = [
  {
    href: LINKEDIN_LINK,
    label: "LinkedIn",
    glowColor: "#0ea5e9",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    href: GITHUB_LINK,
    label: "GitHub",
    glowColor: "#a78bfa",
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
  {
    href: RESUME_LINK,
    label: "Resume",
    glowColor: "#f59e0b",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
] as const;

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollProgress;
};

const useMouseAmbientLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return { mousePosition, isVisible };
};

const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible] as const;
};

const HeadlineSection = memo<HeadlineSectionProps>(({ title, children }) => {
  return (
    <div className="text-center">
      <header className="flex flex-col justify-center items-center h-screen font-bold text-6xl">
        {title.length < 5 ? (
          <p className="sticky top-0 sm:text-[13rem] py-8">
            <InteractiveText
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              glowColor="#8b5cf6"
            >
              {title}
            </InteractiveText>
          </p>
        ) : (
          <p className="sticky top-0 sm:text-[6rem] lg:text-[10rem] xl:text-[13rem] py-8">
            <InteractiveText
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              glowColor="#8b5cf6"
            >
              {title}
            </InteractiveText>
          </p>
        )}
      </header>
    </div>
  );
});

HeadlineSection.displayName = "HeadlineSection";

const InteractiveText = memo<InteractiveTextProps>(
  ({ children, className = "", glowColor = "#60a5fa" }) => {
    const [isHovered, setIsHovered] = useState(false);

    const textStyle = useMemo(
      () => ({
        color: isHovered ? glowColor : undefined,
        textShadow: isHovered
          ? `0 0 20px ${glowColor}80, 0 0 40px ${glowColor}40`
          : undefined,
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        filter: isHovered ? "brightness(1.3)" : "brightness(1)",
      }),
      [isHovered, glowColor]
    );

    return (
      <span
        className={`transition-all duration-300 cursor-default ${className}`}
        style={textStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </span>
    );
  }
);

InteractiveText.displayName = "InteractiveText";

const AnimatedContainer = memo<AnimatedContainerProps>(
  ({
    title,
    content,
    gradient,
    glowColor = "#a78bfa",
    variant = "default",
  }) => {
    const [ref, isVisible] = useIntersectionObserver(
      variant === "compact" ? 0.3 : 0.2
    );
    const [isExpanded, setIsExpanded] = useState(false);
    const isCompact = variant === "compact";

    const handleClick = useCallback(() => {
      setIsExpanded((prev) => !prev);
    }, []);

    const containerClasses = useMemo(() => {
      const baseClasses =
        "group relative overflow-hidden transition-all duration-700 cursor-pointer";
      const sizeClasses = isCompact ? "rounded-xl p-6" : "rounded-2xl p-8";
      const hoverClasses = isCompact
        ? "hover:scale-[1.01]"
        : "hover:scale-[1.02]";
      const visibilityClasses = isVisible
        ? "opacity-100 translate-y-0"
        : `opacity-0 ${isCompact ? "translate-y-6" : "translate-y-8"}`;

      return `${baseClasses} ${sizeClasses} ${hoverClasses} ${visibilityClasses}`;
    }, [isCompact, isVisible]);

    const backgroundClasses = useMemo(() => {
      const baseClasses = `absolute inset-0 bg-gradient-to-${
        isCompact ? "r" : "br"
      } ${gradient} transition-all duration-500`;
      const opacityClasses = isExpanded
        ? "opacity-100"
        : isCompact
        ? "opacity-0 hover:opacity-100"
        : "group-hover:opacity-100 opacity-0";

      return `${baseClasses} ${opacityClasses}`;
    }, [isCompact, gradient, isExpanded]);

    const renderContent = () => {
      if (Array.isArray(content)) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.map((item, index) => (
              <div key={item} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-current rounded-full opacity-50 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  <InteractiveText glowColor={glowColor}>
                    {item}
                  </InteractiveText>
                </span>
              </div>
            ))}
          </div>
        );
      }
      return (
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-current rounded-full opacity-50 flex-shrink-0" />
          <span className="text-sm md:text-base">
            <InteractiveText glowColor={glowColor}>{content}</InteractiveText>
          </span>
        </div>
      );
    };

    return (
      <div ref={ref} className={containerClasses} onClick={handleClick}>
        <div className={backgroundClasses} />

        <div
          className={`absolute inset-0 ${
            isCompact ? "rounded-xl" : "rounded-2xl"
          } border ${
            isExpanded
              ? "border-white/30"
              : isCompact
              ? "border-white/5 hover:border-white/20"
              : "border-white/10 group-hover:border-white/20"
          } transition-all duration-500`}
        />

        <div className="relative z-10">
          <h3
            className={`${
              isCompact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            } font-medium ${
              isExpanded
                ? "text-white"
                : isCompact
                ? "text-white/80 hover:text-white"
                : "text-white/80 group-hover:text-white"
            } transition-all duration-500`}
          >
            <InteractiveText glowColor={glowColor}>{title}</InteractiveText>
          </h3>

          {/* Content that shows/hides on click */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              isExpanded
                ? "max-h-96 opacity-100 transform translate-y-0"
                : "max-h-0 opacity-0 transform -translate-y-2"
            } overflow-hidden`}
          >
            <div
              className={`${
                isCompact ? "text-white/70" : "text-white/70 leading-relaxed"
              } pt-4 border-t border-white/10 mt-4`}
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
AnimatedContainer.displayName = "AnimatedContainer";

const ContactLink = memo<ContactLinkProps>(
  ({
    href,
    children,
    glowColor = "#60a5fa",
    gradient = "from-blue-500/20 to-purple-500/20",
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const textStyle = useMemo(
      () => ({
        color: isHovered ? glowColor : undefined,
        textShadow: isHovered
          ? `0 0 20px ${glowColor}80, 0 0 40px ${glowColor}40`
          : undefined,
      }),
      [isHovered, glowColor]
    );

    return (
      <Link
        href={href}
        className="group relative overflow-hidden rounded-xl p-6 transition-all duration-700 hover:scale-[1.02] block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-all duration-500 opacity-0 group-hover:opacity-100`}
        />
        <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />

        <div className="relative z-10">
          <span
            className="text-2xl xs:text-4xl sm:text-5xl font-thin text-white/80 group-hover:text-white transition-all duration-500"
            style={textStyle}
          >
            {children}
          </span>
        </div>
      </Link>
    );
  }
);

ContactLink.displayName = "ContactLink";

const SectionContainer = memo<SectionContainerProps>(
  ({
    items,
    glowColor = "#a78bfa",
    variant = "default",
    containerClassName = "max-w-6xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-1 text-left",
  }) => {
    return (
      <div className={containerClassName}>
        {items.map((item, index) => (
          <AnimatedContainer
            key={`${item.title}-${index}`}
            title={item.title}
            content={item.courses || item.description || ""}
            gradient={item.gradient}
            glowColor={glowColor}
            variant={variant}
          />
        ))}
      </div>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

const MouseAmbientLight = memo<{
  mousePosition: { x: number; y: number };
  isVisible: boolean;
}>(({ mousePosition, isVisible }) => {
  const ambientStyle = useMemo(
    () => ({
      left: mousePosition.x - 300,
      top: mousePosition.y - 300,
      width: 600,
      height: 600,
    }),
    [mousePosition]
  );

  return (
    <div
      className={`fixed pointer-events-none z-30 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={ambientStyle}
    >
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 100%)",
          transform: "scale(0.7)",
          left: "15%",
          top: "15%",
        }}
      />
      <div
        className="absolute rounded-full blur-xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
          width: 200,
          height: 200,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(0.5)",
        }}
      />
    </div>
  );
});

MouseAmbientLight.displayName = "MouseAmbientLight";

const BackgroundElements = memo(() => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
    <div
      className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "1s" }}
    />
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "2s" }}
    />
  </div>
));

BackgroundElements.displayName = "BackgroundElements";

const ScrollMode: React.FC<ScrollModeProps> = ({ mainFont }) => {
  const scrollProgress = useScrollProgress();
  const { mousePosition, isVisible } = useMouseAmbientLight();
  const [heroRef, heroVisible] = useIntersectionObserver(0.5);
  const [introRef, introVisible] = useIntersectionObserver(0.3);
  const [contactTitleRef, contactTitleVisible] = useIntersectionObserver(0.3);
  const [contactLinksRef, contactLinksVisible] = useIntersectionObserver(0.3);

  const introText = useMemo(
    () => (
      <>
        I am{" "}
        <InteractiveText
          className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          glowColor="#8b5cf6"
        >
          {FIRST_NAME}
        </InteractiveText>
        , a{" "}
        <InteractiveText
          className="font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"
          glowColor="#10b981"
        >
          {POSITION}
        </InteractiveText>{" "}
        in{" "}
        <InteractiveText
          className="font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
          glowColor="#f59e0b"
        >
          {LOCATION}
        </InteractiveText>
        , a graduate of{" "}
        <InteractiveText
          className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          glowColor="#ec4899"
        >
          {SCHOOL}{" "}
        </InteractiveText>
        <span className="leading-snug">
          with BA in{" "}
          <InteractiveText glowColor="#3b82f6">{MAJOR}</InteractiveText>.
        </span>
      </>
    ),
    []
  );

  const progressBarStyle = useMemo(
    () => ({
      width: `${scrollProgress}%`,
    }),
    [scrollProgress]
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <MouseAmbientLight mousePosition={mousePosition} isVisible={isVisible} />

      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-150"
        style={progressBarStyle}
      />

      <BackgroundElements />

      <main className={`${mainFont.className} text-center px-5 relative z-10`}>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-screen w-full flex justify-center items-center overflow-hidden"
          aria-label="Hero section with animated circle"
        >
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] md:w-[50rem] md:h-[50rem] transition-all duration-1000 ${
              heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Circle />
          </div>
        </section>

        {/* Introduction Section */}
        <section aria-labelledby="intro-heading" className="py-20">
          <h1
            ref={introRef}
            id="intro-heading"
            className={`text-3xl sm:text-6xl md:text-7xl flex flex-col justify-center gap-6 items-center font-thin text-white transition-all duration-1000 ${
              introVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="leading-loose max-w-6xl">{introText}</p>
          </h1>
        </section>

        {/* Work Experience Section */}
        <section aria-labelledby="work-heading" className="py-20">
          <HeadlineSection title="worked" />
          <div id="work-heading" className="sr-only">
            Work Experience
          </div>
          <SectionContainer
            items={WORK_EXPERIENCE}
            glowColor="#34d399"
            variant="default"
            containerClassName="max-w-6xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-1 text-left"
          />
        </section>

        {/* Education Section */}
        <section aria-labelledby="education-heading" className="py-20">
          <HeadlineSection title="studied" />
          <div id="education-heading" className="sr-only">
            Education and Coursework
          </div>
          <SectionContainer
            items={STUDY_SECTIONS}
            glowColor="#a78bfa"
            variant="default"
          />
        </section>

        {/* Contact Section */}
        <section aria-labelledby="contact-heading" className="py-20">
          <div id="contact-heading" className="sr-only">
            Contact Information
          </div>

          <div className="h-screen text-center w-full flex flex-col justify-evenly font-bold">
            <div
              ref={contactTitleRef}
              className={`text-7xl xs:text-[8rem] sm:text-[10rem] md:text-[13rem] transition-all duration-1000 ${
                contactTitleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <InteractiveText
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                glowColor="#8b5cf6"
              >
                let's talk?
              </InteractiveText>
            </div>

            <div
              ref={contactLinksRef}
              className={`max-w-4xl mx-auto w-full transition-all duration-1000 ${
                contactLinksVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <ContactLink
                  href={`mailto:${EMAIL}`}
                  glowColor="#10b981"
                  gradient="from-green-500/20 to-teal-500/20"
                >
                  Email
                </ContactLink>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CONTACT_LINKS.map(({ href, label, glowColor, gradient }) => (
                    <ContactLink
                      key={label}
                      href={href}
                      glowColor={glowColor}
                      gradient={gradient}
                    >
                      {label}
                    </ContactLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default memo(ScrollMode);
