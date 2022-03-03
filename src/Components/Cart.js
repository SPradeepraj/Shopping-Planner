import React from 'react'
import './Cart.css';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';

let Cart = ({details, id, deleteDetail, update, setdetails, name}) => {


  const handleComplete = (id) => {
    setdetails(
      details.map((detail) => {
        if (name.id === id) {
          return {
            ...name,
            complete: !name.complete,
          };
        }
        return name;
      })
    );
  };

  const handleItem = (id) => {
    const editItem = details.find((el) => el.id === id);
    setdetails(editItem.item);
    setdetails(true);
    setdetails(id);
  };


  return details.map(detail=>(
      <>
      <tr key={detail.name}>
      <input type="checkbox" onClick={() => handleComplete(id)} />
      <td >{detail.name}</td>
<td>{detail.description}</td>
<td>{detail.price}</td>
<td className='delete-btn' onClick={()=> deleteDetail(detail.price)} >
<Icon icon={trash} />
</td>
<td>{detail.description*detail.price}</td> 

<td><button className='btn' onClick={()=>handleItem}>Update</button></td>
                  <h5>{details[detail.price + detail.price]}</h5>
                  </tr>
                     
</>
                  ))
                }

export default Cart;