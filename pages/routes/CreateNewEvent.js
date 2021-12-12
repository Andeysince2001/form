import React from 'react'
import { Input} from 'antd';
import '../styles/NewEvent.css'

const Form = () => {
    const { TextArea } = Input;
    return (
        <div className='body-f'>
        <div className="header-head">
            <h1>Create New Event</h1>                    
        </div>
            <div className="header-body">
             <p>Welcome, You can create new events here</p>
        </div>
        <div className="date">
            <input type='date' />
        </div>
        <div className="form-container">
         <form>
         <TextArea className='text-area' rows={4} placeholder='Description'/>
         <Input className='input' placeholder='Enter Text' />
         <Input className='input' placeholder='Image URL' />
          </form>   
         </div>
        </div>
     )
}

export default Form
