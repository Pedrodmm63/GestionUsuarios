import  { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const UserCreate = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();

 /* const createUser = () => {
    var data = {
      fname: nombre,
      lname: apellido,
      username: username,
      password: "1234", 
      email: email,
      avatar: avatar,
    };

    fetch("https://www.melivecode.com/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if(response.ok) {
        navigate("/");
      } else {
        // Maneja el error, por ejemplo, mostrando un mensaje al usuario.
        console.error('Error al crear el usuario');
      }
    })
    .catch(error => console.error('Error en la petición fetch:', error));
    
  };*/
  const createUser = () => {
    var data = {
      fname: nombre,
      lname: apellido,
      username: username,
      password: "1234", // Recuerda buscar una manera segura de manejar las contraseñas
      email: email,
      avatar: avatar,
    };
  
    fetch("https://www.melivecode.com/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        navigate("/");
      }
    })
  };
  

  return (
    <Box component="form" onSubmit={(e) => {
      e.preventDefault();
      createUser();
    }}>
      <TextField margin="normal" required  id="nombre" label="Nombre" name="nombre" autoComplete="nombre" autoFocus onChange={(e) => setNombre(e.target.value)} /><br/>
      <TextField margin="normal" required  id="apellido" label="Apellido" name="apellido" autoComplete="apellido" onChange={(e) => setApellido(e.target.value)} /><br/>
      <TextField margin="normal" required  id="username" label="Nombre de Usuario" name="username" autoComplete="username" onChange={(e) => setUsername(e.target.value)} /><br/>
      <TextField margin="normal" required  id="email" label="Correo Electrónico" name="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <TextField margin="normal" required  id="avatar" label="Avatar URL" name="avatar" autoComplete="avatar" onChange={(e) => setAvatar(e.target.value)} /><br/>
      <Button type="submit"  variant="contained" sx={{ mt: 3, mb: 2 }}>
        Crear Usuario
      </Button>
    </Box>
  );
};


