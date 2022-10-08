import * as React from "react";
import { useState } from "react";

interface IPaginationProps {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  totalManual: number;
  currentNumber: number;
  lastPage: number;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({
  pageNumber,
  setPageNumber,
  totalManual,
  currentNumber,
  lastPage,
}) => {
  return (
    <div className="pagination">
      {totalManual < 10 ? (
        <p></p>
      ) : (
        <div className="recent_manuals-pagination">
          <button
            type="button"
            title="previous"
            onClick={() => {
              if (pageNumber > 1) setPageNumber(pageNumber - 1);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="20"
                height="20"
                rx="3"
                fill={pageNumber === 1 ? "" : "#EAF5FD"}
              />
              <path
                d="M6.56184 10C6.56175 9.91139 6.58052 9.82376 6.61689 9.74295C6.65325 9.66213 6.70639 9.58997 6.77277 9.53126L12.3978 4.53126C12.4593 4.47689 12.531 4.43517 12.6087 4.40849C12.6864 4.38181 12.7685 4.37069 12.8505 4.37577C12.9325 4.38085 13.0127 4.40202 13.0864 4.43809C13.1602 4.47415 13.2262 4.52439 13.2806 4.58595C13.335 4.64751 13.3767 4.71917 13.4034 4.79685C13.43 4.87453 13.4412 4.95671 13.4361 5.03868C13.431 5.12066 13.4098 5.20083 13.3738 5.27463C13.3377 5.34842 13.2875 5.41439 13.2259 5.46876L8.12434 10L13.2259 14.5313C13.3212 14.6153 13.3886 14.7263 13.4191 14.8496C13.4497 14.9729 13.442 15.1025 13.397 15.2213C13.352 15.3401 13.272 15.4423 13.1674 15.5145C13.0629 15.5866 12.9388 15.6251 12.8118 15.625C12.6595 15.6245 12.5125 15.569 12.3978 15.4688L6.77277 10.4688C6.70639 10.4101 6.65325 10.3379 6.61689 10.2571C6.58052 10.1763 6.56175 10.0886 6.56184 10Z"
                fill={pageNumber === 1 ? "#DDD9D9" : "black"}
              />
            </svg>
          </button>
          <span>
            {pageNumber > 1
              ? pageNumber - 1 * 10 + currentNumber
              : currentNumber}{" "}
            of {totalManual}
          </span>
          <button
            type="button"
            title="next"
            onClick={() => {
              if (pageNumber < lastPage) setPageNumber(pageNumber + 1);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="20"
                height="20"
                rx="3"
                fill={pageNumber === 2 ? "" : "#EAF5FD"}
              />
              <path
                d="M13.4382 10C13.4382 9.91139 13.4195 9.82376 13.3831 9.74295C13.3467 9.66213 13.2936 9.58997 13.2272 9.53126L7.60223 4.53126C7.54067 4.47689 7.46901 4.43517 7.39133 4.40849C7.31365 4.38181 7.23147 4.37069 7.14949 4.37577C7.06752 4.38085 6.98734 4.40202 6.91355 4.43809C6.83976 4.47415 6.77379 4.52439 6.71941 4.58595C6.66504 4.64751 6.62332 4.71917 6.59664 4.79685C6.56996 4.87453 6.55884 4.95671 6.56392 5.03868C6.569 5.12066 6.59017 5.20083 6.62624 5.27463C6.6623 5.34842 6.71254 5.41439 6.7741 5.46876L11.8757 10L6.7741 14.5313C6.67885 14.6153 6.61144 14.7263 6.58087 14.8496C6.5503 14.9729 6.55802 15.1025 6.60298 15.2213C6.64795 15.3401 6.72804 15.4423 6.83258 15.5145C6.93712 15.5866 7.06116 15.6251 7.18816 15.625C7.34049 15.6245 7.48751 15.569 7.60223 15.4688L13.2272 10.4688C13.2936 10.4101 13.3467 10.3379 13.3831 10.2571C13.4195 10.1763 13.4382 10.0886 13.4382 10Z"
                fill={pageNumber === 2 ? "#DDD9D9" : "black"}
              />
            </svg>
          </button>
        </div>
      )}
      <div className="entries">
        <p>Displaying {currentNumber} Entries</p>
      </div>
    </div>
  );
};

export default Pagination;
