
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvter';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)
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
        <div>
            <div className="navbar  z-10 mb-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Create Task</a></li>
      <li><a>Task</a></li>
      <li><a>Previous Task</a></li>
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl text-orange-400 font-bold ">
     
      
    
      <li className='hover:text-orange-300'><Link to={'/'}>Home</Link></li>
      <li className='hover:text-orange-300'><Link to={'/login'}>Login</Link></li>
      <li className='hover:text-orange-300'><Link to={'/signup'}>Signup</Link></li>
      {
                  user ? <li> <Link onClick={handleLogOut}>Logout</Link></li>
                  : <Link to={"/login"}><></></Link>
                }
    </ul>
  </div>
  <div className="navbar-end">
<img className='rounded-full w-10' src={user?.photoURL} alt="" />
  </div>
</div>

        </div>
    );
};

export default Navbar;