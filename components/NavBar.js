import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <h3>Queen Lwiindi</h3>
      </div>
      <Link href="/">
        <a className="a">Home</a>
      </Link>
      <Link href="/works">
        <a className="a">Portforlio</a>
      </Link>
      <Link href="/contact">
        <a className="a">Contact</a>
      </Link>
    </nav>
  );
};

export default NavBar;
