import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mouseNearTop, setMouseNearTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Define the hover detection zone height (in pixels)
  const hoverZone = 50;

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollPos = window.scrollY;

      // Set header visible if scrolling up or mouse is near top
      const scrollingUp = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      // Only update visibility based on scroll if mouse isn't near top
      if (!mouseNearTop) {
        setVisible(scrollingUp);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is within the hover zone at the top of the screen
      const isNearTop = e.clientY < hoverZone;
      setMouseNearTop(isNearTop);

      // Show header if mouse is near top
      if (isNearTop) {
        setVisible(true);
      } else if (prevScrollPos <= window.scrollY) {
        // Hide if not near top and not scrolling up
        setVisible(false);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // For touch devices, detect swipe down near the top of the screen
      if (e.touches[0].clientY < hoverZone * 2) {
        setVisible(true);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [prevScrollPos, mouseNearTop]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Always show header when menu is open
    if (!menuOpen) {
      setVisible(true);
    }
  };

  return (
    <header
      className={`p-4 bg-white shadow-md fixed top-0 left-0 right-0 transition-transform duration-300 z-10 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Himran P.E
        </Link>

        {/* Mobile menu button - only visible on small screens */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="/experience" className="hover:text-blue-500 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link href="/certifications" className="hover:text-blue-500 transition-colors">Certifications</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Mobile navigation menu - only visible when menu is open on small screens */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} pt-4`}>
        <div className="flex flex-col space-y-3">
          {['about', 'experience', 'projects', 'certifications', 'contact'].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="py-2 px-4 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
