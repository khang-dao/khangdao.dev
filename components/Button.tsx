interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="cursor-default rounded-md bg-[#4C9EFF] px-5 py-2.5 font-spartan text-white"
      onClick={() => console.log("Button clicked!")}
    >
      {children}
    </button>
  );
}
