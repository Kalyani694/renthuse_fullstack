import "./register.css";
import { Link} from "react-router-dom";


function Register() {

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form >
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
           <span></span>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
     
    </div>
  );
}

export default Register;