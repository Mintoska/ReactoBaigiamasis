import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import UsersContext from "../../contexts/UsersContext";

const StyledMain = styled.main`
    background: linear-gradient(to right, #445454, #91a5a6);
    min-height: 80vh;
    padding: 25px;
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        > div{
            display: flex;
            > label {
                display: block;
                background-color: white;
                color: black;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                line-height: 30px;
                padding-left: 10px;
                width: 125px;
            }
            > textarea {
                width: 600px;
                height: 250px;
                border: none;
                background-color: white;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                padding: 0px 10px;
            }
        }
        > div:first-child > textarea{
            width: 600px;
            height: 100px;
        }
        > div:last-of-type {
            width: 755px;
            background-color: white;
            padding: 5px 0;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            > div {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 10px;
                > input {
                    width: 50px;
                }
                > label {
                    color: black;
                }
            }
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: 5px;
            padding: 3px 10px;
        }
        > botton:hover{
            cursor: pointer;
        }
        > p {
            margin: 0;
            color: red;
        }
    }
`;

const StyledDiv = styled.div`
    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:20px;
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
                    color: #d2541e;
                    > svg{
                        font-size: 2rem;
                    }
                }
                > svg {
                    color: #d2541e;
                    font-size: 2rem;
                }
        }
    }
`;

const QuestionEdit = () => {

    const { id } = useParams();
    const [question, setQuestion] = useState([]);
    const { setQuestions, questionsActionTypes} = useContext(QuestionsContext);
    const { currentUser } = useContext(UsersContext);

    const navigate = useNavigate();
    !currentUser && navigate('/')

    useEffect(() => {
        fetch(`http://localhost:8080/questions/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setQuestion(data);
            formik.setValues({
              ...formik.values,
              tema: data.tema,
              aprasymas: data.aprasymas
            });
          });
      }, []);

    const questionSchema = Yup.object({
        tema: Yup.string()
            .required('Privalomas laukas.'),
    })

    
    const values = {
        tema: question.tema,
        aprasymas: question.aprasymas,
        likes:question.likes,
        dislikes:question.dislikes
    }

    const formik = useFormik({
        validationSchema: questionSchema,
        initialValues: values,
        onSubmit: (values) =>{
            const submitDate = new Date();
            values.editDate = submitDate;
            setQuestions({
                type: questionsActionTypes.edit,
                data:values,
                id:question.id,
            })
            navigate('/')
        }
    })    

    return ( 
        <StyledMain>
            <StyledDiv>
                <div>
                    <div>
                        <h1>{question.tema}</h1>
                    </div>
                </div>
            </StyledDiv>
            <form onSubmit={formik.handleSubmit}>
            <div>
                    <label htmlFor="tema">Koreguoti temą: </label>
                    <textarea
                        name="tema"
                        id="tema"
                        value={formik.values.tema}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="tema">Koreguoti aprašymą: </label>
                    <textarea
                        name="aprasymas"
                        id="aprasymas"
                        value={formik.values.aprasymas}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.tema && formik.errors.tema &&
                        <p>{formik.errors.tema}</p>
                    }
                <button type="submit">Submit</button>
            </form>
        </StyledMain>
    );
}
 
export default QuestionEdit;