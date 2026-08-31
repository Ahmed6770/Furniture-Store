import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Features from "./Features";
import heroImage from "../../../assets/images/hero.png";

function HeroHome() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-375 px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-12 lg:gap-10 lg:py-12">
          
          {/* Left Side */}
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            <div className="flex flex-col items-center space-y-4 lg:items-start lg:space-y-5">

              {/* Title */}
              <h1 className="max-w-xl text-3xl font-bold leading-[1.1] text-stone-900 sm:text-4xl lg:text-5xl">
                Furniture That
                <br className="hidden lg:inline" />{" "}
                <span className="text-brand">Fits Your Life.</span>
              </h1>

              {/* Image - Mobile Only */}
              <div className="w-full pt-1 lg:hidden">
                <div className="overflow-hidden rounded-2xl border border-stone-100 shadow-sm">
                  <img
                    className="h-56 w-full object-cover sm:h-72"
                    src={heroImage}
                    alt="Modern Living Room"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="max-w-lg text-sm leading-6 text-stone-600 sm:text-base lg:text-lg lg:leading-7">
                Modern designs crafted for comfort, elegance, and your unique
                lifestyle.
              </p>

              {/* Buttons */}
              <div className="flex flex-row items-center justify-center gap-3 pt-1 lg:justify-start">
                <Link className="inline-flex h-11 items-center justify-center rounded-full bg-stone-900 px-6 text-xs font-semibold text-white transition-colors hover:bg-brand sm:text-sm"
                  to="/shop"
                >
                  Shop Now
                </Link>

                <Link className="inline-flex h-11 items-center justify-center rounded-full border border-stone-300 px-5 text-xs font-semibold text-stone-700 transition-colors hover:border-brand hover:text-brand sm:text-sm"
                  to="/shop"
                >
                  Browse Collection
                </Link>
              </div>

 
            </div>
          </div>

          {/* Right Side on Desktop */}
          <div className="hidden w-full lg:col-span-7 lg:block">
            <div className="overflow-hidden rounded-3xl border border-stone-100 shadow-sm">
              <img className="h-[480px] w-full object-cover"
                src={heroImage}
                alt="Modern Living Room"
              />
            </div>
          </div>
        </div>
        
        <Features />
      </div>
    </section>
  );
}

export default HeroHome;