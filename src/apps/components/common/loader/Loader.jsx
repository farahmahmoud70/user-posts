// components & UI
import "./Loader.css";

const Loader = ({ loaderIcon, id, title, alt, loaderText }) => {
  return (
    <div className="loader-container">
      <img
        src={loaderIcon}
        id={id}
        title={title}
        alt={alt}
        className="loader-icon"
      />
      <div className="loader-text">{loaderText}</div>
    </div>
  );
};
export default Loader;
