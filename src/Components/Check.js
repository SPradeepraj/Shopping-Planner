import React from 'react'
import './Cart.css';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import { useCart } from "react-use-cart";

export const Check = ({details, deleteDetail}) => {

  return details.map(detail=>(
      
<tr key={detail.name}>
<input type="checkbox" ></input>
<td >{detail.name}</td>
<td>{detail.description}</td>
<td>{detail.price}</td>
<td className='delete-btn' onClick={()=> deleteDetail(detail.price)} >
<Icon icon={trash} />
</td> 


                  <h5>{details[detail.name]}</h5>
                 
</tr>

  ))
}

export default Check