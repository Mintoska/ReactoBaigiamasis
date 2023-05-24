import styled from "styled-components";
import QuestionsContext from "../../contexts/QuestionsContext";
import { useContext } from "react";


const Paieska = styled.div`
    height: 2rem;
        > input {
            background: #cbf6f6 no-repeat url('data:image/svg+xml,<svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><g class="search-path" fill="white" stroke="%23848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>');
            height: 30px;
            width: 30px;
            margin: 0;
            padding: 0;
            border-radius: 5px;
        }
        input:focus {
            width:300px;
            padding-left:50px;
        }
        > button {
            margin: 0;
            padding: 0;
            height: 35px;
            border-radius: 50%;
            background-color: white;
            padding: 3px 10px;
        }
    }
`;



const Paieskos = () => {
    const { setKeyword } = useContext(QuestionsContext);
    
    function handleSearch(e) {
        setKeyword(e.target.value)
    }

    return (  
    <Paieska>
        <input type="text" onKeyUp={handleSearch} />
    </Paieska>
    );
}
 
export default Paieskos;