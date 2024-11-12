import { BrowserView, isMobile, MobileView } from "react-device-detect";
import logo from "../assets/logo.jpeg";
import { theme } from "../theme";

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
                <img src={logo} alt="Logo" width={'100%'} />
            </MobileView>
            <BrowserView>
                <img src={logo} alt="Logo" width={500} />
            </BrowserView>
            <h1 style={{ marginTop: '5%', color: theme.primaryColor }}>Coming soon...</h1>
        </div>
    )
}

export default Home;