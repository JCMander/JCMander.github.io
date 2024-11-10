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
            padding: '20px 0px'
        }}>
            <p>
                Email: tamarabakesandtreats@gmail.com
            </p>
            <p>
                Phone: +447949156913
            </p>
        </div>
    )
};