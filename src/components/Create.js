import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const navigate =  useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title, body, author
        }

        setIsLoading(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {

            setIsLoading(false);
            // history.go(-1);
           navigate("/");

            console.log("New Blog Added.");
        })

       
 
        // console.log("the blog : ", blog)
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>

                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button disabled>Adding Blog ...</button>} 

                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}

            </form>
        </div>
    )
}