interface PageTitleProps {
  children: string;
  className?: string;
}

export default function PageTitle({ children, className }: PageTitleProps) {
  return (
    <div className="relative mb-5 inline-block">
      <div className="absolute inset-0 left-2 top-4 z-0 -mr-3 rounded-md bg-[#cfe6ff] blur-[2px]"></div>
      <span className={`relative z-10 font-spartan text-4xl font-bold ${className}`}>{children}</span>
    </div>
  );
}
