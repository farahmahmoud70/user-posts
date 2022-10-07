import { useState, useEffect } from "react";
import errorIcon from "../../../style/images/error.svg";
import infoIcon from "../../../style/images/info.svg";
import warningIcon from "../../../style/images/warning.svg";
import successIcon from "../../../style/images/success.svg";

import "./Toast.css";

const Toast = (props) => {
  const { toastList, position, autoDelete, autoDeleteTime } = props;
  const [list, setList] = useState(toastList);

  const toastIcon = (toastType) => {
    switch (toastType) {
      case "success":
        return successIcon;
      case "error":
        return errorIcon;
      case "info":
        return infoIcon;
      case "warning":
        return warningIcon;

      default:
        break;
    }
  };

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${toast.type}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <div className="notification-image">
              <img src={toastIcon(toast.type)} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
            <button onClick={() => deleteToast(toast.id)}>X</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast;
