export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Primary text-white text-center p-6">
      {/* 404 */}
      <h1 className="text-[7rem] md:text-[9rem] font-extrabold drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg md:text-xl max-w-xl leading-relaxed">
        Sorry, the page you’re looking for can’t be found.  
        It may have been moved or no longer exists.
      </p>

      {/* Icon */}
      <div className="mt-8 flex items-center justify-center">
        <div className="bg-white rounded-full p-6 shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="#F26B52"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 4l9 5.75M4.5 19.5h15V10.5L12 5.25 4.5 10.5V19.5z"
            />
          </svg>
        </div>
      </div>

      {/* Button */}
      <a
        href="/"
        className="mt-10 inline-block px-8 py-3 bg-white text-[#F26B52] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Back to Homepage
      </a>
    </div>
  );
}
