import './App.css';
import Footer from './components/pagrindiniai/Footeris';
import Headeris from './components/pagrindiniai/Headeris';
import Home from './components/lapai/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/lapai/Login';
import Register from './components/lapai/Register';
import Question from './components/lapai/Question';
import QuestionEdit from './components/lapai/QuestionEdit';
import QuestionAdd from './components/lapai/QuestionAdd';

const App = () => {
  return (
    <>
    <Headeris />

    <Routes>
      <Route index element={<Home />}/>
      <Route path=':id' element={<Question />}/>
      <Route path=':id/edit' element={<QuestionEdit />}/>
      <Route path='/add-question' element={<QuestionAdd />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />} />
    </Routes>

    <Footer />
    </>
  );
}
 
export default App;