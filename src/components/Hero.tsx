// Updated Hero component with continuous typing animation and smoother cursor
import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import { FaInstagram, FaTwitter, FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';
const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const phrases = ["Artist", "MERN Stack Developer", "Electronics Enthusiast"];
    const animatedTextElement = document.getElementById('animated-text');

    if (!animatedTextElement) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSound = new Audio('/typing.mp3');
    typingSound.volume = 0.3;

    const typeText = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        animatedTextElement.textContent = currentPhrase.substring(0, charIndex--);
      } else {
        animatedTextElement.textContent = currentPhrase.substring(0, charIndex++);
        typingSound.play();
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => (isDeleting = true), 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      setTimeout(typeText, isDeleting ? 50 : 100);
    };

    typeText();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();

    const icons = [
      "MongoDB", "Arduino", "Express", "React", "Node", "⏄", "⚡", "🤖", "🖌️ 🎨✍️", " 💡", "✂️🎬", " 🖥️"," 🔌","🍃 🚀⚛️ 🟢","📸🎨","🎨💻"
    ];

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 15 + 8,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      text: icons[Math.floor(Math.random() * icons.length)],
      opacity: Math.random() * 0.5 + 0.2
    }));

    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.speedX;
        p1.y += p1.speedY;

        if (p1.x > canvas.width || p1.x < 0) p1.speedX *= -1;
        if (p1.y > canvas.height || p1.y < 0) p1.speedY *= -1;

        ctx.font = `${p1.size}px Arial`;
        ctx.fillStyle = `rgba(100, 255, 150, ${p1.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p1.text, p1.x, p1.y);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-6 z-10">
        <p className="text-green-400 mb-2">"Hello world! I'm </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">Himruzz</h1>
        <p className="text-xl text-white mb-6">
          I am <span id="animated-text" className="text-green-400"></span>
          <span className="blinking-cursor">|</span>
        </p>
        <Link href="/about">
          <button className="border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:bg-opacity-20 transition duration-300">About Me</button>
        </Link>
      </div>
      <div className="absolute right-6 bottom-6 text-white">
        <p className="text-lg mb-2 cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => window.location.href = "mailto:himruzz@gmail.com"}>Say Hello! ✉️</p>
      </div>
      <div className="absolute right-6 bottom-20">
        <Link href="/resume.pdf" target="_blank" download>
          <button className="border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:bg-opacity-20 transition duration-300">Resume</button>
        </Link>
      </div>
      <div className="absolute left-6 bottom-20 flex flex-col space-y-3 text-white">
  <a href="https://www.instagram.com/himruzz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
  <a href="https://x.com/himruzz" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
  <a href="https://github.com/Himruzz" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
  <a href="https://t.me/himruzz" target="_blank" rel="noopener noreferrer"><FaTelegram size={24} /></a>
  <a href="https://wa.me/+918848609372" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
</div>
    </div>
  );
};

export default Hero;
