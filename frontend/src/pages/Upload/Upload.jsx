import "./Upload.css";

function Upload() {
  return (
    <div className="upload-container">
      <div className="upload-card">

        <h1>Upload Video</h1>

        <form>

          <input
            type="text"
            placeholder="Video Title"
          />

          <textarea
            placeholder="Video Description"
            rows="5"
          ></textarea>

          <input
            type="file"
          />

          <button type="submit">
            Upload
          </button>

        </form>

      </div>
    </div>
  );
}

export default Upload;