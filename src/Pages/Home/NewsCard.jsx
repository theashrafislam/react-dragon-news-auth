import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, details, image_url, _id } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-4">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        details.length > 200 ? <span>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-500 font-bold">Read More..</Link></span> : <span>{details}</span>
                    }
                </p>

            </div>
        </div>
    );
};

export default NewsCard;