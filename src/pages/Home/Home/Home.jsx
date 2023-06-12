import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Routine from "../Routine/Routine";
import PopularInstructors from "../../../components/Popular Instructors/PopularInstructors";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EliteYoga | Home</title>
            </Helmet>
            <Banner></Banner>
           
                <PopularClasses></PopularClasses>
         
            <Routine></Routine>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;