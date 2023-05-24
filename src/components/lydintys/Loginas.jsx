import styled from "styled-components";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const Loginas = styled.div`
        a > button {
            height: 40px;
            border-radius: 5px;
            background-color: white;
            padding:5px 20px;
            margin: 0;
      
        }
        a > button:hover {
            cursor: pointer;
        }
        >div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            > img{
                height: 50px;
                width: 50px;
                object-fit: cover;
                border-radius: 25px;
                background-color: #cbf6f6;
            }
            > p{
                font-size: 20px;
            }
            > span:hover{
                cursor: pointer;
            }
        }
`;

const LoginoMygt = () => {

    const { currentUser, setCurrentUser } = useContext(UsersContext);

    return (  
        <Loginas>
            {
                currentUser ?
                    <div>
                        <img src={currentUser.avatarURL} alt={`${currentUser.userName} avatar`} />
                        <p>{currentUser.userName}</p>
                        <span onClick={() => setCurrentUser(null)}><ExitToAppIcon/></span>
                    </div> :
                    <Link to={'/login'}>
                        <button>Prisijungti</button>
                    </Link>
            }
        </Loginas>
    );
}
 
export default LoginoMygt;