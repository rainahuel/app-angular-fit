export const environment = {
  production: false,
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
