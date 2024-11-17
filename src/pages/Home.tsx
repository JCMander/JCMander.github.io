import { BrowserView, MobileView } from "react-device-detect";
import { ProductCarousel } from "../components/ProductCarousel";
import logoName from "../assets/logo-name.png";
import logo from "../assets/logo.jpeg";
import menu from "../assets/menu.png";
import { Col, Row } from "react-bootstrap";

const Home = () => {
    return (
        <div style={{
            display: 'block',
            margin: 'auto',
            width: '100%',
            paddingTop: '2%',
            textAlign: 'center'
        }}>
            <MobileView>
                <img src={logoName} alt="logo" width={'80%'} style={{ marginBottom: 10 }} />
                <ProductCarousel width={'90%'} />
            </MobileView>
            <BrowserView>
                <div style={{ width: '95%' }}>
                    <img src={logoName} alt="logo" width={'20%'} />
                    <Row>
                        <Col>
                            <img src={menu} alt="menu" width={'40%'} style={{ marginBottom: 10 }} />
                        </Col>
                        <Col>
                            <ProductCarousel width={600} />
                        </Col>
                    </Row>
                </div>
            </BrowserView>
        </div>
    )
}

export default Home;