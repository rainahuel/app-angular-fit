export const environment = {
  production: true,
  urlBase: 'http://localhost:5000/',
  api: {
    usuario: {
      login: 'login',
      crearUsuario: 'usuarios'
    },
    rutinas: {
      obtenerRutinas: 'rutinas',
      actializaRutina: 'rutinas',
      crearRutina: 'rutinas',
      eliminarRutina: 'rutinas',
    },
    perfiles: {
      obtenerPerfil: 'perfiles/',
      agregarPerfil: 'perfiles?token=',
      quitarPerfil: 'perfiles?token=',
    }
  }
};
