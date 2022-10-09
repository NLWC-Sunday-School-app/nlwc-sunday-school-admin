import ContentWrapper from "../molecules/content-wrapper";
import FormInput from "../molecules/form-input";
import FormTextarea from "../molecules/form-textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useState } from "react";
import { uploadManual } from "../../services/manual";
import { IManualData } from "../../types/types";
import { uploadImage } from "../../services/images";
import SuccessModal from "../molecules/success-modal";
import { Spinner } from "@chakra-ui/spinner";

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
    memory_track: "",
  });
  const [imageFile, setImageFile] = useState<File>();
  const [uploading, setUploading] = useState(false);
  const [uploadSucess, setUploadSuccess] = useState(false);
  const [error, setError] = useState("");
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
            type="date"
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
          <FormTextarea
            className="memory-track"
            label="Memory Track"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setManualData({ ...manualData, memory_track: target.value });
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
              setUploading(true);
              console.log(manualData);
              if (imageFile) {
                uploadImage(imageFile).then((res) => {
                  console.log(res.data);
                  setManualData({
                    ...manualData,
                    header_image: res.data.image,
                  });
                  uploadManual({ ...manualData, header_image: res.data.image })
                    .then((res) => {
                      console.log(res);
                      setUploadSuccess(true);
                      setUploading(false);
                    })
                    .catch((err) => {
                      console.log(err);
                      setError("An error occured, please try agains");
                      setUploading(false);
                    });
                });
              }
            }}
          >
            {uploading ? <Spinner h="20px" w="20px" /> : "Upload Manual"}
          </button>
          {error ? error : ""}
        </form>
      </ContentWrapper>
      {uploadSucess ? <SuccessModal /> : ""}
    </div>
  );
};

export default ManualForm;
