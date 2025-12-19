import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Varshitha Tangeti
            </h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by Varshitha</span>
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} Varshitha Tangeti. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
