import { Route, Routes, Navigate } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext";
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import {PostsContextProvider} from "./context/PostsContex";

function App() {
  
  return (
    <>
      <AuthContextProvider> 
        <PostsContextProvider>
        <Routes>
          <Route 
            path="/home"
            element={
              <ProtectedRoute>
               
                  <Home />
                
                
                </ProtectedRoute>
            }
          />

          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
    
        </Routes>
        </PostsContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
