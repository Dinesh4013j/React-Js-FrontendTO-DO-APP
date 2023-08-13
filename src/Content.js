import React from 'react'
import ItemsList from './itemsList';

const Content = ({items,handleCheck,handleDelete}) => {
 
  return (
    <>
      {items.length?(
      <ItemsList
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
       />
      ):(
        <p style={{marginTop:'3rem'}}>your list is empty</p>
      )
}
    
    </>
  )
        }


export default Content