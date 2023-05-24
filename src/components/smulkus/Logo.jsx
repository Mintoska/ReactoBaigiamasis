import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logotipas = styled.div`
    a {
        display: flex;
        align-items: center;
        > img{
            background: #3d3d33;
            width: 100px;
           
    }
`;

const Logo = () => {
    return ( 
        <Logotipas>
            <Link to={'/'}>
                <img src="https://techiefactory.com/wp-content/uploads/2022/09/TF_Robot_Logo_NEW_8-22-22-removebg-preview.png" />
            </Link>
        </Logotipas>
     );
}
 
export default Logo;