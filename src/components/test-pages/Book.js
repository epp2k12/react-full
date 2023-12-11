import { useLocation, useOutletContext, useParams } from "react-router-dom";


const Book = () => {

    const location = useLocation();

    const { id, age } = useParams();
    const obj = useOutletContext();

    // return <h1>Book {id} - Published  {age} year{ age>1? 's' : '' } ago.</h1>;
    return <h1>Book {id} - Published  {age} year{ age>1? 's' : '' } ago. -OutletContext : ( {obj.hello} ) with State : {location.state} </h1>;
}
 
export default Book;