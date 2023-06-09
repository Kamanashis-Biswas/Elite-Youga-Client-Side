import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/Home/Banner/img1.jpg'
import img2 from '../../../assets/Home/Banner/img2.jpg'
import img3 from '../../../assets/Home/Banner/img3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel className="mt-4">
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;