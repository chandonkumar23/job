/* eslint-disable react/prop-types */


const ListCart = ({adata}) => {
    const {Type,Descriptions,Priority,DeatLine} = adata || {};
    return (
        <div>
            <div className="border-2  p-4 w-[200px] rounded-xl shadow-2xl bg-black text-white">
                <h2 className="text-xl">{Type}</h2>
                <h2>{Priority}</h2>
                <p>{Descriptions}</p>
                <p>{DeatLine}</p>
            </div>
        </div>
    );
};

export default ListCart;