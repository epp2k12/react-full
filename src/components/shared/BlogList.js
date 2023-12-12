import { Link } from "react-router-dom";

// const BlogList = (props) => {
const BlogList = ({ blogs, title }) => {

    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2> {title} </h2>
            { 
                blogs.map((data) =>
                (
                    <div className="blog-preview" key={data.id}>
                        <Link to={`/blogs/${data.id}`}>
                        <h2>{data.title}</h2>
                        <p>Written by: {data.author}</p>
                        </Link>
                        {/* <button onClick={()=>{handleDelete(data.id)}}>Delete Blog</button> */}
                    </div>
                )
                )
            }
        </div>

    );
}

export default BlogList;

