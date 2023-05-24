import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footeris = styled.footer`
    background: #2c2c2b;
    height: 50px;
    text-align: center;
    position: sticky;
    bottom: 0;
    width:100%;
    line-height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    > ul{
        display: flex;
        list-style-type: none;
    }
`;

const Footer = () => {
    return ( 
        <Footeris>
            <p>© 2023 CodeAcademy final work, MB Inc.</p>
            <ul>
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li></li>
            </ul>
            
            
        </Footeris>
     );
}
 
export default Footer;