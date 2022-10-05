import "./Card.css";
const Card = ({ item, onClick }) => {
  const handleOnClick = () => {
    onClick && onClick(item.id, item.name);
  };
  return (
    <div className="card-container" id={item.id}>
      <div className="card">
        <div className="card-content">
          <div title={`Name: ${item.name}`}>{item.name}</div>
          <div title={`Username: ${item.username}`}>{item.username}</div>
          <div title={`Phone: ${item.phone}`}>{item.phone}</div>
          <div title={`Email: ${item.email}`}>{item.email}</div>
          <div title={`City: ${item.address.city}`}>{item.address.city}</div>
          <div title={`Street: ${item.address.street}`}>
            {item.address.street}
          </div>
          <div title={`Company name: ${item.company.name}`}>
            {item.company.name}
          </div>
          <a
            title={`Company website`}
            href={`http://${item.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {item.website}
          </a>
        </div>
        <button className="card-btn" onClick={handleOnClick}>
          {"Posts"}
        </button>
      </div>
    </div>
  );
};

export default Card;
