import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvter";


const Create = () => {
  const {user} = useContext(AuthContext)
  const email = user.email
  
    const handleCreate = (event)=>{
        event.preventDefault();
        const form = event.target;
        const Type = form.Type.value;
        const Descriptions = form.Descriptions.value;
        const Priority = form.Priority.value;
        const DeatLine = form.DeatLine.value;
        const allData ={ Type,Descriptions, Priority,DeatLine,email}
        console.log(allData)
        fetch ('http://localhost:5000/all',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Package Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
    }
    return (
        <div className="flex justify-center mx-auto">
             <div className=" w-full max-w-sm  ">
            <form onSubmit={handleCreate} className="card-body">
            <h2 className="text-center text-orange-400 font-bold text-xl">Create Task</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Type"
                  className="border-2 p-2"
                  required
                  name="Type"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Descriptions</span>
                </label>
                <input
                  type="text"
                  placeholder="Descriptions"
                  className="border-2 p-2"
                  required
                  name="Descriptions"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <input
                  type="text"
                  placeholder="Priority"
                  className="border-2 p-2"
                  required
                  name="Priority"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">DeatLine</span>
                </label>
                <input
                  type="date"
                  placeholder="Deat Line"
                  className="border-2 p-2"
                  required
                  name="DeatLine"
                />
              </div>
              <div className="form-control mt-6">
                <button className="p-2 border-2 bg-orange-400 text-black shadow-2xl">
                 Create
                </button>
              </div>      
            </form>
          </div>
        </div>
    );
};

export default Create;