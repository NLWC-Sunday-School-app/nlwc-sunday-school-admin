import { useState } from "react";
import ContentWrapper from "../molecules/content-wrapper";
import ManualItem from "../molecules/manual-item";
import UpcomingReleases from "./upcoming-releases";
import { Link } from "react-router-dom";
import useManuals from "../../hooks/get-manuals";

interface IDashboardHomeProps {}

const DashboardHome: React.FunctionComponent<IDashboardHomeProps> = (props) => {
  const { manuals, totalManual, loading } = useManuals();
  const manuals1 = manuals.slice(0, 5);
  const manuals2 = manuals.slice(5, 10);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="dashboard_home">
      <div className="dashboard_home-head">
        <h1 className="dashboard_home-heading">
          Welcome, <br /> Sunday School Department
        </h1>
        <p className="dashboard_home-profile">SSD</p>
      </div>
      <ContentWrapper className="manual_count">
        <div>
          <p className="manual_count-text">Total number of manuals added</p>
          <div className="dashboard_home-head">
            <p className="manual_count-number">
              {loading ? "..." : totalManual}
            </p>
            <Link to="/new" className="manual_count-btn" type="button">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_22_768)">
                  <path
                    d="M11.8125 6.5625H7.4375V2.1875C7.4375 2.07147 7.39141 1.96019 7.30936 1.87814C7.22731 1.79609 7.11603 1.75 7 1.75C6.88397 1.75 6.77269 1.79609 6.69064 1.87814C6.60859 1.96019 6.5625 2.07147 6.5625 2.1875V6.5625H2.1875C2.07147 6.5625 1.96019 6.60859 1.87814 6.69064C1.79609 6.77269 1.75 6.88397 1.75 7C1.75 7.11603 1.79609 7.22731 1.87814 7.30936C1.96019 7.39141 2.07147 7.4375 2.1875 7.4375H6.5625V11.8125C6.5625 11.9285 6.60859 12.0398 6.69064 12.1219C6.77269 12.2039 6.88397 12.25 7 12.25C7.11603 12.25 7.22731 12.2039 7.30936 12.1219C7.39141 12.0398 7.4375 11.9285 7.4375 11.8125V7.4375H11.8125C11.9285 7.4375 12.0398 7.39141 12.1219 7.30936C12.2039 7.22731 12.25 7.11603 12.25 7C12.25 6.88397 12.2039 6.77269 12.1219 6.69064C12.0398 6.60859 11.9285 6.5625 11.8125 6.5625Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_768">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Add Manual
            </Link>
          </div>
          <p className="manual_count-text">and still counting!</p>
        </div>
      </ContentWrapper>
      <ContentWrapper className="recent_manuals">
        <>
          <div className="recent_manuals-head">
            <p>Recently Added Manuals</p>
            <Link to="/manuals" type="button">
              View all manuals
            </Link>
          </div>
          <div className="recent_manuals-note">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#F7FBFF" />
              <g clipPath="url(#clip0_29_921)">
                <path
                  d="M23.4563 15.8C23.4375 15.75 22.9063 14.575 21.7313 13.3938C20.1625 11.8313 18.1813 11 16 11C13.8188 11 11.8375 11.8313 10.2688 13.3938C9.09375 14.575 8.5625 15.75 8.54375 15.8C8.51585 15.863 8.50143 15.9311 8.50143 16C8.50143 16.0689 8.51585 16.137 8.54375 16.2C8.5625 16.25 9.09375 17.425 10.2688 18.6062C11.8375 20.1687 13.8188 21 16 21C18.1813 21 20.1625 20.1687 21.7313 18.6062C22.9063 17.425 23.4375 16.25 23.4563 16.2C23.4842 16.137 23.4986 16.0689 23.4986 16C23.4986 15.9311 23.4842 15.863 23.4563 15.8ZM16 13.75C16.445 13.75 16.88 13.882 17.25 14.1292C17.62 14.3764 17.9084 14.7278 18.0787 15.139C18.249 15.5501 18.2936 16.0025 18.2068 16.439C18.12 16.8754 17.9057 17.2763 17.591 17.591C17.2763 17.9057 16.8754 18.12 16.439 18.2068C16.0025 18.2936 15.5501 18.249 15.139 18.0787C14.7278 17.9084 14.3764 17.62 14.1292 17.25C13.882 16.88 13.75 16.445 13.75 16C13.75 15.4033 13.9871 14.831 14.409 14.409C14.831 13.9871 15.4033 13.75 16 13.75Z"
                  fill="#144264"
                />
              </g>
              <defs>
                <clipPath id="clip0_29_921">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>
              This will only show the{" "}
              <span> last 10 recently added manuals;</span> to view, sort or
              filter all manuals please click all manuals on the side bar.
            </p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_29_913)">
                <path
                  d="M8.70625 8L12.8563 3.85625C12.936 3.7591 12.9767 3.63577 12.9706 3.51024C12.9644 3.38471 12.9118 3.26597 12.8229 3.1771C12.734 3.08823 12.6153 3.0356 12.4898 3.02943C12.3642 3.02327 12.2409 3.06401 12.1438 3.14375L8 7.29375L3.85626 3.14375C3.75911 3.06401 3.63578 3.02327 3.51025 3.02943C3.38472 3.0356 3.26598 3.08823 3.17711 3.1771C3.08824 3.26597 3.03561 3.38471 3.02944 3.51024C3.02328 3.63577 3.06402 3.7591 3.14375 3.85625L7.29375 8L3.14375 12.1437C3.04986 12.2385 2.99719 12.3666 2.99719 12.5C2.99719 12.6334 3.04986 12.7614 3.14375 12.8562C3.23933 12.9487 3.36706 13.0003 3.50001 13.0003C3.63295 13.0003 3.76068 12.9487 3.85626 12.8562L8 8.70625L12.1438 12.8562C12.2393 12.9487 12.3671 13.0003 12.5 13.0003C12.6329 13.0003 12.7607 12.9487 12.8563 12.8562C12.9501 12.7614 13.0028 12.6334 13.0028 12.5C13.0028 12.3666 12.9501 12.2385 12.8563 12.1437L8.70625 8Z"
                  fill="#515151"
                />
              </g>
              <defs>
                <clipPath id="clip0_29_913">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {loading ? (
            <p>loading</p>
          ) : (
            <div className="manual_items">
              {pageNumber === 1
                ? manuals1.map((manual, index) => (
                    <ManualItem
                      key={manual.topic}
                      imgUrl={manual.header_image}
                      title={manual.topic}
                      date={manual.manual_date}
                    />
                  ))
                : manuals2.map((manual, index) => (
                    <ManualItem
                      key={manual.topic}
                      imgUrl={manual.header_image}
                      title={manual.topic}
                      date={manual.manual_date}
                    />
                  ))}
            </div>
          )}
          {manuals.length > 5 ? (
            <div className="recent_manuals-pagination">
              <button
                type="button"
                title="previous"
                onClick={() => {
                  setPageNumber(1);
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
              <span>{pageNumber === 1 ? "5 of 10" : "10 of 10"}</span>
              <button
                type="button"
                title="next"
                onClick={() => {
                  setPageNumber(2);
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
          ) : (
            ""
          )}
        </>
      </ContentWrapper>

      <UpcomingReleases />
    </div>
  );
};

export default DashboardHome;
