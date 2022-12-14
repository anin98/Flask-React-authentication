import Register from "./Register";
import Login from "./Login";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Default from './Default';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Default/>}/>
        {/*protected routes */}

        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;