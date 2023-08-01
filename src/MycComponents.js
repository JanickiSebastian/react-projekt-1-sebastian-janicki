import React from "react";

const MyComponent = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/images/expert.jpg"}
        alt="Opis zdjęcia"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/forest.jpg"}
        alt="Opis zdjęcia"
      />
    </div>
  );
};

export default MyComponent;
