import React from 'react';

const EmployeeRow = ({ firstName, lastName, position, description, photoUrl }) => {
  return (
    
      <div className="container-specialist">
        <img src={photoUrl} alt={`Zdjęcie ${firstName} ${lastName}`} className="foto-specjalist" />
        <div className="text-specialist-direction">
          <h2>
            <span className="employee-name">
              {firstName} {lastName} [{position}]
            </span>
          </h2>
          <p>{description}</p>
        </div>
        
      </div>


  );
};

export default EmployeeRow;