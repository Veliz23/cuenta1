import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Swal from "sweetalert2";



const Formulario = () => {
  const [nombre, setNombre] =useState('');
  const [correo, setCorreo] =useState('');
  const [contraseña, setContraseña] =useState('');
  const [confirmarcontraseña, setConfirmarcontraseña] =useState('');
  const [error, setError]   =useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(nombre.trim() == ""){
      console.log("no hay nombre")
      Swal.fire({
        icon: 'error',
        title: 'ocurrio un problema',
        text: 'debes rellenar el nombre!',
        footer: '<a href="">pedir ayuda?</a>'
      });
    
      setError(true)
    }

    else if(correo.trim() ==""){
      console.log("no hay correo")
      Swal.fire({
        icon: 'error',
        title: 'ocurrio un problema',
        text: 'debes rellenar el correo!',
        footer: '<a href="">pedir ayuda?</a>'
      });
    
      setError(true)
    }
    else if (contraseña.trim()==""){
      console.log('no hay contraseña')
      Swal.fire({
        icon: 'error',
        title: 'ocurrio un problema',
        text: 'debes rellenar la contraseña!',
        footer: '<a href="">pedir ayuda?</a>'
      });
    
      setError(true)
    }
    else if (confirmarcontraseña.trim()==""){
      console.log('no hay confirmar contraseña')
      Swal.fire({
        icon: 'error',
        title: 'ocurrio un problema',
        text: 'debes rellenar la confirmacion de contraseña!',
        footer: '<a href="">pedir ayuda?</a>'
      });
    
      setError(true)
    }
    else if (contraseña !== confirmarcontraseña){
      console.log('contraseñas no coinciden')
      Swal.fire({
        icon: 'error',
        title: 'ocurrio un problema',
        text: 'contraseñas no coinciden!',
        footer: '<a href="">pedir ayuda?</a>'
      });
    
      setError(true)
      
    }
    else{
      console.log('contraseña correcta')
      Swal.fire({
        icon: 'success',
        title: 'Excelente',
        text: 'Te registraste con exito!',
      });
    
      setError(true)
    }
     
    
  };
  return (
<div className='formulario'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicname">
      {error ? <p>El campo no puede estar vacio</p> : null}
        <Form.Control onChange={(e) => setNombre(e.target.value)} type="name" placeholder="Nombre"/>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  onChange={(e) => setCorreo(e.target.value)} type="email" placeholder="Tucorreo@Ejemplo.com" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) => setContraseña(e.target.value)} type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordComfirm">
        <Form.Control onChange={(e) => setConfirmarcontraseña(e.target.value)}type="password" placeholder="Confirmar Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Button variant="primary" type="submit">
       Registrartre
      </Button>
    </Form>
    </div>
  );
}

export default Formulario;