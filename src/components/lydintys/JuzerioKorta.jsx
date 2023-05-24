import styled from "styled-components";
import Rating from "../smulkus/Rating";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cbf6f6;
    padding: 5px;
    >img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        background: #cbf6f6;
    }
    > h3{
        margin: 0;
    }

`;

const UserCard = ({user}) => {
    return ( 
        <StyledDiv>
            <img src={user.avatarURL} alt="avatar" />
            <h3>{user.userName}</h3>
            <Rating />
        </StyledDiv>
    );
}
 
export default UserCard;