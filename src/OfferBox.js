import React from 'react';

const OfferBox = ({ isNew, title }) => {
  return (
    <div className="box">
      {isNew && <div className="special-box"></div>}
      <p>{title}</p>
      {isNew && <p>(nowość)</p>}
    </div>
  );
};

export default OfferBox;