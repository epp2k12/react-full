import BlogList from './shared/BlogList';
import useFetch from './shared/useFetch';


const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((data) => data.id !== id);
    //     setBlogs(newBlogs);
    // }


    // [] empty array - only runs on the initial render

    return (

        <div className="home">
            { error && <div>{ error }</div>}
            {(isLoading && !error) && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((data) => data.author === 'mario')} title="Mario's Blogs!" />      */}

            {/* <button onClick={()=> setName('Luigi')}>Change name</button>
            <p>{name}</p> */}

        </div>
    );
}

export default Home;