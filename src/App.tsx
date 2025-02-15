import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ChatWindow } from './components/ChatWindow';
import { TopMenu } from './components/TopMenu';
import { BottomMenu } from './components/BottomMenu';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { Resources } from './pages/Resources';
import { Settings } from './pages/Settings';
import { Support } from './pages/Support';

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#085659] via-[#0c8388] to-[#085659] text-[#e6e6e6]">
      {/* Top Menu */}
      <div className="bg-gray-950/90 backdrop-blur-md border-b border-[#0c8388]/50">
        <div className="max-w-4xl mx-auto px-3 py-2">
          <TopMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden pb-20 pt-6">
        <div className="max-w-4xl mx-auto px-3 h-full">
          <Routes>
            <Route path="/" element={<ChatWindow />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>

      {/* Side Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-950/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-blue-900/50 p-6 z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 touch-manipulation"
          aria-label="Close menu"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <nav className="space-y-4">
          {/* Chat Link */}
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setIsMenuOpen(false);
            }}
            //className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-800/50 text-white hover:bg-blue-800/40 transition-colors"
            //className="flex items-center gap-2 px-4 py-2 bg-[#085659]/30 rounded-lg border border-[#0c8388]/50 text-[#e6e6e6] hover:bg-[#0c8388]/40 transition-colors">
            className="flex items-center gap-2 px-4 py-2 bg-[#085659]/30 rounded-lg border border-[#0c8388]/50 text-[#e6e6e6] hover:bg-[#0c8388]/40 transition-colors">
  <!-- Your content here -->
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat</span>
          </a>

          <div className="pt-2 space-y-4">
            {['dashboard', 'projects', 'resources', 'settings', 'support'].map((path) => (
              <a 
                key={path}
                href={`/${path}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${path}`);
                  setIsMenuOpen(false);
                }}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
