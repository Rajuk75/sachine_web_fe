import { useEffect, useState } from "react";

const CustomCursor = ({ enabled = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    // Add class to body to enable custom cursor
    document.body.classList.add('custom-cursor-enabled');

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateDot = (e) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mousemove", updateDot);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousemove", updateDot);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        id="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        id="custom-cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;
