import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div style={{display: 'flex', flexDirection:"column", height:"100%"}}>
            <NavBar></NavBar>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;