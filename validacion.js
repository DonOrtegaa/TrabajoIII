
console.log('JavaScript está funcionando');
document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Validación de campos
  if (name === '') {
    alert('Por favor, ingrese su nombre');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido');
    return;
  }

  // Si todos los campos son válidos, envía el formulario
  form.submit();
});
})
// Función para validar correos electrónicos
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}