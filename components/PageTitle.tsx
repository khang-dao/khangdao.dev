const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div className="relative mb-10 inline-block">
      <div className="text-box absolute inset-0 left-2 top-4 z-0 rounded-md bg-[#cfe6ff] blur-[2px]"></div>
      <span className="relative z-10 font-spartan text-4xl font-bold">
        {children}
      </span>
    </div>
  );
};

export default PageTitle;
