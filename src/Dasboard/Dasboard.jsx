import { useContext } from "react";
import { Link, Outlet, } from "react-router-dom";
import { AuthContext } from "../AuthProvter";
import Swal from "sweetalert2";
const Dasboard = () => {
 
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
      logOut()
      .then(
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log out",
          showConfirmButton: false,
          timer: 1500
        })
      )
      .catch()
    }
    return (
        <div className="bg-orange-100">
            <div className="grid lg:grid-cols-2  justify-center mx-auto ">
               <div className="">
               <div className=" w-[300px] h-[100vh] bg-orange-200  border-x-2 border-black">
                   <div className=" border-2 border-black rounded-2xl p-2 m-2 text-center">
                   <img className="w-10 rounded-full flex justify-center mx-auto" src={user?.photoURL} alt="" />
                    <h2> Hello! {user?.displayName}</h2>
                    {
                  user ?  <h3> <Link onClick={handleLogOut} className="font-bold">  Logout </Link></h3>
                  : <Link to={"/login"}><></></Link>
                }
                   </div>
                    <div className="mt-10 font-bold text-xl  border-2 border-black rounded-2xl p-2 mb-10 m-2">
                      <Link to={'dasboard/dasinfo'} className="">Dashboard</Link><br />
                    </div>
                    <div className="mt-10 font-bold text-xl  border-2 border-black rounded-2xl p-2 mb-10 m-2">
                      <Link to={'dasboard/create'} className="">Create Task</Link><br />
                    </div>
                    <div className="mt-10 font-bold text-xl  border-2 border-black rounded-2xl p-2 mb-10 m-2">
                      <Link to={'dasboard/dasinfo'} className="">Previous Task</Link><br />
                    </div>
                    <br /><br />
                   <div className="text-black">_____________________________________________</div>
                    <br /><br />
                    <div className="mt-10 font-bold text-xl  border-2 border-black rounded-2xl p-2 mb-10 m-2">
                    <Link to={"/"} className="">Home</Link>      
                 
                    </div>
                </div>
               </div>
             
                <div>                                                                                                      
                    <Outlet></Outlet>
                    
                </div>
            </div>
        </div>
    );
};

export default Dasboard;