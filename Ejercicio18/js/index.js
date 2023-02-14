let nombre = 'Ismael'
let apellidos = 'De La Barra Rosas'

const obj = { nombre, apellidos }

const objJson = JSON.stringify(obj)
sessionStorage.setItem('persona', objJson)

localStorage.setItem('personaS', objJson)

const min = 2;
const dateExpiracion = new Date((new Date()).getTime() + min*60000)

document.cookie = `persona=${objJson};expires=${dateExpiracion.toUTCString()}`

