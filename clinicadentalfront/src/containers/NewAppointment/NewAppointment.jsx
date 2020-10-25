import React from 'react';
import axios from 'axios';

const NewAppointment = () => {
    const validator = JSON.parse(localStorage.getItem('user'));
    const handleSubmit = event => {
        event.preventDefault();
        const appointment = {
            date: event.target.date.value,
            status: event.target.status.value
        };
        axios.post('http://localhost:5000/appointments/newAppointment/'+ validator.email, appointment)
            .then(res => {
                console.log(res)
            })
           .catch(error => console.log(error.response.data))
    }

    return (
      <body>
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
              <input type="text" name="date" required placeholder="Enter a date"/>
              <input type="text" name="status" required placeholder="Reason for the appointment"/>
              <button type="submit">Create appointment</button>
          </form>            
        </div>
      </body>
    )
}

export default NewAppointment;