import { Box, Typography } from "@mui/material";
import Footer from "../components/common/footer.tsx";
import Navbar from "../components/common/navbar.tsx";
import CustomBox from "../components/common/customBox.tsx";
import "../css/home.css";
import CarouselHome from "../components/home/carouselHome.tsx";
import Card from "../components/common/card.tsx";

function Home() {
    // 14 Card bileşeni oluşturmak için bir diziyi döngüyle oluşturuyoruz
    const renderCards = () =>
        Array.from({ length: 10 }, (_, index) => <Card key={index} />);

    return (
        <div>
            <Navbar />
            <CarouselHome />
            <CustomBox />
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "Arial",
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#ea2d00",
                    padding: 2,
                }}
            >
                ÖNERİLEN İŞLETMELER
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2, // Çocuk bileşenler arasında boşluk
                    margin: 4,
                }}
            >
                {renderCards()}
            </Box>
            <CustomBox />
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "Arial",
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#ea2d00",
                    padding: 2,
                }}
            >
                Bu Ay En Çok Ziyaret Edilen İşletmeler
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2, // Çocuk bileşenler arasında boşluk
                    margin: 4,
                }}
            >
                {renderCards()}
            </Box>
            <Footer />
        </div>
    );
}

export default Home;
