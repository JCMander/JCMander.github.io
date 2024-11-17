import { Carousel } from "react-bootstrap"
import cookieCake from "../assets/cookie-cake.jpeg";
import mAndMCookies from "../assets/m-and-m-cookies.jpeg";
import biscoffSlab from "../assets/biscoff-slab.jpeg";
import miniCookiePie from "../assets/twirl-mini-cookie-pie.jpeg";
import marsBarCookiePie from "../assets/marks-bar-cookie-pie.jpeg";
import chocTrayCake from "../assets/choc-tray-cake.jpeg";
import lemonDrizzle from "../assets/lemon-drizzle.png";
import millionaresShortbread from "../assets/millionaires-shortbread.png";
import coconutCake from "../assets/coconut-cake.jpeg";
import whiteChocCake from "../assets/white-chocolate-cake.jpeg";
import { isMobile } from "react-device-detect";

const CarouselItem = (src: string, header: string) => (
    <Carousel.Item style={{ height: isMobile ? 400 : 700 }}>
        <img src={src} alt={header} className="d-block w-100" />
        {!isMobile && (
            <Carousel.Caption>
                <h3>{header}</h3>
            </Carousel.Caption>
        )}
    </Carousel.Item>
);

export const ProductCarousel = ({ width }: { width: string | number }) => {
    return (
        <Carousel data-bs-theme="dark" style={{ width, margin: 'auto' }}>
            {CarouselItem(cookieCake, 'Cookie cake')}
            {CarouselItem(mAndMCookies, 'M&M cookies')}
            {CarouselItem(biscoffSlab, 'Triple layer biscoff cookie slab')}
            {CarouselItem(miniCookiePie, 'Twirl mini cookie pie')}
            {CarouselItem(marsBarCookiePie, 'Mars bar cookie pie')}
            {CarouselItem(chocTrayCake, 'Chocolate tray cake')}
            {CarouselItem(lemonDrizzle, 'Lemon slice')}
            {CarouselItem(millionaresShortbread, 'Millionaires shortbread with a chocolate shortbread base')}
            {CarouselItem(coconutCake, 'Coconut and white chocolate cake')}
            {CarouselItem(whiteChocCake, 'White chocolate cake')}
        </Carousel>
    )
}