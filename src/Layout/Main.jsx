import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div style={{display: 'flex', flexDirection:"column", height:"100%"}}>
            <NavBar></NavBar>
            <Outlet style={{flex: 3}}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;