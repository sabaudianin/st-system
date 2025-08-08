export const Rating = () => {
  return (
    <section className="bg-[var(--garish-bg)] p-4 text-center">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={"text-yellow-400"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27l-5.18 3.04c-.74.44-1.64-.21-1.48-1.06l1-5.82-4.22-4.11c-.63-.62-.28-1.69.59-1.82l5.83-.85 2.61-5.29a1 1 0 0 1 1.8 0l2.61 5.29 5.83.85c.87.13 1.22 1.2.59 1.82l-4.22 4.11 1 5.82c.16.85-.74 1.5-1.48 1.06L12 17.27z" />
              </svg>
            </span>
          ))}
        </div>
        <p className="font-semibold">
          Ponad 1000 instalacji i niemal 100% zadowolonych klientów to najlepsza
          rekomendacja.
        </p>
      </div>
    </section>
  );
};
