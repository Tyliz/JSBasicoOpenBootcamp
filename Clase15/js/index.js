/**
 * * LocalStorage
 * ? se mantiene a traves de distintas pestañas
 * ? nunca caduca
 */
// localStorage.setItem('nombre', 'Tyliz')
// localStorage.setItem('nombre', 'Nila')

// console.log(localStorage.getItem('nombre'));

// localStorage.setItem('persona', JSON.stringify({ nombre: 'Tyliz', edad: 26 }))

// console.log(JSON.parse(localStorage.getItem('persona')));

// remover elementos
// localStorage.removeItem('nombre')

/**
 * * SessionStorage
 * ? No se mantiene a traves de distintas pestañas
 * ? solo duran las variables hasta que la pestaña se cierre
 * funciona exactamente igual a localstora por lo demás
 */

sessionStorage.setItem('nombre', 'Tyliz')


/**
 * * Cokies
 *
 */

document.cookie = 'nombre=TylizCookie'
document.cookie = 'nombreCaducidad=Tyliz;expires=' + (new Date(2023, 1, 15)).toUTCString()

console.log(document.cookie);
