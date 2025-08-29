"use client";

import {
  motion,
  type Variants,
  cubicBezier,
  useReducedMotion,
} from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ease = cubicBezier(0.45, 0.05, 0.55, 0.95);

export const Rating = () => {
  const reduce = useReducedMotion();
  const star: Variants = reduce
    ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1 } }
    : {
        hidden: { scale: 1, opacity: 1 },
        visible: { scale: [1, 1.25, 1], transition: { duration: 0.45, ease } },
      };

  return (
    <section
      id="rating"
      aria-labelledby="rating-title"
      role="region"
      className="relative isolate py-8 px-4 text-center text-foreground overflow-hidden bg-[var(--garish-bg)]"
    >
      <h2
        id="rating-title"
        className="sr-only"
      >
        Oceny klientów
      </h2>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <motion.ul
          className="flex justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          aria-label="Ocena: 5 na 5 gwiazdek"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.li
              key={i}
              variants={star}
              className="
                mx-1 inline-block list-none text-warning
                animate-star-glint motion-reduce:animate-none
                [will-change:transform,filter]
              "
              style={{ animationDelay: `${i * 0.18}s` }}
              whileHover={reduce ? undefined : { scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 17.27l-5.18 3.04c-.74.44-1.64-.21-1.48-1.06l1-5.82-4.22-4.11c-.63-.62-.28-1.69.59-1.82l5.83-.85 2.61-5.29a1 1 0 0 1 1.8 0l2.61 5.29 5.83.85c.87.13 1.22 1.2.59 1.82l-4.22 4.11 1 5.82c.16.85-.74 1.5-1.48 1.06L12 17.27z" />
              </svg>
            </motion.li>
          ))}
        </motion.ul>

        <p className="font-semibold text-foreground/95 drop-shadow">
          Ponad 1000 instalacji i niemal 100% zadowolonych klientów - to
          najlepsza rekomendacja.
        </p>
      </div>
    </section>
  );
};
