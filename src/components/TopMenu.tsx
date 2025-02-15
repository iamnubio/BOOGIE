import React from 'react';
import { Menu, Bot, X } from 'lucide-react';

interface TopMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function TopMenu({ isOpen, onToggle }: TopMenuProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-[#e6e6e6]" />
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0c8388] via-[#085659] to-[#0c8388] bg-clip-text text-transparent">
          MOTOSIM.io
        </h1>
      </div>
      <button
        onClick={onToggle}
        className="p-2 rounded-lg bg-[#085659]/30 border border-[#0c8388]/50 text-[#e6e6e6] hover:bg-[#0c8388]/40 transition-colors"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#e6e6e6]" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#e6e6e6]" />
        )}
      </button>
    </div>