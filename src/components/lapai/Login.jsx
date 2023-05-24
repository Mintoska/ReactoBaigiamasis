import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledMain = styled.main`

    background: linear-gradient(to right, #445454, #91a5a6);
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        > div{
            display: flex;
            > label {
                border: 2px solid #445454;
                display: block;
                background-color: white;
                color: black;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                line-height: 30px;
                padding-left: 10px;
                width: 100px;
            }
            > input {
                width: 275px;
                height: 35px;
                background-color: white;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                padding: 0px 10px;
            }
        }
        > p {
            color: red;
            font-size: 25px;
        }
        > button {
            width: 100px;
            height:35px;
            background-color: #a1d1d1;
            border-radius: 15px;
            padding: 5px;
        }
        > button:hover {
            cursor: pointer;
        }
    }
    a {
        color: #cbf6f6;
        text-shadow: 2px 2px #445454;
        font-size: 20px;
        text-decoration: none;
    }
`;

const Login = () => {

    const navigate = useNavigate();

    const {users, setCurrentUser } = useContext(UsersContext);

    const [ wrongLogIn, setWrongLogin ] = useState(false)
    
    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const inputHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e =>{
        e.preventDefault();
        const logedUser = users.find((user, id) =>
            user.email === values.email && user.password === values.password
        )
        if(!logedUser){
            setWrongLogin(true);
        } else {
            localStorage.setItem('userId', logedUser.id)
            setCurrentUser(logedUser);
            setWrongLogin(false);
            navigate('/')
        }
    }
    
    return ( 
        <StyledMain>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <label htmlFor="email">El. paštas: </label>
                    <input type="email"
                    name="email" id="email"
                    value={values.email}
                    onChange={e => {
                        inputHandler(e)
                    }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Slaptažodis: </label>
                    <input type="password"
                    name="password" id="password"
                    value={values.password}
                    onChange={e => {
                        inputHandler(e)
                    }}
                    />
                </div>
                <button type="submit">Prisijungti</button>
                {
                    wrongLogIn && <p>Neteisingi duomenys!</p>
                }
            </form>
            <p>Jei dar neturite paskyros, spauskite <Link to={'/register'}> _čia_ </Link> kad prisiregistruoti.</p>
        </StyledMain>
    );
}
 
export default Login;