import { useContext, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { getProductById } from "../data/products";
import Header1 from "./ui/header-1";
import Footer4Col from "./ui/footer-4col";
import { CartContext } from "../context/CartContext";
import { Compass, Delete, Trash } from "lucide-react";
import { cn } from "../lib/utils";

export default function Cart() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { items, clearCart } = useContext(CartContext);
  const cartItems = items.map((item) => {
    const product = getProductById(item.id);
    return { product, quantity: item.quantity };
  });
  const subtotal = cartItems.reduce(
    (total, item) => total + (item.product?.price || 0) * item.quantity,
    0,
  );
  const tax = subtotal * 0.13;
  const pickup = subtotal * 0.13;
  const total = subtotal + tax + pickup;
  const { addItem, removeItem, removeOneItem } = useContext(CartContext);
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
            <section className="md:py-16 group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white/10 shadow-sm backdrop-blur-md hover:shadow-lg transition-shadow duration-300 antialiased dark:bg-gray-900 md:py-16">
              <div className="mx-auto max-w-screen-xl 2xl:pr-20">
                <h1
                  className={cn(
                    cartItems.length > 0 ? " " : " ml-29",
                    "text-4xl text-left font-bold tracking-tight text-gray-900 dark:text-white",
                  )}
                >
                  Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-500 dark:from-indigo-400 dark:to-teal-300">
                    Cart
                  </span>
                </h1>
                {cartItems.length > 0 && (
                  <button
                    className="cursor-pointer  hiddentext-red-500 hover:text-red-700"
                    onClick={() => clearCart()}
                  >
                    <Trash />
                  </button>
                )}
                <div className="mt-6 sm:mt-8 w-full md:gap-6 lg:flex lg:items-start xl:gap-40">
                  <div className=" flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6">
                      {cartItems.length > 0 ? (
                        cartItems.map(({ product, quantity }) => (
                          <div
                            key={product?.id}
                            className="rounded-lg border border-gray-200 bg-white/100 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                          >
                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                              <img
                                className="h-20 w-20 rounded-lg object-cover md:h-32 md:w-32"
                                src={product?.image}
                                alt={product?.name}
                              />
                              <div className="flex items-center justify-between md:order-3 md:justify-end">
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      removeOneItem(product?.id ?? 0)
                                    }
                                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                                  >
                                    −
                                  </button>

                                  <input
                                    type="text"
                                    className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none dark:text-white"
                                    value={quantity}
                                    readOnly
                                  />

                                  <button
                                    type="button"
                                    onClick={() => addItem(product?.id ?? 0)}
                                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                                  >
                                    +
                                  </button>
                                </div>

                                <div className="text-end md:order-4 md:w-32">
                                  <p className="text-base font-bold text-gray-900 dark:text-white">
                                    ₹{(product?.price ?? 0).toFixed(2)}
                                  </p>
                                </div>
                              </div>
                              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                                  {product?.name}
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Color : {product?.color}
                                </p>

                                <div className="flex items-center gap-4">
                                  <button
                                    type="button"
                                    className="cursor-pointer flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-base font-semibold text-red-700 shadow-[0_4px_24px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-red-500/20 active:scale-95 dark:border-red-500/30 dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/30"
                                    onClick={() => removeItem(product?.id ?? 0)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="max-w-screen-xl py-12 text-center">
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            Your Cart is Empty
                          </h2>

                          <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Looks like you haven't added anything to your cart
                            yet.
                          </p>

                          <div className="mt-8 flex justify-center">
                            <Link
                              to="/Portal"
                              className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-[0_4px_24px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-indigo-500/20 active:scale-95 dark:border-indigo-500/30 dark:bg-indigo-500/20 dark:text-indigo-400 dark:hover:bg-indigo-500/30"
                            >
                              <Compass className="h-5 w-5" />
                              Explore
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {cartItems.length > 0 && (
                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          Order summary
                        </p>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <dl className="flex items-center justify-between gap-4">
                              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Total amount
                              </dt>
                              <dd className="text-base font-medium text-gray-900 dark:text-white">
                                ₹{total.toFixed(2)}
                              </dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4">
                              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Delivery Charges
                              </dt>
                              <dd className="text-base font-medium text-gray-900 dark:text-white">
                                ₹{pickup.toFixed(2)}
                              </dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4">
                              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Tax
                              </dt>
                              <dd className="text-base font-medium text-gray-900 dark:text-white">
                                ₹{tax.toFixed(2)}
                              </dd>
                            </dl>
                          </div>

                          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                            <dt className="text-base font-bold text-gray-900 dark:text-white">
                              Total
                            </dt>
                            <dd className="text-base font-bold text-gray-900 dark:text-white">
                              ₹{total.toFixed(2)}
                            </dd>
                          </dl>
                        </div>

                        <button className="cursor-pointer flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-[0_4px_24px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-indigo-500/20 active:scale-95 dark:border-indigo-500/30 dark:bg-indigo-500/20 dark:text-indigo-400 dark:hover:bg-indigo-500/30">
                          Proceed to Checkout
                        </button>

                        <div className="flex flex-col mt-[-10px] items-center justify-center gap-2">
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            {" "}
                            or{"  "}
                          </span>
                          <Link
                            to="/Portal"
                            className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-8 py-3.5 text-base font-semibold text-emerald-700 shadow-[0_4px_24px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-emerald-500/20 active:scale-95 dark:border-emerald-500/30 dark:bg-indigo-500/20 dark:text-emerald-400 dark:hover:bg-emerald-500/30"
                          >
                            Continue Shopping
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
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
