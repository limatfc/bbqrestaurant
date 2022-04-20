import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h3>
        Ops, it looks like the page you are trying to access cannot be found.
        Please go back to our home page.
      </h3>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="secundary label"
      >
        Go back to home page
      </button>
    </div>
  );
}
