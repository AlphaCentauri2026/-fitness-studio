export default function ContactButton() {
  return (
    <div className="fixed top-16 right-4 z-40">
      <a
        href="tel:+15551234567"
        className="inline-flex items-center px-4 py-2 bg-accent hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call Now
        <span className="ml-2 text-sm">(555) 123-4567</span>
      </a>
    </div>
  );
}
