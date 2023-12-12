import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./shared/useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate =  useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Blog deleted");
            navigate("/");
        }
           
        );
    }

    return (

        <div className="blog-details">
            {error && <div>{error}</div>}
            {(isLoading && !error) && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div> {blog.body} </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;