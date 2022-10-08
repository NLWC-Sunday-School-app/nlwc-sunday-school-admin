import ContentWrapper from "../molecules/content-wrapper";
import FormInput from "../molecules/form-input";
import FormTextarea from "../molecules/form-textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useState } from "react";

interface IManualFormProps {}

interface ManualData {
  theme: string;
  topic: string;
  text: string;
  lesson: string;
  header_image: string;
  body: string;
  summary: string;
}
const ManualForm: React.FunctionComponent<IManualFormProps> = (props) => {
  const Font = ReactQuill.Quill.import("formats/font"); // <<<< ReactQuill exports it
  Font.whitelist = ["Apercu", "roboto"]; // allow ONLY these fonts and the default
  ReactQuill.Quill.register(Font, true);
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ font: ["Apercu"] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      //   ["clean"],
    ],
  };

  const formats = [
    "fonts",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const [manualData, setManualData] = useState<ManualData>({
    theme: "",
    topic: "",
    text: "",
    lesson: "",
    header_image: "",
    body: "",
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
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, theme: target.value });
            }}
          />
          <FormInput
            label="Lesson Number"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, lesson: target.value });
            }}
          />
          <FormInput
            label="Topic"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, topic: target.value });
            }}
          />
          <FormInput
            label="Bible Text"
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
              // const target = e.target as HTMLInputElement;
              console.log("html body:", e);

              setManualData({ ...manualData, body: e });
            }}
            modules={modules}
            formats={formats}
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
