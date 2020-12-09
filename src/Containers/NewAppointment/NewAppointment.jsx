import React from 'react';
import axios from 'axios'
import './NewAppointment.scss';
import {Input, notification} from 'antd';
import {useHistory} from "react-router";
import {Link} from 'react-router-dom';

const NewAppointment = () =>{
  const history = useHistory();
  const token = localStorage.getItem('authToken')
  const handleSubmit = event =>{
      event.preventDefault();
      const headers = { headers: { Authorization: `${token}` }};
      console.log(headers);
      const appointmentBody={
        status: event.target.status.value,
        diagnosis: event.target.diagnosis.value,
        price: event.target.price.value
        
      };
      axios.post('http://localhost:8000/api/appointment/create', appointmentBody, headers)
      .then(res=> {
        console.log(res.data)
        notification.success({message: 'Appointment created.', description: 'Succesfully appointment created.'})

        setTimeout(() => {
          history.push("/ShowAppointments")
      }, 1500);
      }).catch(error => {
        console.log(error)
        notification.error({message: 'Creation error.', description:'There was an error trying to create an appointment.'})
      })
  }
  return (
    <div className='create'>
      <div className='imagefond'>
        <Link to='/profile' className='linkBack'>Back</Link>
      </div>
    <form className="create-form" onSubmit={handleSubmit}>
    <Input type="status" name="status" required placeholder="Write down the appointment status" />
    <Input type="diagnosis" name="diagnosis" required placeholder="Write the diagnosis of the appointment" />
    <Input type="price" name="price" required placeholder="Write the price of the appointment" />

    <button  type="primary" className='noStyle' htmlType="submit">Create</button>

</form>

</div>
)
}

export default NewAppointment;