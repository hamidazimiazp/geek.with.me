import 'react-toastify/dist/ReactToastify.css';
import "./components/forms/forms.css";
import SignUp from './components/forms/signup';
import SignIn from './components/forms/signin';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/*" element={<Navigate to="/signIn" />} />
      </Routes>
    </div>
  );
}

export default App;
