import { useEffect, useRef } from "react";

const CodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "01<>{}[]()/*+-=;:.,";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const charIndex = Math.floor(Math.random() * chars.length);
        const text = chars[charIndex];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient effect for red
        const gradient = ctx.createLinearGradient(x, y, x, y + fontSize);
        gradient.addColorStop(0, "hsl(0, 100%, 60%)");
        gradient.addColorStop(1, "hsl(0, 100%, 40%)");
        ctx.fillStyle = gradient;
        
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-25 z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CodeBackground;

