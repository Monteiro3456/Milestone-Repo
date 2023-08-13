import React, { useEffect, useState} from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setisEditing] = useState(false)
  const [editId, seteditId] = useState(null)
  const [taskId, setTaskId] = useState(1)
  const [alert, setAlert] = useState(
    {show: false,
     msg:'',
     type:''}
     )

  const handleSubmit = (e) => {
   e.preventDefault()
   if (!name){
    // display alert
    //  showAlert(true,'danger', 'Please Enter value')
   alert('please enter a value')
   }
  //  else if (name && isEditing){
  //   // deal with edit 
  // // setList(list.map((item) => {
  // //   if (item.id === editId){
  // //     return {...item,title:name}
  // //   }
  // //   setisEditing(false)
  // //   return item
  // // }))
        
  //    }
     else {
      // show alert
      const newItem = {id: taskId, title: name, status: "Pending"}
      setTaskId(taskId+ 1)
      setList([...list, newItem])
      setName('')
      // showAlert(true,'success','Item added to list')
     console.log(list);
     }
     
  }


  // function showAlert (show = false, type='', msg=''){
    
  //   setAlert({show,msg, type})
  //   setTimeout(() => setAlert({show:'false',type:'',msg:''}),1500)
     
  // }


  function editItem(id){
     const element = document.getElementById(id)
    //  console.log(element.children[0].innerHTML);
    //  const inputVal = document.getElementById('grocery')
     setName(element.children[0].innerHTML)
     seteditId(id)
     setisEditing(true)

   
  }


  function removeItem(id){
    //  showAlert('true','danger','Item removed from list')
     setList(list.filter((item) => item.id !== id))
    //  console.log(list);
  }

  // function clearList (){
  //   setList([])
  // }


  function updateStatus(id){
      
    const updatedList = [...list];
    updatedList[id-1].status = updatedList[id-1].status === 'pending' ? 'completed' : 'pending';
    setList(updatedList);
    
  }

  // useEffect((id)=> updateStatus(id), [list])


  return (
  <div>
    <section className='header-section'>
    {alert.show && <Alert alert={alert}/>}
     <form action="" className='grocery-form' onClick={handleSubmit}>
     
      {/* <h3>grocery bud</h3> */}
      <div className='form-control'>
      <input type='text' id='grocery' className='grocery' placeholder='Learn useRef' value={name} onChange={(e) => setName(e.target.value)}/>
    <button type='submit' className='submit-btn'>
     Add

    </button>
      </div>
     </form>
    
   
    </section>
    <List items={list} updateStatus={updateStatus} removeItem={removeItem}/>
    </div>

  )




}

export default App

