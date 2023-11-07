import './Footer.css'
import NormalFooter from "./Components/NormalFooter";
import SimpleFooter from "./Components/SimpleFooter";


const Footer = ({FtLoaded}) => {
    return(
        <div>
            {FtLoaded ?
            <SimpleFooter/>
            :
            <NormalFooter/>
            }
        </div>
    );
}
 
export default Footer;