import { useState } from "react";
import { createContext, useEffect, useReducer } from "react";

const QuestionsContext = createContext()

const questionsActionTypes = {
    load: 'load_all_questions',
    add: 'add_new_question',
    edit: 'edit_question',
    delete: 'delete_question',
    like: 'like_question'
}

const reducer = (state, action) =>{
    switch(action.type){
        case questionsActionTypes.load:
            return action.data

        case questionsActionTypes.edit:
            fetch(`http://localhost:8080/questions/${action.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    tema:action.data.tema,
                    aprasymas:action.data.aprasymas,
                    editDate:action.data.editDate,
                    likes:action.data.likes,
                    dislikes:action.data.dislikes,
                    postai:action.data.postai
                })
            }) 

            return state.map(question =>{
                if(question.id === action.id){
                    return {...question, 
                        tema:action.data.tema,
                        aprasymas:action.data.aprasymas,
                        editDate:action.data.editDate,
                        likes:action.data.likes,
                        dislikes:action.data.dislikes,
                        postai:action.data.postai
                    }
                } else {
                    return question
                }
            })
            
        case questionsActionTypes.add:
            fetch(`http://localhost:8080/questions/`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]

        case questionsActionTypes.delete:
            fetch(`http://localhost:8080/questions/${action.id}`, { method: 'DELETE' })
            return state.filter(question => question.id !== action.id)


        default:
            return state
    }
}

const QuestionsProvider = ({ children }) => {

    const [questions, setQuestions] = useReducer(reducer, [])
    const [keyword, setKeyword] = useState("")
    
    
    console.log(keyword)

    useEffect(()=>{
        console.log('fetch')
        fetch('http://localhost:8080/questions')
            .then(res => res.json())
            .then(data => setQuestions({
                type: questionsActionTypes.load,
                data: data.filter( q => q.tema.toLowerCase().includes(keyword.toLowerCase()) 
                    || q.aprasymas.toLowerCase().includes(keyword.toLowerCase()))
            }))
    },[keyword])

    return ( 
        <QuestionsContext.Provider
        value={{
            questions,
            setQuestions,
            questionsActionTypes,
            setKeyword
        }}
        >
            { children }
        </QuestionsContext.Provider>

    );
}

export { QuestionsProvider };
export default QuestionsContext;