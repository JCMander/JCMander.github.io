import { Link } from "react-router-dom";
import { theme } from "../theme";

interface Props {
    url: string;
    text: string;
}

export const PageLink = ({ url, text }: Props) => {
    return (
        <div
            style={{
                marginTop: 20
            }}
        >
            <Link to={`/${url}`} style={{ color: theme.primaryColor, fontSize: 24, textDecoration: 'none' }}>
                {text}
            </Link>
        </div>
    )
};