import "./App.css";

export default function MyModel({ setOpen }) {
  return (
    <div className="modelBackground">
      <div className="modelContainer">
        <div className="titleCloseBtn">
          <button
            onClick={(e) => {
              setOpen(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          <h1>Are you sure?</h1>
        </div>
        <div className="body">
          <p>This is the content</p>
        </div>
        <div className="footer">
          <button onClick={(e) => setOpen(false)} id="cancelBtn">
            Cancel
          </button>
          <button>OK</button>
        </div>
      </div>
    </div>
  );
}
