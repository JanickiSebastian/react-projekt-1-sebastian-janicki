import "./Nav.css";
const Nav = () => {
  return (
    <nav className="size-color">
      <div className="container boss-container">
        <p className="my-company-element">moja firma</p>
        <ul className="nav-list">
          <li>
            <a href="#about-us" className="button-nav">
              O nas
            </a>
          </li>
          <li>
            <a href="#offer" className="button-nav">
              Oferta{" "}
            </a>
          </li>
          <li className="disabled-button">kontakt</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
