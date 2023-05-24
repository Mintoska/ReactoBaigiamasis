import styled from "styled-components";
import Mainas from "../pagrindiniai/Mainas";

const Titulinis = styled.main`
    min-height: 90%;
    padding: 15px;
    gap: 15px;
`;

const Home = () => {
    return ( 
        <Titulinis>
            <Mainas />
        </Titulinis>
    );
}
 
export default Home;