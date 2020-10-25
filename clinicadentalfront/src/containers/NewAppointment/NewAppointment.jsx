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
        axios.post('http://localhost:5001/appointments/newAppointment/'+ validator.email, appointment)
            .then(res => {
                console.log(res)
            })
           .catch(error => console.log(error.response.data))
    }

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" name="date" required placeholder="Introduce una fecha"/>
                <input type="text" name="status" required placeholder="Motivo de la cita"/>
                <button type="submit">Crear cita</button>
            </form>            
        </div>
    )
}

export default NewAppointment;