import React, { useState } from 'react';
import "./Home.css";
import axios from 'axios';

const Home = () => {

  let [create, setCreate] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [users, setUsers] = useState([]);

  const HandleCreate = (e) => {
    const { name, value } = e.target;
    
    setCreate({
      ...create,
      [name]: value
    })
  }

  const Create = () => {
    axios.post("http://127.0.0.1:4000", create)
    .then(res => {
      // console.log(res.data.message);
      window.alert(res.data.message);
      setCreate({
        name: "",
        email: "",
        password: ""
      });
      Read();
    })
    .catch(err => {
      console.log(err);
    })
  }

  const Read = () => {
    axios.get("http://127.0.0.1:4000")
    .then(res => {
      // console.log(res.data.data);
      setUsers(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const Update = (id) => {
    axios.put(`http://127.0.0.1:4000/${id}`)
    .then(res => {
      // console.log("Update", res.data.data.name);
      setCreate({
        name: res.data.data.name,
        email: res.data.data.email,
        password: res.data.data.password
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  const Delete = (id) => {
    axios.delete(`http://127.0.0.1:4000/${id}`)
    .then(res => {
      // console.log("Delete", res.data.message);
      window.alert(res.data.message);
      Read();
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div id="home">
        <form method="post" id='h-form'>
        <button type='button' onClick={Read}>Read</button>
          <input type="text" name="name" id="name" onChange={HandleCreate} value={create.name} placeholder='Enter your name' />
          <input type="email" name="email" id="email" onChange={HandleCreate} value={create.email} placeholder='Enter your email' />
          <input type="password" name="password" id="password" onChange={HandleCreate} value={create.password} autoComplete='off' placeholder='Enter your password' />
          <button type='button' onClick={Create}>Create</button>
        </form>

        <table className='h-table'>
          <thead>
            {/* <tr>
              <th>id</th>
              <th>name</th>
              <th>emal</th>
              <th>password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr> */}
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><button type='button' onClick={() => Update(user._id)}>Edit</button></td>
                    <td><button type='button' onClick={() => Delete(user._id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  )
}

export default Home;