"use client";

function Button({ children }) {
  return (
    <button
      className="cursor-default rounded-md bg-[#4C9EFF] px-5 py-2.5 font-lekton text-white"
      onClick={() => console.log("Button clicked!")}
    >
      {children}
    </button>
  );
}

export default Button;
