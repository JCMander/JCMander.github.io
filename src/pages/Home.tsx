import { BrowserView, isMobile, MobileView } from "react-device-detect";
import logo from "../assets/logo.jpeg";
import { PageLink } from "../components/PageLink";

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
            <PageLink text="Menu" url="menu" />
            {/* <PageLink text="Place order" url="order" /> */}
        </div>
    )
}

export default Home;