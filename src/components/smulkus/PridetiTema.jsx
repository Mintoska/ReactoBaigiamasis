import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledDiv = styled.div`
    a > button {
        height: 35px;
        border: none;
        background-color: #cbf6f6;
        border-radius: 5px;
        padding: 5px 20px;
    }
    a > button:hover {
        cursor: pointer;
    }
`;

const PeidetiTema
 = () => {

    const { currentUser } = useContext(UsersContext);

    return (  
        <StyledDiv>
            {
                currentUser &&
                    <Link to={'/add-question'}>
                        <button>Pridėti temą</button>
                    </Link>
            }
        </StyledDiv>
    );
}
 
export default PeidetiTema
;