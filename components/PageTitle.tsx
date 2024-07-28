
const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 top-4 left-2 bg-[#E8F3FF] z-0 text-box rounded-md blur-[2px]"></div>
      <span className='relative z-10 text-4xl font-lekton font-bold'>{children}</span>
    </div>
  );
};

export default PageTitle;
