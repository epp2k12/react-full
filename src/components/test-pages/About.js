import { useLocation } from "react-router-dom";

const About = () => {

    const location = useLocation();

    return <h1>About - state: ( {location.state} ) </h1>;
}
 
export default About;