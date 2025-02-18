import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ChatWindow } from './components/ChatWindow';
import { TopMenu } from './components/TopMenu';
import { BottomMenu } from './components/BottomMenu';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { DASHBOARD } from './pages/Dashboard';
import { PROJECTS } from './pages/Projects';
import { RESOURCES } from './pages/Resources';
import { QUESTHUB } from './pages/Questhub';
import { SUPPORT } from './pages/Support';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

function NavLink({ to, children, className = '', icon }: NavLinkProps) {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    setIsMenuOpen(false);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`block text-gray-300 hover:text-white transition-colors ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuItems = [
    { to: '/', label: 'Chat', icon: <MessageSquare className="w-5 h-5" />, primary: true },
    { to: '/dashboard', label: 'DASHBOARD' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/resources', label: 'RESOURCES' },
    { to: '/QUESTHUB', label: 'QUESTHUB' },
    { to: '/support', label: 'SUPPORT' }
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-950 via-pink-950 to-gray-950 text-gray-100">
      {/* Top Menu */}
      <div className="bg-gray-950/90 backdrop-blur-md border-b border-pink-900/50">
        <div className="max-w-4xl mx-auto px-3 py-2">
          <TopMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden pb-20 pt-6">
        <div className="max-w-4xl mx-auto px-3 h-full">
          <Routes>
            <Route path="/" element={<ChatWindow />} />
            <Route path="/dashboard" element={<DASHBOARD />} />
            <Route path="/projects" element={<PROJECTS />} />
            <Route path="/resources" element={<RESOURCES />} />
            <Route path="/QUESTHUB" element={<QUESTHUB />} />
            <Route path="/support" element={<SUPPORT />} />
          </Routes>
        </div>
      </div>

      {/* Side Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-950/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-pink-900/50 p-6 z-50`}
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
          {menuItems.map((item) => (
            item.primary ? (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 px-4 py-2 bg-pink-900/30 rounded-lg border border-pink-800/50 text-white hover:bg-pink-800/40 transition-colors"
                icon={item.icon}
              >
                {item.label}
              </NavLink>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className="mt-4 first:mt-0"
              >
                {item.label}
              </NavLink>
            )
          ))}
        </nav>
      </div>

      {isHome && <BottomMenu />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;