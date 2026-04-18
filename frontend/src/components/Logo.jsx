import { SparklesIcon } from "lucide-react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 hover:scale-105 transition-transform duration-200"
    >
      <div className="size-10 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg ">
        <SparklesIcon className="size-6 text-white" />
      </div>

      <div className="flex flex-col">
        <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
          Talent IQ
        </span>
        <span className="text-xs text-base-content/60 font-medium -mt-1">
          Code Together
        </span>
      </div>
    </Link>
  );
};

export default Logo;
