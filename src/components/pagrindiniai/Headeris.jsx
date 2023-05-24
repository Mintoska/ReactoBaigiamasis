import styled from "styled-components";
import Logo from "../smulkus/Logo";
import Paieskos from "../lydintys/Paieska";
import LoginoMygt from "../lydintys/Loginas";
import PridetiTema from "../smulkus/PridetiTema";

const Header = styled.header`
    background: #3d3d33;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    align-items: center;
    > :nth-child(2) {
        display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    }
    > :first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
`;

const Headeris = () => {
    return ( 
        <Header>
            <div>
                <Logo />
                <Paieskos />
            </div>
            <div>
                <PridetiTema />
                <LoginoMygt />
            </div>
        </Header>
    );
}
 
export default Headeris;