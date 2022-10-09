import * as React from "react";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "./delete-confirm";

interface IManualControlProps {
  manualId: string;
}

const ManualControl: React.FunctionComponent<IManualControlProps> = ({
  manualId,
}) => {
  return (
    <div className="manual_control">
      <Link className="manual_control-edit" to={`edit/${manualId}`}>
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_47_1782)">
            <path
              d="M12.25 4.69453L9.82734 2.26641C9.66422 2.09913 9.44288 2.00119 9.20937 1.99297C9.09087 1.99024 8.97306 2.01162 8.86307 2.0558C8.75308 2.09998 8.65321 2.16605 8.56953 2.25L7.12578 3.68828L2.00703 8.8125C1.92549 8.89342 1.86079 8.98969 1.81668 9.09576C1.77256 9.20183 1.7499 9.31559 1.75 9.43047V11.875C1.75 12.1071 1.84219 12.3296 2.00628 12.4937C2.17038 12.6578 2.39294 12.75 2.625 12.75H5.06953C5.30132 12.749 5.52337 12.6566 5.6875 12.493L12.25 5.93047C12.4123 5.76574 12.5033 5.54376 12.5033 5.3125C12.5033 5.08124 12.4123 4.85926 12.25 4.69453ZM10.5 6.44453L8.05547 4L9.1875 2.86797L11.632 5.3125L10.5 6.44453Z"
              fill="#144264"
            />
          </g>
          <defs>
            <clipPath id="clip0_47_1782">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        Edit Manual
      </Link>
      <button className="manual_control-delete" type="button">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_47_1790)">
            <path
              d="M12.25 3.5625C12.25 3.67853 12.2039 3.78981 12.1219 3.87186C12.0398 3.95391 11.9285 4 11.8125 4H11.375V11.875C11.375 12.1071 11.2828 12.3296 11.1187 12.4937C10.9546 12.6578 10.7321 12.75 10.5 12.75H3.5C3.26794 12.75 3.04538 12.6578 2.88128 12.4937C2.71719 12.3296 2.625 12.1071 2.625 11.875V4H2.1875C2.07147 4 1.96019 3.95391 1.87814 3.87186C1.79609 3.78981 1.75 3.67853 1.75 3.5625C1.75 3.44647 1.79609 3.33519 1.87814 3.25314C1.96019 3.17109 2.07147 3.125 2.1875 3.125H11.8125C11.9285 3.125 12.0398 3.17109 12.1219 3.25314C12.2039 3.33519 12.25 3.44647 12.25 3.5625ZM4.8125 2.25H9.1875C9.30353 2.25 9.41481 2.20391 9.49686 2.12186C9.57891 2.03981 9.625 1.92853 9.625 1.8125C9.625 1.69647 9.57891 1.58519 9.49686 1.50314C9.41481 1.42109 9.30353 1.375 9.1875 1.375H4.8125C4.69647 1.375 4.58519 1.42109 4.50314 1.50314C4.42109 1.58519 4.375 1.69647 4.375 1.8125C4.375 1.92853 4.42109 2.03981 4.50314 2.12186C4.58519 2.20391 4.69647 2.25 4.8125 2.25Z"
              fill="#9E0F0F"
            />
          </g>
          <defs>
            <clipPath id="clip0_47_1790">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        Delete Manual
      </button>
      {/* <ConfirmDeleteModal /> */}
    </div>
  );
};

export default ManualControl;
