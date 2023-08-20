import Topbar from '../src/components/topbar/Topbar';
import Homepage from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Register from '../src/pages/register/Register';
import Settings from '../src/pages/settings/Settings';
import Single from '../src/pages/single/Single';
import Write from '../src/pages/write/Write';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
     <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/register"
          element={currentUser ? <Homepage /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Homepage /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Login />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;

