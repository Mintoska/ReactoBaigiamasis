import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logotipas = styled.div`
    a {
        display: flex;
        align-items: center;
        > img{
            background: #3d3d33;
            width: 100px;
            // background-image: URL("https://w7.pngwing.com/pngs/683/453/png-transparent-lying-white-and-black-robot-toy-illustration-robotics-4k-resolution-android-robot-robots-robot-hand-humanoid-robot.png")
    }
`;

const Logo = () => {
    return ( 
        <Logotipas>
            <Link to={'/'}>
                <img src="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be11.png" />
            </Link>
        </Logotipas>
     );
}
 
export default Logo;