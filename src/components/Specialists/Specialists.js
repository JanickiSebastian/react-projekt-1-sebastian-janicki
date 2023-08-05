import EmployeeRow from "./EmployeeRow";
import employees from "../../data/Employees";
import "./Specialists.css";
const Specialists = () => {
  return (
    <section className="specialist-section" id="about-us">
      <div className="boss-container">
        <h2 className="title-section-specialist">Nasi specjaliści</h2>
        {employees.map((employee, index) => (
          <EmployeeRow key={index} {...employee} />
        ))}
      </div>
    </section>
  );
};

export default Specialists;
