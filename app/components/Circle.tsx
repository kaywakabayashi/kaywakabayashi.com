import Link from "next/link";
import "../../styles/Home.modules.scss";

const Circle = () => {
  return (
    <div className="realative">
      <svg
        className="absolute"
        preserveAspectRatio="xMinYMin"
        style={{ animation: "rotate 20s linear infinite" }}
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
          className="animate-pulse fill-current text-stone-700 text-4xl"
        >
          <textPath href="#textPath" startOffset="50%" letterSpacing="50">
            <Link href="/about"> about </Link>
            <Link href="/projects"> projects </Link>
            <Link href="/contact"> contact </Link>
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Circle;
