import React, { useState, useEffect } from 'react';
import "./Home.css";
import axios from 'axios';

const Home = () => {

  const [cu, setCu] = useState(true);

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: ""
  });
  
  const [users, setUsers] = useState([]);

  const handleUser = (e) => {
    let {name, value} = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  const Create = () => {
    axios.post("http://127.0.0.1:4000/", user)
    .then(res => {
      // console.log(res);
      alert(res.data);

      setUser({
        id: "",
        name: "",
        email: "",
        password: ""
      });

      setCu(true);

      Read();
    }, rej => {
      console.log(rej);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/")
    .then(res => {
      setUsers(res.data);
    }, rej => {
      console.log(rej);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const Read = () => {
    axios.get("http://127.0.0.1:4000/")
    .then(res => {
      setUsers(res.data);
    }, rej => {
      console.log(rej);
    })
    .catch(err => {
      console.log(err);
    });
  };

  const Update = (u) => {
    let { _id, name, email, password } = u;

    setUser({
      id: _id,
      name: name,
      email: email,
      password: password
    });

    setCu(false);
  };

  const Delete = (id) => {
    axios.delete(`http://127.0.0.1:4000/${id}`)
    .then(res => {
      // console.log(res);
      alert(res.data);

      Read();
    }, rej => {
      console.log(rej);
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <>
    <section id='home'>
      <form id='home-form'>
        <input type="text" name="id" id="id" value={user.id} onChange={handleUser} style={{display: 'none'}}/>
        <input type="text" name="name" id="name" value={user.name} onChange={handleUser} placeholder='Enter Your Name...' />
        {
          cu 
          ?
          <input type="email" name="email" id="email" value={user.email} onChange={handleUser} placeholder='Enter Your Email...' />
          :
          <input type="email" name="email" id="email" value={user.email} onChange={handleUser} readOnly placeholder='Enter Your Email...' />
        }
        <input type="password" name="password" id="password" value={user.password} onChange={handleUser} autoComplete='off' placeholder='Enter Your Password...' />

        <button type="button" onClick={Create}>{ cu ? "Create" : "Update" }</button>
      </form>

      <table id='home-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
              let { _id, name, email, password } = user;

              return (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td><button type="button" onClick={() => Update(user)}>Update</button></td>
                  <td><button type="button" onClick={() => Delete(_id)}>Delete</button></td>
                </tr>
              );
            })
          }
        </tbody>
        <tfoot></tfoot>
      </table>
    </section>
    </>
  )
}

export default Home
