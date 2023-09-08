const Navbar = () => {
  const date = new Date();
  return (
    <nav className="navbar">
      <h2 className="year">
        { date.getFullYear() }
      </h2>
      <h1 className="title">Most Active</h1>
    </nav>
  );
};

export default Navbar;
