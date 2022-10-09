import * as React from "react";
import { Link } from "react-router-dom";

interface IDeleteSucessModalProps {}

const DeleteSucessModal: React.FunctionComponent<
  IDeleteSucessModalProps
> = () => {
  return (
    <div className="success">
      <div className="success_body">
        <Link to="/new" title="close" type="button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_209_698)">
              <path
                d="M8.70613 8.00001L12.8561 3.85626C12.9359 3.75911 12.9766 3.63578 12.9704 3.51026C12.9643 3.38473 12.9116 3.26598 12.8228 3.17712C12.7339 3.08825 12.6152 3.03561 12.4896 3.02945C12.3641 3.02328 12.2408 3.06403 12.1436 3.14376L7.99988 7.29376L3.85613 3.14376C3.75899 3.06403 3.63565 3.02328 3.51013 3.02945C3.3846 3.03561 3.26586 3.08825 3.17699 3.17712C3.08812 3.26598 3.03549 3.38473 3.02932 3.51026C3.02316 3.63578 3.0639 3.75911 3.14363 3.85626L7.29363 8.00001L3.14363 12.1438C3.04974 12.2386 2.99707 12.3666 2.99707 12.5C2.99707 12.6334 3.04974 12.7615 3.14363 12.8563C3.2392 12.9487 3.36694 13.0003 3.49988 13.0003C3.63282 13.0003 3.76056 12.9487 3.85613 12.8563L7.99988 8.70626L12.1436 12.8563C12.2392 12.9487 12.3669 13.0003 12.4999 13.0003C12.6328 13.0003 12.7606 12.9487 12.8561 12.8563C12.95 12.7615 13.0027 12.6334 13.0027 12.5C13.0027 12.3666 12.95 12.2386 12.8561 12.1438L8.70613 8.00001Z"
                fill="#4A4949"
              />
            </g>
            <defs>
              <clipPath id="clip0_209_698">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <svg
          width="101"
          height="100"
          viewBox="0 0 101 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_217_746)">
            <path
              d="M84.875 18.75H69.25V15.625C69.2397 13.1418 68.2487 10.7632 66.4928 9.00723C64.7368 7.2513 62.3582 6.26028 59.875 6.25H41.125C38.6418 6.26028 36.2632 7.2513 34.5072 9.00723C32.7513 10.7632 31.7603 13.1418 31.75 15.625V18.75H16.125C15.2962 18.75 14.5013 19.0792 13.9153 19.6653C13.3292 20.2513 13 21.0462 13 21.875C13 22.7038 13.3292 23.4987 13.9153 24.0847C14.5013 24.6708 15.2962 25 16.125 25H19.25V81.25C19.25 82.9076 19.9085 84.4973 21.0806 85.6694C22.2527 86.8415 23.8424 87.5 25.5 87.5H75.5C77.1576 87.5 78.7473 86.8415 79.9194 85.6694C81.0915 84.4973 81.75 82.9076 81.75 81.25V25H84.875C85.7038 25 86.4987 24.6708 87.0847 24.0847C87.6708 23.4987 88 22.7038 88 21.875C88 21.0462 87.6708 20.2513 87.0847 19.6653C86.4987 19.0792 85.7038 18.75 84.875 18.75ZM44.25 65.625C44.25 66.4538 43.9208 67.2487 43.3347 67.8347C42.7487 68.4208 41.9538 68.75 41.125 68.75C40.2962 68.75 39.5013 68.4208 38.9153 67.8347C38.3292 67.2487 38 66.4538 38 65.625V40.625C38 39.7962 38.3292 39.0013 38.9153 38.4153C39.5013 37.8292 40.2962 37.5 41.125 37.5C41.9538 37.5 42.7487 37.8292 43.3347 38.4153C43.9208 39.0013 44.25 39.7962 44.25 40.625V65.625ZM63 65.625C63 66.4538 62.6708 67.2487 62.0847 67.8347C61.4987 68.4208 60.7038 68.75 59.875 68.75C59.0462 68.75 58.2513 68.4208 57.6653 67.8347C57.0792 67.2487 56.75 66.4538 56.75 65.625V40.625C56.75 39.7962 57.0792 39.0013 57.6653 38.4153C58.2513 37.8292 59.0462 37.5 59.875 37.5C60.7038 37.5 61.4987 37.8292 62.0847 38.4153C62.6708 39.0013 63 39.7962 63 40.625V65.625ZM63 18.75H38V15.625C38 14.7962 38.3292 14.0013 38.9153 13.4153C39.5013 12.8292 40.2962 12.5 41.125 12.5H59.875C60.7038 12.5 61.4987 12.8292 62.0847 13.4153C62.6708 14.0013 63 14.7962 63 15.625V18.75Z"
              fill="#CF3528"
            />
          </g>
          <defs>
            <clipPath id="clip0_217_746">
              <rect
                width="100"
                height="100"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <p className="text-black">Manual deleted successfully</p>
      </div>
    </div>
  );
};

export default DeleteSucessModal;
