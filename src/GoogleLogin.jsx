import { useContext } from "react";
import { AuthContext } from "./AuthProvter";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation
   
    const from = location.state?.from?.pathname || '/dasboard';

    const handleGoolein = (google) =>{
        google()  
        // eslint-disable-next-line no-unused-vars
        .then(result =>{
            if(google){
                Swal("Done","","success");
            }    
           
        })
       
    };
    navigate(from,{replace:true});
    return (
        <div>
             <button onClick={()=>handleGoolein(googleSignIn)} className="btn  bg-slate-300 opacity-50 outline-1 flex justify-center mx-auto"> <FcGoogle className="text-xl"></FcGoogle> Login with Google</button>
        </div>
    );
};

export default GoogleLogin;