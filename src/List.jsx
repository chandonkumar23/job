import { useContext, useEffect, useState } from "react";
import ListCart from "./ListCart";
import { AuthContext } from "./AuthProvter";

const List = () => {
    const {user} = useContext(AuthContext);
    const [data,setdata] = useState([]);
    useEffect(()=>{
        fetch(`https://job-server-iota.vercel.app/all/${user?.email}`)
        .then((res) => res.json())
        .then((data) =>setdata(data))

    },[])
    return (
        <div>
            {
                data?.map((adata) =>(
                    <ListCart key={adata._id} adata={adata}></ListCart>
                ))
            }
        </div>
    );
};

export default List;