'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Alerts from '../../components/alert/Alerts.jsx'


const Form = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [notification, setNotification] = useState(false)
    const [danger, setDanger]= useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name || !telephone || !email || !message) {
        setDanger(true)
        setTimeout(() => {
          setDanger(false)
        },2000)
        return;
      }
      const data = {
        name,
        telephone,
        email,
        message
      };
      console.log(data);
    
      try {
        const response = await axios.post(apiUrl + 'api/v1/mailing', data);
    
        if (response.data.success) {
          setNotification(!notification);
          setTimeout(() => {
            setNotification(!notification);
          }, 3000);
          setEmail("");
          setMessage("");
          setName("");
          setTelephone("");
        } else {
          console.log('Error al enviar el formulario');
        }
      } catch (error) {
        console.error('Error al enviar el formulario', error);
      }
    };
    
  return (
    <>
      <form className='form'>
          <input onChange={e => setName(e.target.value)} className='form_input' type="text"  placeholder='Nombre completo' required/>
          <input onChange={e => setTelephone(e.target.value)} className='form_input' type="text"  placeholder='Telefono' required/>
          <input onChange={e => setEmail(e.target.value)} className='form_input' type="text"  placeholder='Email' required/>
          <textarea onChange={e => setMessage(e.target.value)} className='form_input' type="text" placeholder='Tu mensaje...' required/>
          <button onClick={handleSubmit} className='form_btn'><span className='span'>ENVIAR MENSAJE</span></button>
      </form>
      <Alerts danger={danger}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
        </svg>
        <p className='title'>Error al enviar el formulario: </p>
        <p className='message'>Algunos campos estan vacios</p>
      </Alerts>
    </>
  )
}

export default Form