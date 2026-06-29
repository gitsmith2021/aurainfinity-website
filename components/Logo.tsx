interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * The Aura Infinity mark: two interlocking rings forming an infinity figure,
 * rendered with the brand gradient. Pure SVG so it stays crisp at any scale.
 */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <svg
        viewBox="0 0 56 32"
        role="img"
        aria-label="Aura Infinity"
        className="h-7 w-auto"
      >
        <defs>
          <linearGradient id="aura-mark" x1="0" y1="0" x2="56" y2="32">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#aura-mark)"
          strokeWidth="3.25"
          strokeLinecap="round"
        >
          <circle cx="18" cy="16" r="10" />
          <circle cx="38" cy="16" r="10" />
        </g>
      </svg>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Aura Infinity
        </span>
      )}
    </span>
  );
}
