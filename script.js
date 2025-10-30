document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            let valid = true;
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const numero = document.getElementById('numero').value.trim();
            const mensaje = document.getElementById('solicitud').value.trim();
            
            if (nombre === '') {
                alert('Name is required');
                valid = false;
            }
            
            if (email === '') {
                alert('Email is required');
                valid = false;
            } else if (!validateEmail(email)) {
                alert('Invalid email format');
                valid = false;
            }
            
            if (numero === '') {
                alert('Numero de telefono es solicitado');
                valid = false;
            }
            
            if (mensaje === '') {
                alert('Mensaje es solicitado');
                valid = false;
            }
            
            if (!valid) {
                event.preventDefault();  // Prevent form submission if invalid
            } else {
                alert('Form submitted successfully!');  // Optional confirmation message
            }
        });
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
    
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
  // interceptar clics en enlaces con clase "ajax"
  document.body.addEventListener('click', (e) => {
    const a = e.target.closest('a.ajax');
    if (!a) return; //no es un enlace ajax
    e.preventDefault();

    const page = a.getAttribute('data-page');
    if (!page) return;

    cargar(page);
  });
});

function cargar(pagina) {
  fetch(pagina, {cache: "no-store"})
    .then(resp => {
      if (!resp.ok) throw new Error('No encontrado: ' + pagina);
      return resp.text();
    })
    .then(html => {
      // meter contenido
      document.getElementById('contenido').innerHTML = html;
      // dejar la URL en raíz SIN historial (no aparece ruta)
      history.replaceState(null, '', '/');
    })
    .catch(err => {
      console.error(err);
      document.getElementById('contenido').innerHTML = '<p>Error al cargar el contenido.</p>';
      history.replaceState(null, '', '/');
    });
}
