function generarFechasDisponibles() {
    var fechaActual = new Date();
    var fechasDisponibles = {};

    
    for (var i = 0; i < 3; i++) {
        var fecha = new Date();
        fecha.setMonth(fechaActual.getMonth() + i);

       
        var ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();

        for (var dia = 1; dia <= ultimoDia; dia++) {
            fecha.setDate(dia);

            
            var horasDisponibles = [
                "09:00", "09:15", "09:30", "09:45",
                "10:00", "10:15", "10:30", "10:45",
                "11:00", "11:15", "11:30", "11:45",
                "14:00", "14:15", "14:30", "14:45",
                "15:00", "15:15", "15:30", "15:45",
                "16:00", "16:15", "16:30", "16:45"
            ];

            var fechaFormateada = fecha.toISOString().split('T')[0];

            fechasDisponibles[fechaFormateada] = horasDisponibles;
        }
    }
    return fechasDisponibles;
}

// Datos de disponibilidad
var MedicosData = {
    "Medico A": {
        "especialidad": "Cardiologia",
        "disponibilidad": generarFechasDisponibles()
    },
    "Medico B": {
        "especialidad": "Cardiologia",
        "disponibilidad": generarFechasDisponibles()
    },
    "Medico C": {
        "especialidad": "Dermatologia",
        "disponibilidad": generarFechasDisponibles()
    },
    "Medico D": {
        "especialidad": "Dermatologia",
        "disponibilidad": generarFechasDisponibles()
    },
    "Medico E": {
        "especialidad": "Oftalmologia",
        "disponibilidad": generarFechasDisponibles()
    },
    "Medico F": {
        "especialidad": "Oftalmologia",
        "disponibilidad": generarFechasDisponibles()
    }
};

var medicoSelect = document.getElementById("medico");
var fechaInput = document.getElementById("fecha");
var horaSelect = document.getElementById("hora");
var especialidadSelect = document.getElementById("especialidad");

medicoSelect.addEventListener("change", actualizarHoras);
fechaInput.addEventListener("change", actualizarHoras);
especialidadSelect.addEventListener("change", actualizarMedicos);

// Llenar inicialmente la lista de especialidades
llenarEspecialidades();

function llenarEspecialidades() {
    // Obtener todas las especialidades únicas de los médicos
    var especialidadesUnicas = [...new Set(Object.values(MedicosData).map(medico => medico.especialidad))];

    // Agregar las especialidades a la lista de selección
    for (var i = 0; i < especialidadesUnicas.length; i++) {
        var option = document.createElement("option");
        option.value = especialidadesUnicas[i];
        option.textContent = especialidadesUnicas[i];
        especialidadSelect.appendChild(option);
    }
}

function actualizarMedicos() {
    var especialidadSeleccionada = especialidadSelect.value;
    var medicosDisponibles = [];

    // Filtrar los médicos por especialidad
    for (var medico in MedicosData) {
        if (MedicosData[medico].especialidad === especialidadSeleccionada) {
            medicosDisponibles.push(medico);
        }
    }

    // Limpiar y llenar la lista de médicos disponibles
    medicoSelect.innerHTML = "";
    for (var i = 0; i < medicosDisponibles.length; i++) {
        var medico = medicosDisponibles[i];
        var option = document.createElement("option");
        option.value = medico;
        option.textContent = medico;
        medicoSelect.appendChild(option);
    }

    // Actualizar las horas disponibles y la especialidad al cambiar la especialidad
    actualizarHoras();
}

function actualizarHoras() {
    var medicoSeleccionado = medicoSelect.value;
    var fechaSeleccionada = fechaInput.value;
    var horasDisponibles = MedicosData[medicoSeleccionado].disponibilidad[fechaSeleccionada] || [];

    horaSelect.innerHTML = "";

    for (var i = 0; i < horasDisponibles.length; i++) {
        var hora = horasDisponibles[i];
        var option = document.createElement("option");
        option.value = hora;
        option.textContent = hora;
        horaSelect.appendChild(option);
    }
}

actualizarMedicos();

function Tomahora(boton) {
    var fechaActual = new Date();
    
    var fechaAgendada = fechaActual.toLocaleDateString();

    alert("Todo listo, te enviaremos un correo de confirmación\nTu hora ha sido reservada correctamente con fecha: " + fechaAgendada);
}