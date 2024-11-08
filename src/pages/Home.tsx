import logo from "../assets/logo.jpeg";

const Home =  () => {
    return (
        <div style={{
            display: 'block',
            margin: 'auto',
            width: '80%',
            paddingTop: 100,
        }}>
            <img src={logo} alt="Logo" width={'30%'} style={{ left: '35%' }} />
        </div>
    )
}

export default Home;