import React from "react";
import OfferBox from "./OfferBox";
import offers from "../../data/Offers";


const Offers = () => {
  return (
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
  );
};

export default Offers;