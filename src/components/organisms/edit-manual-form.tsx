import ContentWrapper from "../molecules/content-wrapper";
import FormInput from "../molecules/form-input";
import FormTextarea from "../molecules/form-textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import useEditManual from "../../hooks/edit-manual";
import { Spinner } from "@chakra-ui/spinner";
import SuccessModal from "../molecules/success-modal";

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
    setImageFile,
    uploading,
    uploadSucess,
    uploadError,
  } = useEditManual();

  const [showLessonNumberTip, setShowLessonNumberTip] = useState(false);
  const [showBibleTextTip, setShowBibleTextTip] = useState(false);
  const [showMemoryTrackTip, setShowMemoryTrackTip] = useState(false);
  const [showConclusionTip, setShowConclusionTip] = useState(false);

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
              <div className="file_input">
                <label htmlFor="header-image">Header Image</label>
                <input
                  title="header-image"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  id="header-image"
                  onChange={(e) => {
                    if (e.target.files) setImageFile(e.target.files[0]);
                  }}
                />
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
              <FormTextarea
                className="memory-track"
                label="Memory Track"
                value={manualData.memory_track}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setManualData({ ...manualData, memory_track: target.value });
                }}
                onFocus={() => {
                  setShowMemoryTrackTip(true);
                }}
                showTip={showMemoryTrackTip}
                tip={{
                  title: "Memory Track Tip",
                  text: "If the lesson does not have a memory track, you do not need to type any text in the box.",
                }}
              />
              <ReactQuill
                theme="snow"
                value={manualData.body}
                onChange={(e) => {
                  setManualData({ ...manualData, body: e });
                }}
                modules={modules}
                // formats={formats}
              ></ReactQuill>
              <FormTextarea
                className="memory-track"
                label="Conclusion"
                value={manualData.summary}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setManualData({ ...manualData, summary: target.value });
                }}
                onFocus={() => {
                  setShowConclusionTip(true);
                }}
                showTip={showConclusionTip}
                tip={{
                  title: "Conclusion Tip",
                  text: "If the lesson does not have a conclusion, you do not need to type any text in the box.",
                }}
              />
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
