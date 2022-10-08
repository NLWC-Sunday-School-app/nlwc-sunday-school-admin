import ContentWrapper from "../molecules/content-wrapper";
import FormInput from "../molecules/form-input";
import FormTextarea from "../molecules/form-textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useState } from "react";
import { uploadManual } from "../../services/manual";
import { IManualData } from "../../types/types";

interface IManualFormProps {}


const ManualForm: React.FunctionComponent<IManualFormProps> = (props) => {
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

  const [manualData, setManualData] = useState<IManualData>({
    theme: "",
    topic: "",
    text: "",
    lesson: "",
    header_image: "test",
    body: "",
    manual_date: "",
    summary: "",
  });
  return (
    <div className="manuals">
      <div className="dashboard_home-head">
        <h1 className="dashboard_home-heading">Add New Manual</h1>
      </div>
      <ContentWrapper className="manual_form">
        <form className="form">
          <p className="form_note">Please fill every input field required</p>
          <FormInput
            label="Theme of study"
            placeholder="Type the theme of the study not topic here"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, theme: target.value });
            }}
          />
          <FormInput
            label="Lesson Number"
            placeholder="Type the lesson number in numbers. e.g. 4, 5, 23, etc"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, lesson: target.value });
            }}
          />
          <FormInput
            label="Topic"
            placeholder="Type the topic of the lesson here"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, topic: target.value });
            }}
          />
          <FormInput
            label="Manual Date"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, manual_date: target.value });
            }}
          />
          <FormInput
            label="Bible Text"
            placeholder="Click the add bible text to include more than one bible text"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, text: target.value });
            }}
          />
          <FormTextarea
            className="memory-track"
            label="Memory Track"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, text: target.value });
            }}
          />
          <ReactQuill
            theme="snow"
            // value={}
            onChange={(e) => {
              setManualData({ ...manualData, body: e });
            }}
            modules={modules}
            // formats={formats}
          ></ReactQuill>
          <FormTextarea
            className="memory-track"
            label="Conclusion"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, summary: target.value });
            }}
          />
          <button
            className="form_btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(manualData);
              uploadManual(manualData)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Upload Manual
          </button>
        </form>
      </ContentWrapper>
    </div>
  );
};

export default ManualForm;
