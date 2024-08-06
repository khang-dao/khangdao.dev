interface PageTitleProps {
  children: string;
  className?: string;
}

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <div className={`relative mb-10 inline-block ${className}`}>
      <div className="absolute inset-0 left-2 top-4 z-0 -mr-2 rounded-md bg-[#cfe6ff] blur-[2px]"></div>
      <span className="relative z-10 font-spartan text-4xl font-bold">{children}</span>
    </div>
  );
}
