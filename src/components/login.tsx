import { useContext, useState, type MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../lib/utils";
import { ShoppingCart, Compass, ShoppingBag } from "lucide-react";
import Header1 from "./ui/header-1";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Logged in as ${username}`);
    console.log("Username:", username);
    console.log("Password:", password);
    authenticateUser(username);
    navigate("/");
  }
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
      className="relative min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950 font-sans text-zinc-900 dark:text-zinc-50 antialiased overflow-x-hidden group"
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
            <div className="w-full max-w-lg  m-auto my-10">
              <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex h-16 items-center justify-center gap-3 lg:h-20">
                <span className="text-4xl">Sign in to </span>
                <div className="flex ml-3 mr-[-5px] h-10 w-10 items-center justify-center rounded bg-black dark:bg-white text-white dark:text-black">
                  <ShoppingBag className="h-7 w-7" />
                </div>
                <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  VergeStore
                </span>
              </div>
              <form
                onSubmit={handleLogin}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 px-8 "
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    id="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow-sm appearance-none backdrop-blur-lg border border-white/20 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    id="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow-sm appearance-none border border-white/20 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-red-500 text-xs italic hidden">
                    Please choose a password.
                  </p>
                </div>
                <div className="flex items-center justify-between block text-gray-700 text-sm font-bold mb-2">
                  <button
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow  hover:text-emerald-600 cursor-pointer text-grey-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <a
                    className="block text-gray-700 text-sm font-bold mb-2 hover:text-emerald-600"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs mt-6">
                &copy;2026 Shaastra team. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
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
    </div>
  );
}
