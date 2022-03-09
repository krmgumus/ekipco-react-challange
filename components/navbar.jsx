import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link href={'/'}>
          <a className="navbar-brand text-light">Ekipco</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href={'/favorites'}>
              <a className="nav-item nav-link active text-light">Favoriler</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
