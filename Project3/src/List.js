import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, updateStatus, removeItem} ) => {
  return (
       <div className='grocery-list'>
        {items.map((item) => {
            const {id, title, status} = item
            return <article key={id} className='grocery-item' id={id}>
            <p className='title' style={{color:'white', fontSize:'20px', fontWeight:'bold'}}>
            {id}. {title}
            </p>
            <p style={{color:'white'}}>
               Status: {status}
            </p>
            <div className='btn-container' style={{display:'flex', flexDirection:'column'}}>
             <button type='button' className='update-btn' onClick={() => {updateStatus(id)}}>
                Update Status
             </button>
             <button type='button' className='delete-btn' onClick={()=> removeItem(id)} >
               Remove
             </button>
            </div>
            </article>
        })}
       </div>


  )
}

export default List