const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 px-6 rounded-full shadow-lg z-50 text-2xl"
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
};

export default BackToTopButton;