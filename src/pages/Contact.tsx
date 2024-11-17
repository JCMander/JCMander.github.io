import { BrowserView, MobileView } from "react-device-detect"
import logo from "../assets/logo.jpeg";
import { theme } from "../theme";

export const Contact = () => {
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
            <div style={{ marginTop: 40, fontSize: 26, color: theme.primaryColor }}>
                Email: tamarabakesandtreats@gmail.com
                <br/>
                Phone: +447949156913
            </div>
        </div>
    )
}