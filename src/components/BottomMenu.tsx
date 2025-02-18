import React from 'react';
import { Home, Twitter } from 'lucide-react'; // Import Twitter icon

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
  >
    <path d="M22.54 6.42a2.97 2.97 0 00-2.09-2.09C19.63 4 12 4 12 4s-7.63 0-8.45.33A2.97 2.97 0 001.46 6.42 28.8 28.8 0 000 12a28.8 28.8 0 001.46 5.58 2.97 2.97 0 002.09 2.09C4.37 20 12 20 12 20s7.63 0 8.45-.33a2.97 2.97 0 002.09-2.09A28.8 28.8 0 0024 12a28.8 28.8 0 00-1.46-5.58zM9.5 15V9l6.5 3z" />
  </svg>
);

export function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md border-t border-pink-900 py-2 px-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-2">
        <a
          href="https://gomoto.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-b from-gray-900 to-pink-950 px-2 py-2 sm:px-4 sm:py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-800 hover:to-pink-900 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">GOMOTO.io</span>
        </a>

        <a
          href="https://x.com/gomoto3d"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.2] bg-gradient-to-b from-pink-900 to-pink-950 px-3 py-3 sm:px-6 sm:py-4 rounded-xl text-white font-semibold shadow-lg hover:from-pink-800 hover:to-pink-900 transition-all transform hover:-translate-y-1 active:translate-y-0 text-sm sm:text-base flex items-center justify-center"
        >
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
          X 
        </a>

        <a
          href="https://www.youtube.com/@GoMoto3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-b from-gray-900 to-pink-950 px-2 py-2 sm:px-4 sm:py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-800 hover:to-pink-900 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2"
        >
          <YouTubeIcon /> {/* YouTube icon */}
          <span className="text-sm sm:text-base">YouTube</span>
        </a>
      </div>
    </div>
  );
}