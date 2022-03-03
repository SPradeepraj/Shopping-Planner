import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


function Home() {

  const history = useHistory();


  function handleSubmit() {
    console.log();
    history.push('/Product');
  }
  return (
    <div className='home' >
     
     
<br /><br /><br />
 
     
     
<button onClick={handleSubmit}  className="btn btn-primary">ADD</button>

           
           
   
 </div>
     
   
  )
}

export default Home

