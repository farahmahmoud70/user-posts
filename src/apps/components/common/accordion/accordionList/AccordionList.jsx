import "./AccordionList.css";
const AccordionList = ({ accordionData, handleToggle, toggle }) => {
  return accordionData.map((item) => {
    return (
      <div className="accordion-card" key={item.id}>
        <div
          className="accordion-card-header"
          onClick={() => handleToggle(item.id)}
          style={{ cursor: "pointer" }}
        >
          <div>
            {item.id === toggle ? "-" : "+"} {item.title}
          </div>
        </div>
        {item.id === toggle ? (
          <div className="accordion-card-body">{item.body}</div>
        ) : (
          ""
        )}
      </div>
    );
  });
};
export default AccordionList;
