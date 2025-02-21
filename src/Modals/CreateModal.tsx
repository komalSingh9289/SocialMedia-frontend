import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../Slice/modalSlice";
import { useDropzone } from "react-dropzone";
import { IoMdArrowBack, IoMdArrowForward, IoMdClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

// Define Props Interface for UploadStep
interface UploadStepProps {
  setFile: (file: File | null) => void;
  nextStep: () => void;
  file: File | null;
}

const UploadStep: React.FC<UploadStepProps> = ({ setFile, nextStep, file }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]); // Set uploaded file
    },
  });

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-2">Upload Image</h2>

      {/* Drag and Drop Area */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 rounded-lg cursor-pointer ${isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
          }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the image here...</p>
        ) : (
          <p className="text-gray-500">Drag & drop an image here, or click to select</p>
        )}
      </div>

      {/* Preview Image */}
      {file && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="w-full h-40 object-cover rounded"
          />
          <p className="text-sm text-gray-500 mt-1">{file.name}</p>
        </div>
      )}

      {/* Next Button */}
      <p
        onClick={nextStep}
        className={`mt-4 px-4 py-2 ${file ? "text-blue-500" : "text-gray-400"
          } flex items-center justify-center gap-2 cursor-pointer `}
      >
        Next
        <IoMdArrowForward />

      </p>
    </div>
  );
};

const CreateModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const resetModal = () => {
    setStep(1);
    setFile(null);
    setDescription("");
    dispatch(closeModal());
  };

  return (
    <div className="p-6 w-96">
      {/* Step Tracker */}
      <div className="flex justify-center space-x-2 mb-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-3 h-3 rounded-full ${step === s ? "bg-gray-400" : "bg-gray-200"
              }`}
          ></div>
        ))}
      </div>

      {/* Step 1: Upload Image */}
      {step === 1 && <UploadStep setFile={setFile} nextStep={nextStep} file={file} />}

      {/* Step 2: Add Description */}
      {step === 2 && (
        <div className="text-center relative">
          <h2 className="text-lg font-semibold">Add Description</h2>

          {/* Textarea for Caption */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something..."
            className="mt-3 w-full border p-2 h-24 rounded"
          ></textarea>

          {/* Emoji Picker Button */}
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="absolute right-4 top-12 text-gray-500 hover:text-gray-700"
          >
            😀
          </button>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute top-20 left-2/3 transform -translate-x-1/2 z-10 bg-white shadow-lg rounded p-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">Select an Emoji</h3>
                <IoMdClose
                  onClick={() => setShowEmojiPicker(false)}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                />
              </div>
              <EmojiPicker
                onEmojiClick={(emoji: EmojiClickData) =>
                  setDescription((prev) => prev + emoji.emoji)
                }
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <p onClick={prevStep} className="px-4 py-2 flex gap-2 justify-center items-center text-gray-400 cursor-pointer">
              <IoMdArrowBack /> Back
            </p>
            <p
              onClick={nextStep}
              className={`px-4 py-2 ${description ? "text-blue-500" : "text-gray-400"} cursor-pointer flex items-center justify-center gap-2`}
            >
              Next
              <IoMdArrowForward />
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Edit Filters */}
      {step === 3 && (
        <div className="text-center">
          <h2 className="text-lg font-semibold">Edit Image</h2>
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="mt-3 w-full h-40 object-cover rounded"
            />
          )}
          <p className="text-sm text-gray-500 mt-2">[Filters Section Coming Soon]</p>
          <div className="flex justify-between mt-4">
            <p onClick={prevStep} className="px-4 py-2 text-gray-400 cursor-pointer  flex items-center justify-center gap-2">
              <IoMdArrowBack />Back
            </p>
            <p onClick={resetModal} className="px-4 py-2  text-green-500 cursor-pointer  flex items-center justify-center gap-2">
              <MdDone />
              Done
            </p>
          </div>
        </div>
      )}

      {/* Discard Button */}
      <button onClick={resetModal} className="mt-4 w-full px-4 py-2 hover:bg-red-500 bg-red-400 text-gray-100 ">
        Discard
      </button>
    </div>
  );
};

export default CreateModal;
