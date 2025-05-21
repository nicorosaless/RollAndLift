
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, ArrowDown } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const DanaherChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Soy John Danaher, tu asistente de Jiu-Jitsu. ¿En qué puedo ayudarte?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Sample responses from the Danaher chatbot
  const danaherResponses = [
    "Recuerda que el control posicional precede a la sumisión. Es fundamental.",
    "Estrangulaciones y luxaciones son el camino más eficiente hacia la victoria.",
    "En el Jiu-Jitsu moderno, el sistema de back control es particularmente efectivo.",
    "Los principios fundamentales son más importantes que las técnicas individuales.",
    "Gordon Ryan ha perfeccionado su sistema a través de miles de horas de práctica deliberada.",
    "La progresión lógica en el aprendizaje es: posición, control, sumisión.",
    "Hay que entender el problema antes de buscar la solución. Analiza siempre la causa raíz.",
    "Un enfoque sistemático al Jiu-Jitsu es superior a la colección de técnicas aleatorias.",
    "La mecánica corporal correcta multiplica la efectividad de cualquier técnica.",
    "Debes tener un plan para cada posición, con ramificaciones claras según las reacciones del oponente."
  ];

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse = danaherResponses[Math.floor(Math.random() * danaherResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[70vh] bg-purple-900/20 rounded-lg overflow-hidden border border-purple-500/30">
      <div className="p-4 bg-gradient-to-r from-purple-900 to-pink-900 border-b border-purple-700">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <Bot className="mr-2 h-5 w-5" />
          Danaher Chatbot
        </h2>
        <p className="text-xs text-purple-200">
          Consulta sobre conceptos y técnicas de Jiu-Jitsu
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-lg px-4 py-2 ${
                message.isUser
                  ? 'bg-pink-600 text-white'
                  : 'bg-purple-800/50 text-gray-200 border border-purple-700/50'
              }`}
            >
              <div className="flex items-center mb-1">
                {!message.isUser && <Bot className="h-4 w-4 mr-1" />}
                <span className="text-xs opacity-75">
                  {message.isUser ? 'Tú' : 'John Danaher'}
                </span>
                {message.isUser && <User className="h-4 w-4 ml-1" />}
              </div>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-purple-800/50 text-gray-200 rounded-lg px-4 py-2 border border-purple-700/50">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="p-4 bg-purple-950/30 border-t border-purple-700/30">
        <div className="flex">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pregunta sobre una técnica..."
            className="flex-1 bg-purple-900/40 border border-purple-600/30 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim()}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-md px-4 flex items-center justify-center disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-2">
          <button
            onClick={scrollToBottom}
            className="text-xs flex items-center text-purple-300 hover:text-pink-400"
          >
            <ArrowDown className="h-3 w-3 mr-1" />
            <span>Último mensaje</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DanaherChatbot;
