import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    // const data = useContext();
    // console.log(data);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="p-4">
    <h1 className="text-xl mb-4 font-semibold">All Category</h1>
    <div className="flex flex-col gap-2">
        {
            categories.map(category => <NavLink to={`/category/${category.id}`} className="py-3 w-full text-center border-2 text-[#9F9F9F]" key={category.id}>{category.name}</NavLink>)
        }
    </div>
</div>

    );
};

export default LeftSideNav;