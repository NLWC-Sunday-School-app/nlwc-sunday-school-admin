import { useEffect, useRef, useState } from "react";
import { deleteManual } from "../../services/manual";
import ConfirmDeleteModal from "./delete-confirm";
import DeleteSucessModal from "./delete-sucess";
import ManualControl from "./manual-item-control";

interface IManualItemProps {
  imgUrl: string;
  title: string;
  date: string;
  manualId: string;
  views: number;
}

const ManualItem: React.FunctionComponent<IManualItemProps> = ({
  imgUrl,
  title,
  date,
  manualId,
  views,
}) => {
  const [showControl, setShowControl] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [deleteSuccess, setDeleteSucess] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const onClickOutside = (e: MouseEvent) => {
    const target = e?.target as HTMLInputElement;
    if (!target?.className.includes("manual_control")) {
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
        <h3 className="manual_item-title">
          <a
            href={`https://manuals.nlwc.church/manual/${manualId}`}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </h3>
        <div className="manual_item-note">
          <p className="manual_item-date">Date added: {date}</p>

          <div className="manual_item-views">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_353_281)">
                <path
                  d="M14.0242 7.325C14.0078 7.28125 13.5429 6.25313 12.5148 5.21953C11.1422 3.85234 9.40856 3.125 7.49997 3.125C5.59138 3.125 3.85778 3.85234 2.48513 5.21953C1.457 6.25313 0.992157 7.28125 0.975751 7.325C0.951334 7.38011 0.938721 7.43972 0.938721 7.5C0.938721 7.56028 0.951334 7.61989 0.975751 7.675C0.992157 7.71875 1.457 8.74687 2.48513 9.78047C3.85778 11.1477 5.59138 11.875 7.49997 11.875C9.40856 11.875 11.1422 11.1477 12.5148 9.78047C13.5429 8.74687 14.0078 7.71875 14.0242 7.675C14.0486 7.61989 14.0612 7.56028 14.0612 7.5C14.0612 7.43972 14.0486 7.38011 14.0242 7.325ZM7.49997 5.53125C7.88935 5.53125 8.26999 5.64672 8.59375 5.86304C8.91751 6.07937 9.16985 6.38685 9.31886 6.74659C9.46787 7.10633 9.50686 7.50218 9.43089 7.88408C9.35493 8.26598 9.16742 8.61678 8.89209 8.89212C8.61675 9.16745 8.26595 9.35496 7.88405 9.43092C7.50215 9.50689 7.1063 9.4679 6.74656 9.31889C6.38682 9.16988 6.07934 8.91754 5.86301 8.59378C5.64668 8.27002 5.53122 7.88938 5.53122 7.5C5.53122 6.97785 5.73864 6.4771 6.10785 6.10788C6.47707 5.73867 6.97782 5.53125 7.49997 5.53125Z"
                  fill="#515151"
                />
              </g>
              <defs>
                <clipPath id="clip0_353_281">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Views:</span>
            <span>{views}</span>
          </div>
        </div>
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
      {showControl ? (
        <ManualControl
          manualId={manualId}
          onDelete={() => {
            setDeleteItem(true);
          }}
        />
      ) : (
        ""
      )}
      {deleteItem ? (
        <ConfirmDeleteModal
          onConfirmDelete={() => {
            setDeleting(true);
            deleteManual(manualId).then((res) => {
              setDeleteItem(false);
              setDeleteSucess(true);
            });
          }}
          deleting={deleting}
          manualId={manualId}
          title={title}
          onClose={() => {
            setDeleteItem(false);
          }}
        />
      ) : (
        ""
      )}
      {deleteSuccess ? <DeleteSucessModal /> : ""}
    </div>
  );
};

export default ManualItem;
