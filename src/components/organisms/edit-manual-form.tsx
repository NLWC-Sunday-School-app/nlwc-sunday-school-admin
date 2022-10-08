import ContentWrapper from "../molecules/content-wrapper";
import FormInput from "../molecules/form-input";
import FormTextarea from "../molecules/form-textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useEffect, useState } from "react";
import { uploadManual } from "../../services/manual";
import { IManualData } from "../../types/types";
import { useParams } from "react-router-dom";
import useEditManual from "../../hooks/edit-manual";

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

  const { manualData, setManualData, loading, handleEdit } = useEditManual();
  return (
    <div className="manuals">
      <div className="dashboard_home-head">
        <h1 className="dashboard_home-heading">Edit Manual</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ContentWrapper className="manual_form">
          <form className="form">
            <p className="form_note">Please fill every input field required</p>
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
              <input title="header image" type="file" />
            </div>
            <FormInput
              label="Manual Date"
              value={manualData.manual_date}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                setManualData({ ...manualData, manual_date: target.value });
              }}
            />
            <FormInput
              label="Bible Text"
              placeholder="Click the add bible text to include more than one bible text"
              value={manualData.text}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                setManualData({ ...manualData, text: target.value });
              }}
            />
            <FormTextarea
              className="memory-track"
              label="Memory Track"
              value={manualData.memory_track}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                setManualData({ ...manualData, memory_track: target.value });
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
            />
            <button className="form_btn" type="submit" onClick={handleEdit}>
              Upload Manual
            </button>
          </form>
        </ContentWrapper>
      )}
    </div>
  );
};

export default EditManualForm;
