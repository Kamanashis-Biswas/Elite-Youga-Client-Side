import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Routine from "../Routine/Routine";
import PopularInstructors from "../../../components/Popular Instructors/PopularInstructors";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import ExploreMore from "../ExploreMore/ExploreMore";
import ElevatePractices from "../ElevatePractices/ElevatePractices";
import Syllabus from "../Syllabus/Syllabus";



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
            <ExploreMore></ExploreMore>
            <ElevatePractices></ElevatePractices>
            <Syllabus></Syllabus>
            <AnimatedText></AnimatedText>
        </div>
    );
};

export default Home;