let intersectionObserver;

const ensureIntersectionObserver = () => {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
      entry.target.dispatchEvent(new CustomEvent(eventName));
    });
  });
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const viewport = element => {
  ensureIntersectionObserver();

  intersectionObserver.observe(element);

  return {
    destroy() {
      intersectionObserver.unobserve(element);
    },
  };
};

export default viewport;
