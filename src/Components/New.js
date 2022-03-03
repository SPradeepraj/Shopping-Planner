

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


export default function New() {
  const [details, setdetails] = useState(getDatafromLS());

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
 
  

  const deleteDetails = price => {
    const filteredDetails = details.filter((element, index) => {
      return element.price !== price;
    });
    setdetails(filteredDetails);
    
  };



  useEffect(() => {
    localStorage.setItem('detail', JSON.stringify(details));
  }, [details]);

  return (
    <div className="container">
      
        
        <div className="">
          <div className=" ">
            <form autoComplete="off" className="form-group" />
            
            
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
                  <Cart details={details} deleteDetail={deleteDetails} />
                </tbody>
              </table>
            </div>
            <p>
              <span className="h2  ">Total Price: {''}</span>
            </p>
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
                  <th>Action</th>
                  <th>Total</th>
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
