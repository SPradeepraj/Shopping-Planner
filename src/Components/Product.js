
import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { useHistory } from 'react-router-dom';
import Check from './Check';
import './Product.css';

const getDatafromLS = () => {
  const data = localStorage.getItem('details');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};


export default function Product() {
  const [details, setdetails] = useState(getDatafromLS());

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
 
  const history = useHistory(''); 

  const handleDetailsSubmit = e => {
    e.preventDefault();

    let detail = {
      name,
      description,
      price,
      
    };
    setdetails([...details, detail]);
    setName('');
    setDescription('');
    setPrice('');
    // history.push('/New')
  };

 

  const deleteDetails = price => {
    const filteredDetails = details.filter((element, index) => {
      return element.price !== price;
    });
    setdetails(filteredDetails);
    
  };

  
  let update = () => {
    console.log('try')
    }

  useEffect(() => {
    localStorage.setItem('detail', JSON.stringify(details));
  }, [details]);

  const add = id => {
    var counter = {};
    if (localStorage.getItem('productId')) {
      counter = JSON.parse(localStorage.getItem('productId'));
    }
    counter[id] = (counter[id] || 0) + 1;
    localStorage.setItem('productId', JSON.stringify(counter));
    setdetails(JSON.parse(localStorage.getItem('productId')));
  };

  const Subtract = id => {
    var counter = {};
    if (localStorage.getItem('productId')) {
      counter = JSON.parse(localStorage.getItem('productId'));
    }
    counter[id] = (counter[id] || 1) - 1;
    localStorage.setItem('productId', JSON.stringify(counter));
    setdetails(JSON.parse(localStorage.getItem('productId')));
  };

  return (
    <div className="container">
      <div>
        <h1>Add Cart</h1>

        <div className="">
          <div className="addproduct ">
            <form autoComplete="off" className="form-group" />
            <label className="h4">Title</label>
            <br />
            <input
              type="text"
              className="names"
              required
              onChange={e => setName(e.target.value)}
              value={name}
            ></input>
            <br /> <br />
            <label className="h4">Quantity</label>
            <br />
            <input
              type="number"
              className="names"
              required
              onChange={e => setDescription(e.target.value)}
              value={description}
            ></input>
            <br /> <br />
            <label className="h4">Price</label>
            <br />
            <input
              type="number"
              className="names"
              required
              onChange={e => setPrice(e.target.value)}
              value={price}
            ></input>
            <br /> <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDetailsSubmit}
            >
              Submit
            </button>
          </div>
          <br />
          <br />
          <br />
          <div className="container">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="h4">
                    <td></td>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                    
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <Cart details={details} deleteDetail={deleteDetails} update={update} />
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="h4">
                  <td></td>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delete</th>
                  
                </tr>
              </thead>

              <tbody>
             
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
