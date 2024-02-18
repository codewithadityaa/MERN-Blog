import Home from "./pages/home/Home";
import TopBar from "./components/top-bar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/logins/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
 

function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
          
        
        <Route path="/register" element={currentUser ? <Home /> : <Register />}/>
        <Route path="/login" element={currentUser ? <Home /> : <Login />}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/settings"element={currentUser ? <Setting /> : <Login />}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </Router>
  );
}
export default App;
