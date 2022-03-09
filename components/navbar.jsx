import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <Link href="/">
          <span className="navbar-brand btn text-white mb-0 h1">EkipCo</span>
        </Link>
      </nav>
    </div>
  );
};
