import "./Header.css";
const Header = () => {
  return (
    <header className="size-header">
      <img src="forest.jpg" alt="" />
      <div className="container-position">
        <div className="position-text">
          <h1 className="text-quality-product">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="text-line">Nie wierz nam na słowo - sprawdź</p>
          <a href="#offer" className="button-ofert">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
