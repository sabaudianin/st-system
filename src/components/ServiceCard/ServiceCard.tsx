import { ReactNode } from "react";

export const ServiceCard = ({
  title,
  description,
  icon,
  reverse = false,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  reverse?: boolean;
}) => (
  <div
    className={`
      flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-3xl bg-white/80 dark:bg-slate-900/70 shadow-lg rounded-2xl p-6 md:p-8 mb-6
      ${
        reverse
          ? "md:flex-row-reverse animate-fade-in-right"
          : "animate-fade-in-left"
      }
    `}
    style={{
      minHeight: 150,
    }}
  >
    <div className="text-blue-700 bg-blue-100 dark:bg-blue-900/70 rounded-full p-5 text-4xl shadow-sm flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1 text-center md:text-left">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  </div>
);
