import React from 'react';
import './style.css';
import OfferBox from './OfferBox';
import EmployeeRow from './EmployeeRow';

const offers = [
  { title: 'Usługa 1', isNew: true },
  { title: 'Usługa 2', isNew: false },
  { title: 'Usługa 3', isNew: false },
  { title: 'Usługa 4', isNew: false },
  { title: 'Usługa 5', isNew: false },
  { title: 'Usługa 6', isNew: false },
];

const employees = [
  {
    firstName: 'Imię1',
    lastName: 'Nazwisko1',
    position: 'Stanowisko1',
    description: 'Opis pracownika 1',
    photoUrl: 'expert.jpg',
  },
  {
    firstName: 'Imię2',
    lastName: 'Nazwisko2',
    position: 'Stanowisko2',
    description: 'Opis pracownika 2',
    photoUrl: 'expert.jpg',
  },
];

const App = () => {
  return (
    <>
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
                Oferta{' '}
              </a>
            </li>
            <li className="disabled-button">kontakt</li>
          </ul>
        </div>
      </nav>
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
      <section className="specialist-section" id="about-us">
        <div className="boss-container">
          <h2 className="title-section-specialist">Nasi specjaliści</h2>
          
            
            {employees.map((employee, index) => (
              <EmployeeRow key={index} {...employee} />
            ))}
          
        </div>
      </section>
      <main className="size-color-service-section">
        <section className="boss-container">
          <h2 className="tite-service-section">Czym zajmuje się firma?</h2>
          <div className="flex-box-service-section" id="offer">
            {offers.map((offer, index) => (
              <OfferBox key={index} {...offer} />
            ))}
          </div>
        </section>
      </main>
      <footer className="footer-size-color">
        <div className="boss-container">
          <div className="container-footer">
            <div>
              <p className="footer-text">
                Nazwa firmy - wszelkie prawa zastrzeżone, 2019
              </p>
            </div>
            <div className="direction-icons">
              <i
                className="fa-brands fa-instagram fa-2xl"
                style={{ color: '#ffffff' }}
              ></i>
              <i
                className="fa-brands fa-square-facebook fa-2xl"
                style={{ color: '#ffffff' }}
              ></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;