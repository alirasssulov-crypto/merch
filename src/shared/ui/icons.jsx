export function CartIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 9h18l-2 11H5L3 9Z" />
      <path d="M8 9l3-5M16 9l-3-5" />
    </svg>
  );
}

export function Wave({ className = "" }) {
  return (
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className={`pointer-events-none absolute bottom-0 left-0 h-10 w-full fill-white md:h-24 ${className}`} aria-hidden="true">
      <path d="M0 60 C 240 120, 480 0, 760 40 S 1240 110, 1440 30 L1440 100 L0 100 Z" />
    </svg>
  );
}

export function Bulb() {
  return (
    <svg viewBox="0 0 200 220" fill="none" stroke="#2b2459" strokeWidth="2" className="h-48 w-44" aria-hidden="true">
      <circle cx="100" cy="90" r="70" />
      <path d="M75 160h50M80 175h40M88 190h24" />
      <text x="100" y="98" textAnchor="middle" fontSize="26" fill="#2b2459" stroke="none" fontFamily="sans-serif">
        IDEAS
      </text>
    </svg>
  );
}