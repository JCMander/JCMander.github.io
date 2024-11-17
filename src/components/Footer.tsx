import { theme } from "../theme";

export const Footer = () => {
    return (
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: theme.primaryColor,
            textAlign: 'center',
            padding: '10px 0px'
        }}>
            <div>
                Email: tamarabakesandtreats@gmail.com
                <br/>
                Phone: +447949156913
            </div>
        </div>
    )
};