import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
  { to: "/cart", label: "Cart" },
];

const Header = () => {
  const logo = new URL("../../assets/fooder_logo.png", import.meta.url).href;

  // using useState
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  // using useEffect
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  const toggleLogin = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <header className="sticky top-0 z-50 bg-night/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 max-md:h-16 max-md:px-4">
        <img
          className="h-12 w-auto object-contain max-md:h-10"
          src={logo}
          alt="Fooder logo"
        />

        {/* desktop nav: hidden on phones */}
        <nav className="max-md:hidden">
          <ul className="flex items-center gap-2">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    `inline-flex items-center rounded-full px-4 py-2 font-display text-xs uppercase tracking-wider transition ${
                      isActive
                        ? "bg-linear-to-r from-sakura/20 to-violet/20 text-ink ring-1 ring-sakura/40"
                        : "text-ink-mid hover:bg-white/5 hover:text-ink"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="inline-flex items-center gap-1.5">
                      {isActive && <span className="text-sakura">✦</span>}
                      {label}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
            <li className="ml-3">
              <button
                className="cursor-pointer rounded-full bg-linear-to-r from-sakura to-violet px-6 py-2.5 font-display text-xs uppercase tracking-wider text-night shadow-glow transition hover:scale-105 hover:brightness-110 active:scale-95"
                onClick={toggleLogin}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </nav>

        {/* hamburger: phones only */}
        <button
          type="button"
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-panel transition hover:border-sakura/60 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-full rounded bg-ink transition-all duration-300 ${
                menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-ink transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full rounded bg-ink transition-all duration-300 ${
                menuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "top-full -translate-y-full"
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile dropdown menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-night/95 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1.5">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 font-display text-sm uppercase tracking-wider transition ${
                      isActive
                        ? "bg-linear-to-r from-sakura/20 to-violet/20 text-ink ring-1 ring-sakura/40"
                        : "text-ink-mid hover:bg-white/5 hover:text-ink"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex w-full items-center justify-between">
                      {label}
                      {isActive && <span className="text-sakura">✦</span>}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 w-full cursor-pointer rounded-full bg-linear-to-r from-sakura to-violet px-6 py-3 font-display text-xs uppercase tracking-wider text-night shadow-glow transition active:scale-95"
            onClick={toggleLogin}
          >
            {btnName}
          </button>
        </nav>
      )}

      {/* glowing gradient line along the bottom edge */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-sakura via-violet to-sakura opacity-60" />
    </header>
  );
};

export default Header;
