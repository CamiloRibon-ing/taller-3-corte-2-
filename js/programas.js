document.getElementById('form-programas').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigoPrograma = document.getElementById('codigo-programa').value;
    const nombrePrograma = document.getElementById('nombre-programa').value;
    const duracion = document.getElementById('duracion').value;
    const modalidad = document.getElementById('modalidad').value;
    const fechaInicio = document.getElementById('fecha-inicio').value;

    // Validaciones adicionales
    if (!/^[A-Za-z0-9]+$/.test(codigoPrograma)) {
        alert('El código del programa debe ser alfanumérico.');
        return;
    }
    if (fechaInicio && new Date(fechaInicio) > new Date()) {
        alert('La fecha de inicio no puede ser futura.');
        return;
    }

    // Código para almacenar o procesar los datos
    console.log({
        codigoPrograma,
        nombrePrograma,
        duracion,
        modalidad,
        fechaInicio
    });

    alert('Programa académico guardado correctamente.');
});
