import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Routine from "../Routine/Routine";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EliteSports | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Routine></Routine>
        </div>
    );
};

export default Home;