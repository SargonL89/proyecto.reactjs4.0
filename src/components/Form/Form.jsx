import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '', lastName: '', street: '', streetNum: '', city: '', postalAdd: '', phoneNum: '', email: '', cardNum: '', cardExp: '', cvv: '', comentary: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}/>
          <label>Apellido:</label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Calle:</label>
          <input
            type='text'
            name='street'
            value={formData.street}
            onChange={handleChange}/>
          <label>Numero:</label>
          <input
            type='number'
            name='streetNum'
            value={formData.streetNum}
            onChange={handleChange}/>
          <label>Ciudad:</label>
          <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange}/>
          <label>Codigo postal:</label>
          <input
            type='number'
            name='postalAdd'
            value={formData.postalAdd}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Num. telefono:</label>
          <input
            type='number'
            name='phoneNum'
            value={formData.phoneNum}
            onChange={handleChange}/>
          <label>Correo Electronico:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Numero de tarjeta de credito:</label>
          <input
            type='number'
            name='cardNum'
            value={formData.cardNum}
            onChange={handleChange}/>
          <label>Fecha venc. tarjeta:</label>
          <input
            type='date'
            name='cardExp'
            value={formData.cardExp}
            onChange={handleChange}/>
          <label>CVV:</label>
          <input
            type='number'
            name='cvv'
            value={formData.cvv}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Comentarios:</label>
          <textarea 
            type='text'
            name='comentary'
            value={formData.comentary}
            onChange={handleChange}
            rows={4} 
            cols={50}></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form
