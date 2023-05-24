import styled from "styled-components";
import PostMain from "../lydintys/PostMain";
import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import UsersContext from "../../contexts/UsersContext";

const StyledSection = styled.section`
    > div:first-child {
        position: relative;
        background: linear-gradient(to right, #445454, #91a5a6);
        height: 500px;
        display: flex;
        justify-content: right;
        align-items: top;
        > img {
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
        }
        >h1{
            font-weight: 500;
            font-size: 50px;
            z-index: 1;
            padding: 0 25px;
            line-height: 75px;
            text-shadow: 3px 2px #445454;
        }}
    > div:last-child{
        display: flex;
        flex-direction: column;
        gap: 15px;
        >h1{
            text-align: center;
            margin-top: 15px;
            color: white;
        }}`;

const HomeMainView = () => {

    const { questions } = useContext(QuestionsContext)
    const { users } = useContext(UsersContext)
    
    return ( 
        <StyledSection>
            <div>
                <h1>Diskusijos apie robotiką <br></br> ir dirbtinį intelektą</h1>
                <img src="https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg" />
            </div>
            <div>
                <h1>Žmonės kalba:</h1>
                {
                    questions.map(question => {
                        const usersPost = users.find(user => user.id === question.userId)
                        return <PostMain 
                            key={question.id}
                            question={question}
                            user={usersPost}
                        />
                    }
                    )
                }
            </div>
        </StyledSection>
    );
}
 
export default HomeMainView;