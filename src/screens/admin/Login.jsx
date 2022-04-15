import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
import useDataProvider from "../../store/useDataProvider";

export default function Login() {
  const dataContext = useDataProvider();
  const { loginHandler } = dataContext;
  const navigate = useNavigate();

  function onSubmitHandler(event) {
    event.preventDefault();

    loginHandler();
    navigate("/admin-home");
  }

  return (
    <div>
      <img src={logo} alt="a cowboy hat besides the words Flaming Cowboy" />
      <h1>Welcome to the administrative page</h1>
      <form onSubmit={onSubmitHandler}>
        <label>
          E-mail
          <input type="text" />
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
