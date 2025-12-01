import { createContext, useContext, useState, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  const { theme } = useTheme();

  const getIcon = (type) => {
    switch(type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'warning': return '⚠';
      default: return 'ℹ';
    }
  };

  const getColors = (type) => {
    switch(type) {
      case 'success': return theme === 'dark' ? 'from-green-600 to-emerald-600' : 'from-green-500 to-emerald-500';
      case 'error': return theme === 'dark' ? 'from-red-600 to-rose-600' : 'from-red-500 to-rose-500';
      case 'warning': return theme === 'dark' ? 'from-yellow-600 to-orange-600' : 'from-yellow-500 to-orange-500';
      default: return theme === 'dark' ? 'from-blue-600 to-purple-600' : 'from-blue-500 to-purple-500';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm bg-gradient-to-r ${getColors(toast.type)} text-white min-w-[300px] animate-slide-in-right`}
          onClick={() => removeToast(toast.id)}
        >
          <span className="text-2xl">{getIcon(toast.type)}</span>
          <p className="flex-1 font-medium">{toast.message}</p>
          <button className="text-white/80 hover:text-white transition-colors">✕</button>
        </div>
      ))}
      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
