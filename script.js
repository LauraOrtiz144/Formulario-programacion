document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    const form = document.getElementById('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            let valid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('number').value.trim();
            const message = document.getElementById('request').value.trim();
            
            if (name === '') {
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
            
            if (phone === '') {
                alert('Phone number is required');
                valid = false;
            }
            
            if (message === '') {
                alert('Message is required');
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
    if (!a) return; // no es un enlace ajax
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
