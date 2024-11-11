document.getElementById('estudiantes').addEventListener('submit', function(event) {
    event.preventDefault();

    const idEstudiante = document.getElementById('id-estudiantes').value;
    const nombreCompleto = document.getElementById('nombre-completo').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Validación para idEstudiante
    if (!/^[A-Za-z0-9]+$/.test(idEstudiante)) {
        alert('La identificación debe ser alfanumérica.');
        return;
    }

    // Validación para nombreCompleto (solo letras y espacios)
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreCompleto)) {
        alert('El nombre completo solo puede contener letras y espacios.');
        return;
    }

    // Validación para fechaNacimiento
    if (new Date(fechaNacimiento) >= new Date()) {
        alert('La fecha de nacimiento no puede ser futura.');
        return;
    }

    // Validación para telefono (opcional)
    if (telefono && !/^\d{8,15}$/.test(telefono)) {
        alert('El teléfono debe ser numérico y contener entre 8 y 15 dígitos.');
        return;
    }

      // Validación para correo electrónico
      const nombreUsuario = nombreCompleto.split(" ")[0].toLowerCase(); // Usamos el primer nombre como base
      const correoValido = new RegExp(`^${nombreUsuario}@ING\\.com$`, 'i'); // Validación para el formato
  
      if (!correoValido.test(email)) {
          alert(`El correo electrónico debe tener el formato ${nombreUsuario}@ING.com`);
          return;
      }


    // Código para almacenar o procesar los datos
    console.log({
        idEstudiante,
        nombreCompleto,
        fechaNacimiento,
        email,
        telefono
    });

    alert('Estudiante guardado correctamente.');
});
