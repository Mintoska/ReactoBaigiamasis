import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import QuestionsContext from "../../contexts/QuestionsContext";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { v4 as generateId } from 'uuid'

const StyledMain = styled.main`
    background: linear-gradient(to right, #445454, #91a5a6);
    min-height: 80vh;
    padding: 2rem;
    display: grid;
    grid-template-columns: 100px 1fr;

    > div:first-child{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        > p {
            margin: 5px;
            font-size: 1.5rem;
        }
    }
    
`;

const StyledDiv = styled.div`
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        > p {
            margin: 0;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: 5px;
        }
        > div {
            display: flex;
            align-items: center;
            gap: 1rem;
                > h1 {
                    margin: 0;
                }
                > a {
                    color: var(--links);
                    > svg{
                        font-size: 2rem;
                    }
                }
                > svg {
                    color: var(--links);
                    font-size: 2rem;
                }
        }
        svg:hover {
            cursor: pointer;
        }
    }
`;

const Question = () => {

    const { currentUser }  = useContext(UsersContext);
    const { questionsActionTypes, setQuestions } = useContext(QuestionsContext);
    const { id } = useParams();
    const [question, setQuestion] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:8080/questions/${id}`)
            .then(res => res.json())
            .then(data => setQuestion(data))
    },[question])

    const deleteQuestion = () => {
        setQuestions({
            type: questionsActionTypes.delete,
            id: question.id
        })
        navigate('/')
    }

    function Postai() {
        return question.postai?.map( post => {
            return <p key={post.id}><b>{post.user}</b>: {post.text}</p>
        })
    }

    function handleInput(e) {
        if (e.keyCode === 13) {
            console.log("komentaras")
            const naujas = { id: generateId(), user: currentUser.userName, text: e.target.value}
            const postai = [ ...question.postai, naujas ]
            console.log(postai)
            setQuestions({
                type: questionsActionTypes.edit,
                id: question.id,
                data: {...question, postai: postai}
            })
            e.target.value = ""
        }
    }

    return ( 
        <StyledMain>
            <div>
            </div>
            <StyledDiv>
                <div>
                    <div>
                        <h1>{question.tema}</h1>
                        {   
                            currentUser && currentUser.id === question.userId?
                            <>
                                <Link to={`/${question.id}/edit`}>
                                    <BorderColorIcon />
                                </Link>
                                <HighlightOffIcon 
                                    className="deleteIcon"
                                    onClick={()=>{deleteQuestion()}}
                                />
                            </> :
                            <span className="ivisible"></span>
                        }
                    </div>
                </div>
                <h2>{question.aprasymas}</h2>
                <Postai/>
                <input type="text" onKeyUp={handleInput} />
            </StyledDiv>

        </StyledMain>
    );
}
 
export default Question;