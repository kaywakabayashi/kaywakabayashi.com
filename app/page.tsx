import "../styles/Home.modules.scss";
import { Bitter as MainFont } from "next/font/google";
import Footer from "./components/Footer";
import Circle from "./components/Circle";
import HeadlineSection from "./components/HeadlineSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import {
  FIRST_NAME,
  FULL_NAME,
  POSITION,
  SCHOOL,
  MAJOR,
  LOCATION,
  EMAIL,
  RESUME_LINK,
  LINKEDIN_LINK,
  GITHUB_LINK,
} from "./constants";

const mainFont = MainFont({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${mainFont.className} text-center px-5`}>
      <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] md:w-[50rem] md:h-[50rem]">
          <Circle />
        </div>
      </section>
      <section>
        <HeadlineSection title="hello!" />
        <h1 className="text-3xl sm:text-6xl md:text-7xl h-screen flex flex-col justify-center gap-6 items-center font-thin">
          <p className="leading-loose">
            I am <span className="font-bold">{FULL_NAME}</span>, a{" "}
            <span className="font-bold">{POSITION}</span> in{" "}
            <span className="font-bold">{LOCATION}</span>, a graduate of{" "}
            <span className="font-bold">{SCHOOL} </span>
            <span className="leading-snug">with BA in {MAJOR}.</span>
          </p>
        </h1>
      </section>
      <section>
        <HeadlineSection title="worked" />
        <ProjectSection
          title="Software Engineer at Daikin Comfort"
          image="daikinone"
          description="Daikin One Team"
          stack="React Native / TypeScript / Python / AWS"
          link="https://daikinone.com"
        />
        <ProjectSection
          title="Software Engineer Intern at Intel Corporation"
          image="intelevo"
          description="Intel Evo Team"
          stack="Node.js / Elastic Stack / AWS / Terraform"
          link="https://intel.com/evo"
        />
        <ProjectSection
          title="Full-Stack Developer at Bruinwalk.com"
          image="bruinwalk"
          description="UCLA #1 Course & Apartment Review Website"
          stack="Django / Docker / GitHub Actions / DigitalOcean"
          link="https://bruinwalk.com"
        />
      </section>
      <section>
        <HeadlineSection title="studied" />
        <div className="sm:text-xs md:text-2xl lg:text-4xl space-y-4 md:space-y-10 font-thin">
          <div className="group space-y-2">
            <p className="opacity-30 group-hover:opacity-70">
              Computer Science
            </p>
            <p className="opacity-10 group-hover:opacity-100 leading-relaxed">
              Algorithm and Complexity, Formal Languages and Automata Theory,
              Fundamentals of Artificial Intelligence, Program Languages,
              Software Construction Laboratory, Data Structures, x86 Assembly,
            </p>
          </div>
          <div className="group space-y-2">
            <p className="opacity-30 group-hover:opacity-70">Mathematics</p>
            <p className="opacity-10 group-hover:opacity-100 leading-relaxed">
              Linear Algebra, Differential Equations, Multivariable Calculus,
              Discrete Structures, Probability
            </p>
          </div>
          <div className="group space-y-2">
            <p className="opacity-30 group-hover:opacity-70">Linguistics</p>
            <p className="opacity-10 group-hover:opacity-100 leading-relaxed">
              Computational Linguistics, Syntax, Phonetics, Phonology, Phonology
              II, Syntactic Typology, Linguistic Analysis, Current Methods of
              Language Teaching
            </p>
          </div>
        </div>
      </section>
      <section>
        <HeadlineSection title="building" />
        <ProjectSection
          title="Eternal Card"
          image="eternalcard"
          description="Art NFT Project"
          stack="Next.js / ethers.js"
          link="https://eternal-card.com"
        />
        <ProjectSection
          title="Efficiently App"
          image="efficientlyapp"
          description="Full-Stack Productivity App Project"
          stack="React.js / Firebase"
          link="https://efficiently.app"
        />
      </section>
      <section>
        <ContactSection
          title="let's talk?"
          email={EMAIL}
          linkedin={LINKEDIN_LINK}
          github={GITHUB_LINK}
          resume={RESUME_LINK}
        />
      </section>
      <Footer />
    </main>
  );
}
