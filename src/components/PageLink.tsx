import { Link } from "react-router-dom";
import { theme } from "../theme";
import { CSSProperties } from "react";

interface Props {
    url: string;
    text: string;
    style?: CSSProperties;
    linkStyle?: CSSProperties;
}

export const PageLink = ({ url, text, style = { marginTop: 20 }, linkStyle = { color: theme.primaryColor, fontSize: 24, textDecoration: 'none' } }: Props) => {
    return (
        <div style={style}>
            <Link to={`/${url}`} style={linkStyle}>
                {text}
            </Link>
        </div>
    )
};