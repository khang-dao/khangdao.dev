interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`flex justify-center bg-blue-secondary py-4 ${className}`}>
      <p className="font-spartan text-white">- Developed and designed by Khang Dao -</p>
    </footer>
  );
}
