import "./App.css";
import Banner from "./component/Banner";
import { useState } from "react";
import React from "react";
import loginImg from "./img/kitchen.png";

// import {Redirect} from 'react-router-dom';

function App({ history }) {
  //   const fname=sakshi;
  // const lname =jain;
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");

  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const submit = () => {
    setFname(name);
    setName("");
  };

  return (
    <div className="App ">
      <div>
        {fname == 0 ? (
          <div className="inputField d-flex align-items-center">
            <div className="box  d-flex justify-content-center align-items-center mx-auto">
              <div className="box-img">
                <img className="w-100" src={loginImg} alt="img" />
              </div>
              <div className="box-input py-3 d-flex justify-content-center align-items-center gap-3 ">
                <h5 className="text-black text-capitalize mb-0 ">
                  enter name here
                </h5>
                <input
                  type="text"
                  onChange={inputEvent}
                  value={name}
                  className="input-box border-radius-8 px-2"
                />
                <button
                  className="submit-btn w-75 border-radius-8"
                  onClick={submit}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Banner value={fname} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
