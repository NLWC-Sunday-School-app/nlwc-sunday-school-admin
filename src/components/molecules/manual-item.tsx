import { useEffect, useRef, useState } from "react";
import ManualControl from "./manual-item-control";

interface IManualItemProps {
  imgUrl: string;
  title: string;
  date: string;
  manualId: string;
}

const ManualItem: React.FunctionComponent<IManualItemProps> = ({
  imgUrl,
  title,
  date,
  manualId,
}) => {
  const [showControl, setShowControl] = useState(false);
  const onClickOutside = (e: MouseEvent) => {
    const target = e?.target as HTMLInputElement;
    if (!target?.className.includes("manual_item")) {
      setShowControl(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClickOutside);
  }, []);
  return (
    <div className="manual_item">
      <img src={imgUrl} alt="manual" />
      <div>
        <h3 className="manual_item-title">{title}</h3>
        <p className="manual_item-date">Date added: {date}</p>
      </div>
      <button type="button" title="tool" onClick={() => setShowControl(true)}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_26_788)">
            <path
              d="M12.6875 10C12.6875 10.4326 12.5592 10.8556 12.3188 11.2153C12.0785 11.575 11.7368 11.8554 11.3371 12.021C10.9374 12.1866 10.4976 12.2299 10.0732 12.1455C9.64891 12.0611 9.25913 11.8527 8.95321 11.5468C8.64728 11.2409 8.43894 10.8511 8.35453 10.4268C8.27013 10.0024 8.31345 9.5626 8.47901 9.16288C8.64458 8.76317 8.92496 8.42153 9.28469 8.18116C9.64442 7.9408 10.0674 7.8125 10.5 7.8125C11.0795 7.81456 11.6347 8.04569 12.0445 8.45548C12.4543 8.86527 12.6854 9.42047 12.6875 10ZM10.5 5.9375C10.9326 5.9375 11.3556 5.80921 11.7153 5.56884C12.075 5.32848 12.3554 4.98683 12.521 4.58712C12.6866 4.18741 12.7299 3.74757 12.6455 3.32324C12.5611 2.89891 12.3527 2.50913 12.0468 2.2032C11.7409 1.89728 11.3511 1.68894 10.9268 1.60453C10.5024 1.52013 10.0626 1.56345 9.66288 1.72901C9.26317 1.89458 8.92153 2.17496 8.68116 2.53469C8.4408 2.89442 8.3125 3.31735 8.3125 3.75C8.31456 4.32953 8.54569 4.88473 8.95548 5.29452C9.36527 5.70431 9.92047 5.93544 10.5 5.9375ZM10.5 14.0625C10.0674 14.0625 9.64442 14.1908 9.28469 14.4312C8.92496 14.6715 8.64458 15.0132 8.47901 15.4129C8.31345 15.8126 8.27013 16.2524 8.35453 16.6768C8.43894 17.1011 8.64728 17.4909 8.95321 17.7968C9.25913 18.1027 9.64891 18.3111 10.0732 18.3955C10.4976 18.4799 10.9374 18.4366 11.3371 18.271C11.7368 18.1054 12.0785 17.825 12.3188 17.4653C12.5592 17.1056 12.6875 16.6826 12.6875 16.25C12.6854 15.6705 12.4543 15.1153 12.0445 14.7055C11.6347 14.2957 11.0795 14.0646 10.5 14.0625Z"
              fill="#333333"
            />
          </g>
          <defs>
            <clipPath id="clip0_26_788">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      {showControl ? <ManualControl manualId={manualId} /> : ""}
    </div>
  );
};

export default ManualItem;
