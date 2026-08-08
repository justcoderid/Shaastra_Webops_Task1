import { useState, useEffect, useContext } from "react"; //this is a hint for you guys
import { motion } from "framer-motion";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { cx } from "class-variance-authority";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

export default function Header1() {
  let isScrolled: boolean = false; //learn to read the code(error can be easily found if u see the logic behind something which seems correct)
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const { username, isLoggedIn, logoutUser } = useContext(AuthContext);
  const { items } = useContext(CartContext);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: "blur(12px)",
      backgroundColor:
        theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
    },
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "animate"}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className={cx("flex items-center space-x-3")}>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-black dark:bg-white text-white dark:text-black">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                VergeStore
              </span>
            </Link>
          </motion.div>
          {!isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-all duration-300 rounded-full px-5 py-2 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-white/40 dark:hover:bg-white/10"
              >
                Log in
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/cart"
                className="
    relative flex items-center gap-2
    rounded-full
    cursor-pointer
    bg-white/20
    backdrop-blur-md
    px-7 py-3
    text-base font-medium text-slate-700
    shadow-sm
    transition-all duration-300
    hover:bg-white/60
    hover:shadow-md
  "
              >
                <ShoppingCart size={20} strokeWidth={1.8} />

                <span>Cart</span>
                <span
                  className="
      absolute -right-1 -top-1
      flex h-5 w-5 items-center justify-center
      rounded-full
      bg-indigo-500
      text-xs font-semibold text-white
    "
                >
                  {items.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </Link>
              <motion.div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                animate={{
                  width: hovered ? 112 : 140,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="
    h-10
    cursor-pointer
    flex items-center justify-center
    rounded-full
    px-5
    backdrop-blur-md
    bg-white/20
    dark:bg-black/20
    shadow-[0_4px_12px_rgba(0,0,0,0.05)]
    overflow-hidden
  "
              >
                {hovered ? (
                  <motion.button
                    key="logout"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                      logoutUser();
                      setHovered(false);
                    }}
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 cursor-pointer"
                  >
                    Log out
                  </motion.button>
                ) : (
                  <motion.div
                    key="user"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>

                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      {username}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
