import Card from "../common/card/Card";
import "./Grid.css";

const Grid = ({ data, onPostsClick }) => {
  return (
    <div className="grid">
      {data.map((item) => (
        <Card key={item.id} item={item} onClick={onPostsClick} />
      ))}
    </div>
  );
};

export default Grid;
