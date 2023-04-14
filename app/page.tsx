import "../styles/Home.modules.scss";
import { Bitter as MainFont } from "@next/font/google";
import Footer from "./components/Footer";
import Circle from "./components/Circle";

import HeaderSection from "./components/HeaderSection";
const mainFont = MainFont({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className={`${mainFont.className} text-center`}>
      <section className="relative h-screen w-full flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] sm:w-[50rem] sm:h-[50rem]">
          <Circle />
        </div>
      </section>
      <section>
        <HeaderSection title="hello">
          <h1 className="sm:leading-relaxed leading-loose font-thin">
            <p>I am</p>
            <p>
              <span className="font-bold">Katsuya Wakabayashi</span>,
            </p>
            <p>a senior student studying</p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://catalog.registrar.ucla.edu/major/2022/LinguisticsandComputerScienceBA"
                className="hover:underline decoration-2 underline-offset-2"
              >
                <span className="font-bold">
                  linguistics and computer science
                </span>
              </a>
            </p>
            <p>
              at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://catalog.registrar.ucla.edu/major/2022/LinguisticsandComputerScienceBA"
                className="hover:underline decoration-2 underline-offset-2"
              >
                UCLA.
              </a>
            </p>
          </h1>
        </HeaderSection>
      </section>
      <section>
        <HeaderSection title="experienced" />
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
          stack="Django / Docker / GitHub Actions / DigitlOcean"
          link="https://bruinwalk.com"
        />
      </section>
      <section>
        <HeaderSection title="learned" />
        <h1 className="sm:text-xs md:text-2xl lg:text-4xl space-y-4 md:space-y-10 font-thin px-10">
          <div className="group space-y-2">
            <p className="opacity-30 group-hover:opacity-70">
              Computer Science{" "}
            </p>
            <p className="opacity-10 group-hover:opacity-100 leading-relaxed">
              Algorithm and Complexity, Formal Languages and Automata
              Theory,Fundamentals of Artificial Intelligence, Program
              Lanuguages, Software Construction Laboratory, Data Structures, x86
              Assembly,
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
            {" "}
            <p className="opacity-30 group-hover:opacity-70">Linguistics</p>
            <p className="opacity-10 group-hover:opacity-100 leading-relaxed">
              Computational Linguistics, Syntax, Phonetics, Phonology, Phonology
              II Syntactic Typology, Linguistic Analysis, Current Methods of
              Language Teaching
            </p>
          </div>
        </h1>
      </section>
      <section>
        <HeaderSection title="building" />
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
          email="wakabayashi@ucla.edu"
          linkedin="https://linkedin.com/in/katsuyawakabayashi"
          github="https://github.com/katsuyawakabayashi"
          resume="https://ucla.app.box.com/v/katsuyawakabayashi"
        />
      </section>

      <Footer />
    </main>
  );
}
