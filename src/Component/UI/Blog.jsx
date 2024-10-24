import { useState } from "react";
import blogData from "../../assests/data/blogdata";

const Testimonial = () => {
    const [data, setData] = useState(blogData);
    const [showMore,setShowMore] = useState(null);
    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div className="testimonial container mx-auto mb-20">
            <div className="sub-heading text-center text-yellow-300 font-bold">
                <h6 className="font-bold">Explore Our Blogs</h6>
            </div>
            <div className="main-heading text-center text-primary font-bold mb-10">
                <h2 className="font-bold">Latest Blog</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.map((item, index) => (
                    <div key={item.id} className="shadow p-2">
                        <div className="img">
                            <img src={item.imgUrl} alt={item.title} />
                        </div>
                        <div className="blog-detail">
                            <h6 className="font-bold text-primary pt-2">{item.title}</h6>
                            <p className={` h-5 text-xs ${showMore?"":"overflow-y-hidden"}`}>{item.description}</p>
                            <p className={` h-5 text-xs ${showMore?"":"overflow-y-hidden"}`}>{item.quote}</p>
                            <button className="text-yellow-500 p-1 rounded-md" onClick={handleShowMore}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
