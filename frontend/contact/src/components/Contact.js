/* eslint-disable import/first */
import React, { useState } from "react";
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

import "../app.css";

const initialState ={

   Prenon :'', Non:'',Email:'',Phone:'',Message:''

}
function Contact(){
  const [contact, setContact]= useState(initialState)
  const [message, setMessage]= useState("")

  const handleChangeInput = e => {
  const {name, value} = e.target
  // console.log(name , " " , value)
      setContact({...contact, [name]: value})
  }

const handelSubmit = async(e)=>{
     e.preventDefault();
     const res = await axios.post('http://localhost:5000/api/contact/sendmessage',contact);
     if(res)  setMessage(res.data.message)
}
// console.log(message)         
  return ( 
   <>
 
    <form className="form mx-auto col-sm-5" onSubmit={handelSubmit}>
      <h1>Contact Us  🚀 </h1>

      {
       message && <p>{message}</p>
     }

      <label>Prenon</label>
      <input placeholder="Prenon" 
      //  value={contact.Prenon}
        name="Prenon"
        onChange={handleChangeInput}/>
      <label>Non</label>
      <input
        placeholder="Non"
        //value={contact.Non}
        name="Non"
        onChange={handleChangeInput}
      />
      <label>Email</label>
      <input
        placeholder="Email"
        name="Email"
       // value={contact.Email}
        onChange={handleChangeInput}
      />
       <label>Phone</label>
      <input placeholder="Phone" 
      name="Phone"
      // value={contact.Phone}
        onChange={handleChangeInput}/>

      <label>Message</label>
      <textarea
        placeholder="Message" 
        name="Message"
       // value={contact.Message}
        onChange={handleChangeInput}
      ></textarea>
      <button
        type="submit"
    // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
   </>
  );
};

export default Contact;