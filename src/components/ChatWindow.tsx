import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot } from 'lucide-react';
import { openaiService } from '../services/openai';

interface Message {
  content: string;
  isBot: boolean;
}

function formatAIResponse(text: string): string {
  text = text.replace(/\*\*(.*?)\*\*/g, (_, content) => content);
  text = text.replace(/(\d+\.)/g, '\n$1');
  text = text.replace(/([•])/g, '\n$1');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

function ThinkingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-[#085659]/50 rounded-tl-sm">
        <div className="flex items-center gap-2 mb-1">
          <Bot className="w-4 h-4 text-[#e6e6e6]" />
          <span className="text-sm font-medium text-[#e6e6e6]">BOOGIE AI</span>
        </div>
        <div className="flex items-center gap-2 text-[#e6e6e6]">
          <span>Thinking</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-[#e6e6e6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-[#e6e6e6] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-[#e6e6e6] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const initializeChat = async () => {
        try {
          const response = await openaiService.sendMessage("who are you and why are you here");
          setMessages([{ content: response, isBot: true }]);
        } catch (error) {
          console.error('Error initializing chat:', error);
          setMessages([{
            content: "Hello! I'm your BOOGIE AI. How can I help you today?",
            isBot: true,
          }]);
        } finally {
          setIsLoading(false);
        }
      };
      initializeChat();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    setMessages(prev => [...prev, { content: userMessage, isBot: false }]);

    try {
      const response = await openaiService.sendMessage(userMessage);
      const formattedResponse = formatAIResponse(response);
      setMessages(prev => [...prev, { content: formattedResponse, isBot: true }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        {
          content: "I apologize, but I'm having trouble processing your request. Please try again later.",
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#085659]/50 rounded-lg backdrop-blur-sm border border-[#0c8388]/50 shadow-xl relative">
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#0c8388]/20 via-[#085659]/20 to-[#0c8388]/20 rounded-lg blur-sm -z-10"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#085659]/10 via-[#0c8388]/10 to-[#085659]/10 rounded-lg blur-md -z-20"></div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.isBot
                  ? 'bg-[#085659]/50 rounded-tl-sm'
                  : 'bg-[#0c8388] rounded-tr-sm'
              }`}
            >
              {message.isBot && (
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-[#e6e6e6]" />
                  <span className="text-sm font-medium text-[#e6e6e6]">BOOGIE AI</span>
                </div>
              )}
              <p className="text-[#e6e6e6] whitespace-pre-line">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && <ThinkingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-[#0c8388]/50 p-4 bg-[#085659]/30"
      >
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AI, machine learning, or data science..."
            className="flex-1 bg-[#085659] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0c8388] border border-[#0c8388]"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`bg-[#0c8388] text-white rounded-lg px-4 py-2 transition-colors duration-200 flex items-center gap-2 ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-[#085659]'
            }`}
            disabled={isLoading}
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">{isLoading ? 'Sending...' : 'Send'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
