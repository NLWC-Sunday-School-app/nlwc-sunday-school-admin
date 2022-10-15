import ContentWrapper from "../molecules/content-wrapper";
import FormInput from "../molecules/form-input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import useEditManual from "../../hooks/edit-manual";
import { Spinner } from "@chakra-ui/spinner";
import SuccessModal from "../molecules/success-modal";
import Tip from "../molecules/tip";
import PictureModal from "../molecules/header-image-modal";

interface IEditManualFormProps {}

const EditManualForm: React.FunctionComponent<IEditManualFormProps> = (
  props
) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
  };

  const {
    manualData,
    setManualData,
    loading,
    handleEdit,
    imageFile,
    setImageFile,
    uploading,
    uploadSucess,
    uploadError,
  } = useEditManual();

  const [showLessonNumberTip, setShowLessonNumberTip] = useState(false);
  const [showBibleTextTip, setShowBibleTextTip] = useState(false);
  const [showMemoryTrackTip, setShowMemoryTrackTip] = useState(false);
  const [showConclusionTip, setShowConclusionTip] = useState(false);
  const [showPictureModal, setShowPictureModal] = useState(false);

  return (
    <div className="manuals">
      <div className="dashboard_home-head">
        <h1 className="dashboard_home-heading">Edit Manual</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ContentWrapper className="manual_form">
          <>
            <form className="form">
              <p className="form_note">
                Please fill every input field required
              </p>
              <FormInput
                label="Theme of study"
                placeholder="Type the theme of the study not topic here"
                value={manualData.theme}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setManualData({ ...manualData, theme: target.value });
                }}
              />
              <FormInput
                label="Lesson Number"
                placeholder="Type the lesson number in numbers. e.g. 4, 5, 23, etc"
                value={manualData.lesson}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setManualData({ ...manualData, lesson: target.value });
                }}
                onFocus={() => {
                  setShowLessonNumberTip(true);
                }}
                showTip={showLessonNumberTip}
                tip={{
                  title: "Lesson Number Tip",
                  text: "Kindly write the lesson number in numbers not words. e.g. 4, 28 etc.",
                }}
              />
              <FormInput
                label="Topic"
                placeholder="Type the topic of the lesson here"
                value={manualData.topic}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setManualData({ ...manualData, topic: target.value });
                }}
              />
              {/* <div className="file_input">
                <label htmlFor="header-image">Header Image</label>
                <input
                  title="header-image"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  id="header-imagep"
                  onChange={(e) => {
                    if (e.target.files) setImageFile(e.target.files[0]);
                  }}
                />
              </div> */}
              <div className="file_input">
                <label className="label" htmlFor="header-image">
                  Header Image
                </label>
                <input
                  className="image_edit"
                  title="header-image"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  id="header-image"
                  onChange={(e) => {
                    if (e.target.files) setImageFile(e.target.files[0]);
                    console.log(e.target.files && e.target.files[0].name);
                  }}
                />
                <label htmlFor="header-image">
                  <span className="image_edit-btn">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_201_456)">
                        <path
                          d="M4.9125 5.81251C4.87624 5.72122 4.86698 5.62144 4.88582 5.52504C4.90465 5.42863 4.9508 5.33968 5.01875 5.26876L7.64375 2.64375C7.73855 2.54986 7.86658 2.49719 8 2.49719C8.13342 2.49719 8.26145 2.54986 8.35625 2.64375L10.9812 5.26876C11.0492 5.33968 11.0953 5.42863 11.1142 5.52504C11.133 5.62144 11.1238 5.72122 11.0875 5.81251C11.0502 5.90468 10.9863 5.98364 10.9039 6.0393C10.8215 6.09496 10.7244 6.1248 10.625 6.12501H8.5V10C8.5 10.1326 8.44732 10.2598 8.35355 10.3536C8.25979 10.4473 8.13261 10.5 8 10.5C7.86739 10.5 7.74021 10.4473 7.64645 10.3536C7.55268 10.2598 7.5 10.1326 7.5 10V6.12501H5.375C5.27557 6.1248 5.17847 6.09496 5.09608 6.0393C5.0137 5.98364 4.94978 5.90468 4.9125 5.81251ZM13.5 9.5C13.3674 9.5 13.2402 9.55268 13.1464 9.64645C13.0527 9.74022 13 9.8674 13 10V13.5H3V10C3 9.8674 2.94732 9.74022 2.85355 9.64645C2.75979 9.55268 2.63261 9.5 2.5 9.5C2.36739 9.5 2.24021 9.55268 2.14645 9.64645C2.05268 9.74022 2 9.8674 2 10V13.5C2 13.7652 2.10536 14.0196 2.29289 14.2071C2.48043 14.3946 2.73478 14.5 3 14.5H13C13.2652 14.5 13.5196 14.3946 13.7071 14.2071C13.8946 14.0196 14 13.7652 14 13.5V10C14 9.8674 13.9473 9.74022 13.8536 9.64645C13.7598 9.55268 13.6326 9.5 13.5 9.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_201_456">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Change image
                  </span>
                  <span>{imageFile?.name || "image-header.jpg"}</span>
                </label>
                {imageFile || manualData.header_image ? (
                  <button
                    type="button"
                    onClick={() => {
                      setShowPictureModal(true);
                    }}
                  >
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_201_558)">
                        <path
                          d="M13.5244 7.325C13.508 7.28125 13.0432 6.25313 12.0151 5.21953C10.6424 3.85234 8.90881 3.125 7.00021 3.125C5.09162 3.125 3.35803 3.85234 1.98537 5.21953C0.957245 6.25313 0.492401 7.28125 0.475995 7.325C0.451578 7.38011 0.438965 7.43972 0.438965 7.5C0.438965 7.56028 0.451578 7.61989 0.475995 7.675C0.492401 7.71875 0.957245 8.74687 1.98537 9.78047C3.35803 11.1477 5.09162 11.875 7.00021 11.875C8.90881 11.875 10.6424 11.1477 12.0151 9.78047C13.0432 8.74687 13.508 7.71875 13.5244 7.675C13.5489 7.61989 13.5615 7.56028 13.5615 7.5C13.5615 7.43972 13.5489 7.38011 13.5244 7.325ZM7.00021 5.53125C7.3896 5.53125 7.77023 5.64672 8.09399 5.86304C8.41775 6.07937 8.67009 6.38685 8.8191 6.74659C8.96811 7.10633 9.0071 7.50218 8.93114 7.88408C8.85517 8.26598 8.66766 8.61678 8.39233 8.89212C8.117 9.16745 7.7662 9.35496 7.3843 9.43092C7.0024 9.50689 6.60655 9.4679 6.24681 9.31889C5.88706 9.16988 5.57959 8.91754 5.36326 8.59378C5.14693 8.27002 5.03146 7.88938 5.03146 7.5C5.03146 6.97785 5.23889 6.4771 5.6081 6.10788C5.97731 5.73867 6.47807 5.53125 7.00021 5.53125Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_201_558">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    view
                  </button>
                ) : (
                  ""
                )}
                {showPictureModal ? (
                  <PictureModal
                    // imageUrl="https://nlwc-ss.s3.us-east-2.amazonaws.com/images/DRpGi1d9KMcInPP2IYcPJRSPxJyeILCODvigQLAP.png"
                    imageUrl={
                      imageFile
                        ? URL.createObjectURL(imageFile)
                        : manualData.header_image
                    }
                    imageTitle={manualData.topic}
                    onclose={() => {
                      setShowPictureModal(false);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
              <FormInput
                label="Manual Date"
                value={manualData.manual_date}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setManualData({ ...manualData, manual_date: target.value });
                }}
              />
              {manualData.text.map((text, index) => (
                <FormInput
                  key={`text ${index}`}
                  label="Bible Text"
                  placeholder="Click the add bible text to include more than one bible text"
                  value={text}
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    const updatedText = [...manualData.text];
                    updatedText[index] = target.value;
                    setManualData({ ...manualData, text: [...updatedText] });
                  }}
                  onFocus={() => {
                    setShowBibleTextTip(true);
                  }}
                  showTip={index === 0 && showBibleTextTip}
                  tip={{
                    title: "Bible Text Tip",
                    text: "Type the book name in full. e.g. Galatians not Gal.",
                  }}
                />
              ))}
              <button
                type="button"
                className="add_text"
                onClick={(e) => {
                  e.preventDefault();
                  const updatedText = [...manualData.text];
                  updatedText[manualData.text.length] = "";
                  setManualData({ ...manualData, text: [...updatedText] });
                }}
              >
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_201_650)">
                    <path
                      d="M11.8125 7.0625H7.4375V2.6875C7.4375 2.57147 7.39141 2.46019 7.30936 2.37814C7.22731 2.29609 7.11603 2.25 7 2.25C6.88397 2.25 6.77269 2.29609 6.69064 2.37814C6.60859 2.46019 6.5625 2.57147 6.5625 2.6875V7.0625H2.1875C2.07147 7.0625 1.96019 7.10859 1.87814 7.19064C1.79609 7.27269 1.75 7.38397 1.75 7.5C1.75 7.61603 1.79609 7.72731 1.87814 7.80936C1.96019 7.89141 2.07147 7.9375 2.1875 7.9375H6.5625V12.3125C6.5625 12.4285 6.60859 12.5398 6.69064 12.6219C6.77269 12.7039 6.88397 12.75 7 12.75C7.11603 12.75 7.22731 12.7039 7.30936 12.6219C7.39141 12.5398 7.4375 12.4285 7.4375 12.3125V7.9375H11.8125C11.9285 7.9375 12.0398 7.89141 12.1219 7.80936C12.2039 7.72731 12.25 7.61603 12.25 7.5C12.25 7.38397 12.2039 7.27269 12.1219 7.19064C12.0398 7.10859 11.9285 7.0625 11.8125 7.0625Z"
                      fill="#111111"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_650">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Add bible text
              </button>
              <div className="form_input">
                <label htmlFor="memory">Memory Track</label>
                <ReactQuill
                  className="memory-track"
                  theme="snow"
                  value={manualData.memory_track}
                  onChange={(e) => {
                    setManualData({ ...manualData, memory_track: e });
                  }}
                  modules={modules}
                  onFocus={() => {
                    setShowMemoryTrackTip(true);
                  }}
                />
                {showMemoryTrackTip ? (
                  <Tip
                    tipText="If the lesson does not have a memory track, you do not need to type any text in the box."
                    tipTitle="Memory Track Tip"
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="form_input">
                <label htmlFor="manual_body">Body of Manual</label>
                <ReactQuill
                  theme="snow"
                  className="manual_body"
                  value={manualData.body}
                  onChange={(e) => {
                    setManualData({ ...manualData, body: e });
                  }}
                  modules={modules}
                  // formats={formats}
                />
              </div>
              <div className="form_input">
                <label htmlFor="Conclusion">Conclusion</label>
                <ReactQuill
                  className="memory-track"
                  theme="snow"
                  value={manualData.summary}
                  onChange={(e) => {
                    setManualData({ ...manualData, summary: e });
                  }}
                  modules={modules}
                  onFocus={() => {
                    setShowConclusionTip(true);
                  }}
                />
                {showConclusionTip ? (
                  <Tip
                    tipText="If the lesson does not have a conclusion, you do not need to type any text in the box."
                    tipTitle="Conclusion Tip"
                  />
                ) : (
                  ""
                )}
              </div>
              <button className="form_btn" type="submit" onClick={handleEdit}>
                {uploading ? <Spinner h="20px" w="20px" /> : "Upload Manual"}
              </button>
            </form>
            {uploadSucess ? <SuccessModal /> : ""}
            {uploadError ? uploadError : ""}
          </>
        </ContentWrapper>
      )}
    </div>
  );
};

export default EditManualForm;
