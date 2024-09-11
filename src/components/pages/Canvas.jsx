import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const particles = [];
  const mouseTrail = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const particleCount = Math.random() * 2 + 1;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          radius: Math.random() * 2 + 1,
          color: getRandomColor(), // Green colors
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3,
        });
      }

      mouseTrail.push({
        x: mouseX,
        y: mouseY,
        radius: Math.random() * 6 + 1,
        color: getRandomColor(), // Green colors
        opacity: Math.random() * 0.5,
      });

      if (mouseTrail.length > 10) {
        mouseTrail.shift();
      }
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = particle.radius * 5;
        ctx.shadowColor = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.radius -= 0.001;

        if (particle.radius <= 0) {
          particles.splice(index, 1);
        }
      });

      mouseTrail.forEach((pos) => {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pos.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 100, ${pos.opacity})`; // Green trail
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    };

    const handleMouseOut = () => {
      particles.length = 0;
      mouseTrail.length = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const getRandomColor = () => {
      const randomG = Math.floor(Math.random() * 256); // Full range of green
      const randomR = Math.floor(Math.random() * 710); // Lower red for greenish shades
      const randomB = Math.floor(Math.random() * 80); // Lower blue for greenish shades
      return `rgba(${randomR}, ${randomG}, ${randomB}, 0.8)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseout', handleMouseOut);

    animateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        border: '1px solid #000',
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        zIndex: 110,
      }}
    ></canvas>
  );
};

export default CanvasAnimation;
