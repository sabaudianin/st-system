"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export const ServiceCard = ({
  title,
  description,
  icon,
  reverse = false,
  motionProps = {},
}: {
  title: string;
  description: string;
  icon: ReactNode;
  reverse?: boolean;
  motionProps?: React.ComponentProps<typeof motion.div>;
}) => (
  <motion.div
    {...motionProps}
    className={`
      flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-3xl bg-slate-900/70 shadow-lg rounded-2xl p-6 md:p-8 mb-6
      ${reverse ? "md:flex-row-reverse" : ""}
    `}
    style={{ minHeight: 150 }}
  >
    <div className="text-blue-700  bg-blue-900/70 rounded-full p-5 text-4xl shadow-sm flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1 text-center md:text-left">
      <h4 className="text-xl font-bold mb-2 text-slate-300">{title}</h4>
      <p className="text-slate-400 ">{description}</p>
    </div>
  </motion.div>
);
