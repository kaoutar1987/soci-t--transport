import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


const Home =() =>{
  const initialData = {
    Email:'',
    date:'',
  }
  const [contact,setContact]= useState([])
  const [formData,setData] = useState(initialData)
  // const [date,setDate] = useState('')
  const getContact =async ()=>{
    const {data} = await axios.get('http://localhost:5000/api/contact/allMssage');
    if(data) setContact(data)
    console.log(data)
  }
  useEffect(()=>{
    getContact()
  },[])
 

  const handleClick =async (e)=>{
   e.preventDefault();
   try {
      const {data} = await axios.post('http://localhost:5000/api/contact/search',formData)
    if(data) setContact(data)
   } catch (error) {
     if(error) console.log(error.response);
   }
  }
  const handelChange = (e)=>{
    const {name,value} = e.target
    setData({...formData,[name]:value})
  }
  console.log(formData.date);
  return (
    <div className="container">
      {/* <Link to="/add" >
        add
      </Link> */}
       <div className="row">
       <form class="col-sm-5 mt-4 mb-5">
        <div className="form-group">
          <label for="validationCustom01">Email</label>
          <input
            onChange={handelChange}
            name="Email"
            type="Email"
            className="form-control mb-2"
            id="validationCustom01"
            placeholder="Email"
            required
          />
          <input
            onChange={handelChange}
            name="date"
            type="date"
            className="form-control mb-2"
            id="validationCustom01"
            placeholder="Date"
            required
          />
         <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb 5"
        >
          Search
        </button>
        </div>
        </form>
       <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">nom</th>
            <th scope="col">prenom</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">message</th>
            <th scope="col">date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
         {contact &&
            contact.map((element,index)=>(
              <tr>
                <th scope="row">{index+1}</th>
                <td>{element.Non}</td>
                <td>{element.Prenon}</td>
                <td>{element.Email}</td>
                <td>{element.Phone}</td>
                <td>{element.Message}</td>
                <td>{element.date}</td>
                <td>
                  <Link to={`/Reply/${element._id}`}>
                    <button  className="btn btn-primary"> Repondre</button>
                  </Link>
                </td>
               
          </tr>
           ))
         }
        </tbody>
      </table>
       </div>
    </div>
  )
}

export default Home