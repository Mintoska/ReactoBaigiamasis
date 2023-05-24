import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { v4 as generateId } from 'uuid'
import UsersContext from "../../contexts/UsersContext";
import QuestionsContext from "../../contexts/QuestionsContext";

const Main = styled.main`
    background: linear-gradient(to right, #445454, #91a5a6);
    min-height: 80vh;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > form {
        > button {
            width: 150px;
            height: 35px;
            border-radius: 25px;
            background-color: #cbf6f6;
            padding: 3px 10px;
        }
        > button:hover{
            cursor: pointer;
        }
        > p {
            margin: 0;
            color: orange;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        > div{
            display: flex;
            > label {
                width: 15vh;
                display: block;
                background-color: white;
                color: black;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                line-height: 30px;
                padding-left: 10px;
            }
            > input {
                width: 75vh;
                border: none;
                background-color: white;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                padding: 0px 10px;
            }
            > textarea {
                width: 75vh;
                height: 150px;
                border: none;
                background-color: white;
                padding: 0px 10px;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
    }
`;

const QuestionAdd = () => {

    const {currentUser} = useContext(UsersContext)
    const {setQuestions, questionsActionTypes} = useContext(QuestionsContext)
    const navigate = useNavigate();

    !currentUser && navigate('/')

    const questionSchema = Yup.object({
        tema: Yup.string()
            .required('Laukas negali likti neužpildytas'),
        aprasymas: Yup.string()
            .required('Laukas negali likti neužpildytas'),
    })
    
    const values = {
        tema:'',
        aprasymas:''
    }

    const formik = useFormik({
        initialValues: values,
        validationSchema: questionSchema,
        onSubmit: (values) => {
                const newQuestion = {
                    ...values,
                    userId: currentUser.id,
                    id: generateId()
                }
                setQuestions({
                    type: questionsActionTypes.add,
                    data: newQuestion
                })
                navigate('/')
        }
    })

    return ( 
        <Main>
            <h1>Sukurti naują diskusiją</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="tema">Tema: </label>
                    <input type="text" 
                        name="tema" id="tema"
                        value={formik.values.tema}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.tema && formik.errors.tema &&
                        <p>{formik.errors.tema}</p>
                    }
                <div>
                    <label htmlFor="aprasymas">Įvesti tekstą: </label>
                    <textarea type="text" 
                        name="aprasymas" id="aprasymas"
                        value={formik.values.aprasymas}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.aprasymas && formik.errors.aprasymas &&
                        <p>{formik.errors.aprasymas}</p>
                    }
                <button type="submit">Pateikti</button>
            </form>
        </Main>
    );
}
 
export default QuestionAdd;