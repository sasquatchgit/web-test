import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing03 from "./components/Landing03/Landing03";
import Signup from "./layouts/FormsLayouts/FormsLayoutsTypeEighth/FormsLayoutsTypeEighth";
import Login from "./layouts/FormsLayouts/FormsLayoutsTypeEleventh/FormsLayoutsTypeEleventh";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing03 />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;

