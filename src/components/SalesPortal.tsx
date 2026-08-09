import { useContext, useState, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";
import Header1 from "./ui/header-1";
import Footer4Col from "./ui/footer-4col";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

export default function Portal() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [addedId, setAddedId] = useState<number | null>(null);
  const { addItem} = useContext(CartContext);
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
      className="relative min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950 font-sans text-zinc-900 dark:text-zinc-50 antialiased overflow-x-hidden overflow-y-hidden group"
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
        <div
          className="absolute top-0 right-0 h-full w-1/2 
  bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.05)_0%,_transparent_60%)] 
  dark:bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.07)_0%,_transparent_60%)] 
  pointer-events-none"
        />

        <div
          className="absolute top-0 left-0 h-full w-1/2 -scale-x-100 
  bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.05)_0%,_transparent_60%)] 
  dark:bg-[radial-gradient(circle_at_70%_30%,_rgba(99,102,241,0.07)_0%,_transparent_60%)] 
  pointer-events-none"
        />

        <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col mx-auto max-w-2xl px-2 py-1 sm:px-3 sm:py-2 lg:max-w-7xl lg:px-8">
              <div className="mb-10">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
                  Find Your Everyday{" "}
                  <span className="text-indigo-500">Essentials</span>
                </h2>

                <p className="mt-2 text-base text-slate-500">
                  Simple, versatile pieces designed to fit effortlessly into
                  your style.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white/10 shadow-sm backdrop-blur-md hover:shadow-lg transition-shadow duration-300 p-4">
                    <img
                      src={product.image}
                      alt={`Front of men's ${product.name} in ${product.color}.`}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover hover:scale-105 scale-95 transition duration-300 lg:aspect-auto lg:h-80"
                    />
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700 dark:text-gray-200 truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                          {product.name}
                        </h3>
                        <p className="mt-3 mr-5 text-sm text-gray-500 dark:text-gray-400  truncate  max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm text-right font-medium text-gray-900  dark:text-gray-100  truncate  max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                        ${product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        addItem(product.id);
                        setTimeout(() => {
                          setAddedId(null);
                        }, 1500);
                        setAddedId(product.id);
                      }}
                      className="mt-5 rounded-full bg-indigo-400/80 text-white dark:hover:bg-emerald-500/30 hover:bg-emerald-500/30 hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-300 px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold"
                    >
                      {addedId === product.id ? (
                        <>
                          <Check className="h-4 w-4" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4" />
                          Add to cart
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute top-1/2 left-1/2 -z-10 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 dark:bg-emerald-500/10 blur-[100px]" />
          </motion.div>
        </div>
      </section>
      <Footer4Col />
    </div>
  );
}
