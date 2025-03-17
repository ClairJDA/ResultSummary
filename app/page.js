import ResultScore from "@/components/resultSocre";
import SummaryDetail from "@/components/summaryDetail";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-y-5 bg-pale-blue">
      <div className="md:w-xl h-screen md:h-fit flex flex-col md:flex-row rounded-2xl bg-white hanken-grotesk">
        <ResultScore />
        <SummaryDetail />
      </div>
      <div className="hidden md:block attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">ClairJDA</a>.
      </div>
    </div>
  );
}
