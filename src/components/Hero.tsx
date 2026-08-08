import { useContext, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../lib/utils";
import { ShoppingCart, Compass } from "lucide-react";
import Header1 from "./ui/header-1";
import Footer4Col from "./ui/footer-4col";
import { AuthContext } from "../context/AuthContext";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  //const {username, isLoggedIn } = useContext(AuthContext);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 font-sans text-zinc-900 dark:text-zinc-50 antialiased overflow-x-hidden overflow-y-hidden group"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <Header1 />
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 z-10">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.1)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.15)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-0 h-full w-1/2 -scale-x-100 bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.1)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.15)_0%,_transparent_60%)] pointer-events-none" />

        <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mb-6 inline-block rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              The platform for modern clothing
            </span>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Build your dream wardrobe
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500 dark:from-indigo-400 dark:to-teal-300">
                With VergeStore
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl leading-relaxed">
              VergeStore provides elegant T-shirts, beautiful Clothes, and
              everything you need to start, grow, and manage your Wardrobe with
              ease.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/Portal"
                className="flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 sm:w-auto shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 dark:bg-indigo-500/20 dark:border-indigo-500/30 backdrop-blur-md hover:bg-indigo-500/20 dark:hover:bg-indigo-500/30"
              >
                <Compass className="h-5 w-5" />
                Explore
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/50 dark:border-zinc-800/50 dark:bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm">
              <img
                src="https://media.istockphoto.com/id/1735100420/photo/cozy-dressing-room-floor-hanger-with-womens-seasonal-autumn-winter-clothes-coats-pullovers.jpg?s=612x612&w=0&k=20&c=VtF75DgR1N6MfcwjLUZWo1JyfcS7QdtDbZQYcg2fTAE="
                alt="Wardrobe"
                width={1920}
                height={1080}
                className="h-auto w-full object-cover rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -z-10 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 blur-[100px]" />
          </motion.div>
        </div>
      </section>
      <div className="relative z-10">
        <Footer4Col />
      </div>
    </div>
  );
}
