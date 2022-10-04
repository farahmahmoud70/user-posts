
import { useState } from "react";
import AccordionList from "./accordionList/AccordionList";
import "./Accordion.css";
const Accordion = ({ data }) => {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };
  return (
    <div className="container">
      <AccordionList
        accordionData={data}
        handleToggle={handleToggle}
        toggle={toggle}
      />
    </div>
  );
};
export default Accordion;
