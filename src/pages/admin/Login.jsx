import logo from "../../assets/icons/logo-black.png";
import { useNavigate } from "react-router-dom";
import useDataProvider from "../../store/useDataProvider";
import InputField from "../../components/admin/InputField";
import dataInput from "../../data/input-fields.json";

export default function Login() {
  const dataContext = useDataProvider();
  const { loginHandler } = dataContext;
  const navigate = useNavigate();
  const info = dataInput.admin.login;

  function onLogin(event) {
    event.preventDefault();

    loginHandler();
    navigate("/admin-home");
  }

  return (
    <div className="login-wrapper">
      <img src={logo} alt="a cowboy hat besides the words Flaming Cowboy" />
      <h1>Welcome to the administrative page</h1>
      <form className="form" onSubmit={onLogin}>
        <InputField settings={info.name} />
        <InputField settings={info.email} />
        <button className="primary label" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}
