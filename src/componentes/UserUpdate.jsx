import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Grid, TextField, Button, Avatar } from '@mui/material';

export const UserUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    avatar: '',
    username: '',
  });

  useEffect(() => {
    fetch(`https://www.melivecode.com/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { fname, lname, avatar, username } = data.user;
        setUser({ nombre: fname, apellido: lname, avatar, username });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateUser = (e) => {
    e.preventDefault(); 
    const data = {
      id: id,
      fname: user.nombre,
      lname: user.apellido,
      username: user.username,
      avatar: user.avatar,
    };

    fetch('https://www.melivecode.com/api/users/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => navigate("/"));
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar src={user.avatar} sx={{ width: 56, height: 56 }} />
      <Typography sx={{ mt: 2, mb: 2 }} component="h1" variant="h5">
        Editar Usuario
      </Typography>
      <Grid container spacing={2} component="form" onSubmit={updateUser}>
        <Grid item xs={12}>
          <TextField
            name="nombre"
            variant="outlined"
            required
            fullWidth
            label="Nombre"
            value={user.nombre}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="apellido"
            variant="outlined"
            required
            fullWidth
            label="Apellido"
            value={user.apellido}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="username"
            variant="outlined"
            required
            fullWidth
            label="Nombre de Usuario"
            value={user.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="avatar"
            variant="outlined"
            required
            fullWidth
            label="Avatar"
            value={user.avatar}
            onChange={handleChange}
          />
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Actualizar
        </Button>
      </Grid>
    </Container>
  );
};
