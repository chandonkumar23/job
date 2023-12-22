
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvter";
import GoogleLogin from "../GoogleLogin";

const Login = () => {

 const {SignIN} = useContext(AuthContext);
 const navigate = useNavigate();
 const location = useLocation

 const from = location.state?.from?.pathname || '/dasboard';

    const handleLogin = (event) =>{
  event.preventDefault ();
  const form = event.target;
  const email =form.email.value;
  const password = form.password.value;
  console.log(email ,password);
  SignIN(email,password)
  .then(result =>{
    const user = result.user;
    console.log(user);
    if(SignIN){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login",
        showConfirmButton: false,
        timer: 1500
      });
    }
    navigate(from,{replace:true});
  })
    };
  return (
    <div className="">
      <div className="hero  bg-base-200">
        <div className="hero-content lg:h-[500px] flex-col lg:flex-row-reverse">
          <div className=" w-full max-w-sm bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your E-mail"
                  className="border-2 p-2"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="border-2 p-2"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="p-2 border-2 bg-[#2EC1DB] text-black shadow-2xl">
                  Login
                </button>
              </div>

              <label className="label">
                
                  New menber?{" "}
                  <span className="text-[#205c67]">
                    <Link to={"/signup"}>Sign up</Link>
                  </span>
               
              </label>
         
            </form>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
