import logo from "../assets/logo.jpeg";
import { theme } from "../theme";

const Home =  () => {
    return (
        <div style={{
            display: 'block',
            margin: 'auto',
            width: '100%',
            paddingTop: '2%',
            textAlign: 'center'
        }}>
            <img src={logo} alt="Logo" width={500} />
            <h1 style={{ marginTop: '5%', color: theme.primaryColor }}>Coming soon...</h1>
        </div>
    )
}

export default Home;