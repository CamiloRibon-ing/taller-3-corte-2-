document.getElementById('for-matriculas').addEventListener('submit', function(event) {
    event.preventDefault();

    const idMatricula = document.getElementById('id-matricula').value;
    const idEstudianteMatricula = document.getElementById('id-estudiantes-matricula').value;
    const codigoProgramaMatricula = document.getElementById('codigo-programa-matricula').value;
    const fechaMatricula = document.getElementById('fecha-matricula').value;
    const estado = document.getElementById('estado').value;

    // Validaciones adicionales
    if (!/^[A-Za-z0-9]+$/.test(idMatricula)) {
        alert('La identificación de matrícula debe ser alfanumérica.');
        return;
    }
    if (new Date(fechaMatricula) < new Date()) {
        alert('La fecha de matrícula debe ser actual o futura.');
        return;
    }

    // Código para almacenar o procesar los datos
    console.log({
        idMatricula,
        idEstudianteMatricula,
        codigoProgramaMatricula,
        fechaMatricula,
        estado
    });

    alert('Matrícula registrada correctamente.');
});
