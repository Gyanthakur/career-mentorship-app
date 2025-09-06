

export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        group relative rounded-2xl 
        bg-white/70 dark:bg-gray-900/60 
        border border-gray-200 dark:border-gray-700 
        shadow-md backdrop-blur-lg 
        p- 
        hover:shadow-xl hover:scale-[1.03] 
        transition-all duration-300 ease-in-out cursor-pointer
        ${className}
      `}
    >
      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

      {/* Actual Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div
      className={`
        text-gray-900 dark:text-gray-100 
        font-medium tracking-wide leading-relaxed 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
