import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import QuestionsContext from "../../contexts/QuestionsContext";


const StyledDiv = styled.div`
    background: linear-gradient(to right, #445454, #91a5a6);
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 5fr 1.5fr;
    gap: 20px;
    padding: 10px;
    > img {
        height: 100px;
        width: 100px;
        object-fit: cover;
        border-radius: 50px;
    }
    > div:last-child {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        > span {
            padding: 10px;
        }
    }
    > div{
        > div {
           
            display: flex;
            justify-content: space-between;
            align-items: center;
            > p {
                margin: 0;
                border: 1px solid white;
                padding: 5px 10px;
                border-radius: 5px;
            }
        }
        a {
            margin: 0;
            text-decoration: none;
            color: #d2541e;
            > h3{
                margin: 5px 0;
            }
        } 
        > p{
            margin: 5px 0;
            text-align: justify;
        }
       
    }
`;

const PostMain = ({question, user}) => {
    const { questionsActionTypes,setQuestions } = useContext(QuestionsContext);

    const likeQuestion = () => {
        console.log("like")
        setQuestions({
            type: questionsActionTypes.edit,
            id: question.id,
            data: {...question, likes: question.likes + 1}
        })
    }

    const dislikeQuestion = () => {
        console.log("dislike")
        setQuestions({
            type: questionsActionTypes.edit,
            id: question.id,
            data: {...question, dislikes: question.dislikes + 1}
        })
    }

    return ( 
        <StyledDiv>
           
            <img src={user.avatarURL} alt="" />
            <div>
                <Link to={`/${question.id}`}>
                    <h3>
                        {question.tema}
                    </h3>
                </Link>
                <p>
                {question.aprasymas}
                </p>
            </div>
            <div>
                <ThumbUpOffAltIcon onClick={likeQuestion}/>
                <span>{question.likes}</span>
                <ThumbDownOffAltIcon onClick={dislikeQuestion}/>
                <span>{question.dislikes}</span>
            </div>

        </StyledDiv>
    );
}
 
export default PostMain;