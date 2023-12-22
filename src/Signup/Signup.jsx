
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvter';
import GoogleLogin from '../GoogleLogin';
import Swal from 'sweetalert2';


const Signup = () => {
 const {createUser,updateUserProfile} = useContext(AuthContext)
 const navigate = useNavigate();
 const location = useLocation

 const from = location.state?.from?.pathname || '/dasboard';
  
  const handleSignup = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name,email,password,photo);
    const userInfo = {name,email,password,photo}
    console.log(userInfo)
    createUser(email,password)
    // eslint-disable-next-line no-unused-vars
    .then(result =>{
      updateUserProfile(name,photo)
      .then(()=>{
        if(createUser){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sign Up!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    })
  }
  navigate(from,{replace:true});
    return (
      <div className="mb-5">
      <div className="hero  bg-base-200">
        <div className="hero-content lg: flex-col lg:flex-row-reverse">
          <div className=" w-full max-w-sm bg-base-100 ">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border-2 p-2"
                  required
                  name="name"
                />
              </div>
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
                  placeholder="Password"
                  className="border-2 p-2"
                  required
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Picture</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo"
                  className="border-2 p-2"
                  required
                  name="photo"
                />
              </div>
              <div className="form-control mt-6">
                <button className="p-2 border-2 bg-[#2EC1DB] text-black shadow-2xl">
                  Sign Up
                </button>
              </div>

              <label className="label">
                
                  Already have an account?{" "}
                  <span className="text-[#205c67] ">
                    <Link to={"/login"}>Login</Link>
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

export default Signup;