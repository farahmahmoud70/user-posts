import "./Card.css";
const Card = ({ item, onClick }) => {
  const handleOnClick = () => {
    onClick && onClick(item.id);
  };
  return (
    <div className="card-container">
      <div className="card">
        <div id={item.id}>
          <span>{item.name}</span>
          <span>{item.username}</span>
        </div>
        <div>{item.phone}</div>
        <div>{item.email}</div>
        <div>
          <span>{item.address.city}</span> <span>{item.address.street}</span>
        </div>
        <div>{item.company.name}</div>
        <a href={`http://${item.website}`} target="_blank" rel="noreferrer">
          {item.website}
        </a>
        <button onClick={handleOnClick}>{"Posts"}</button>
      </div>
    </div>
  );
};

export default Card;
