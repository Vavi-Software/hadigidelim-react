import Navbar from "../components/common/navbar.tsx";
import Footer from "../components/common/footer.tsx";
import Carousel from "../components/common/carousel.tsx";
import PageComponent from "../components/common/DefaultPageDesign.tsx";

function Cafe() {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel height="25vh"/>
            <PageComponent/>
            <Footer></Footer>
        </div>
    );
}

export default Cafe;
