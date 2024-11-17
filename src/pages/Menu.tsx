import { BrowserView, MobileView } from "react-device-detect";
import menu from "../assets/Menu.png";

export const Menu = () => {
    return (
        <div>
            <MobileView>
                <img src={menu} alt="Menu" width={'95%'} />
            </MobileView>
            <BrowserView>
                <img src={menu} alt="Menu" width={'30%'} />
            </BrowserView>
        </div>
    )
};