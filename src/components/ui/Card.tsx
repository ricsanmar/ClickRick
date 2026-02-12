interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-card rounded-xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
