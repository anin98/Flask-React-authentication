import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as api from "./Api";
import Blockchain from './blockchain';
const authenticate = new Blockchain();

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [nonce, setNonce] = useState("");
  const [hash, setHash] = useState("");
  
  //  const data = async () => {
  //   const id = user.id;
  //   const name = user.name;

  //  const newdata = authenticate.createNewData(id,name,user,pwd);
  // //  }
  useEffect(() => {
    //the focus is on the input , using reference to store the component in the dependency
  }, []);

  const handleSubmit = async () => {
    const res = await api.login({ email: user, password: pwd });

// setNonce = await nonce;
// setHash = await hash;
    // var id = res.id;
    // var name = user.name
    // console.log(res.id);
    // console.log(res.name);
    // console.log(res.email);
    // console.log(pwd);
    // const data = authenticate.createNewData(24,'Anindita','anin@gmail.com','pass')
    // console.log(data)

 // createnewblock(id,name,email,password)
 


  };
  
  return (
    <section>
      <h1>Sign In</h1>
      <label htmlFor="email"> Email:</label>
      <input
        type="text"
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)} // set the anon function to userstate
        value={user}
        required //clear the form upon submission
      />
      
      <label htmlFor="password"> Password:</label>
      <input
        type="password"
        onChange={(e) => setPwd(e.target.value)}  // set the anon function to userstate
        value={pwd}w 
        required //clear the form upon submission
        
      />
      
      <button class="button"  onClick={handleSubmit}> Sign In </button> <br></br>
      <p>
        Need an Account? <br />
        <span className="line">
          {/*putting a router link*/}
          <a href="/register">Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
//fetch prev hash using user id
//rest same as register, just prevhash won't be 0.
