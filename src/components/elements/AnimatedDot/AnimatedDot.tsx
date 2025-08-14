export const AnimatedDot = () => {
  return (
    <span className="relative flex h-4 w-4">
      <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-40"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
    </span>
  );
};
