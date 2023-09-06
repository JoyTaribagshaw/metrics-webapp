const Navbar = () => {
  const date = new Date()
  return (
    <nav>
      <h2>
        { date.getFullYear() }
      </h2>
      <h1>Most Active</h1>
      <div>
        {/* <img></img> */}
        {/* <img></img> */}
      </div>
    </nav>
  )
};

export default Navbar;