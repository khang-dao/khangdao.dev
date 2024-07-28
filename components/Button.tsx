"use client";

function Button({ children }) {
  return (
    <button className="font-lekton text-white bg-[#4C9EFF] rounded-md px-5 py-2.5 cursor-default" onClick={() => console.log('Button clicked!')}>
      {children}
    </button>
  );
}

export default Button;
