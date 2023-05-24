import styled from "styled-components";
import HomeMainView from "../pagrindiniai/HomeMainView";

const Titulinis = styled.main`
    min-height: 90%;
    padding: 15px;
    gap: 15px;
`;

const Home = () => {
    return ( 
        <Titulinis>
            <HomeMainView />
        </Titulinis>
    );
}
 
export default Home;