// utils/validations.ts

import Swal from "sweetalert2";

interface LoginForm {
    email: string;
    contrasena: string;
}

interface RegisterForm {
    nombres: string;
    apellidos: string;
    telefono: string;
    email: string;
    contrasena: string;
}
export const validateFormRegister = (formData: RegisterForm) => {
    const regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexTelefono = /^[0-9]{7,10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validaciones nombres
    if (!formData.nombres.trim()) {
        Swal.fire("Error", "El campo Nombres es obligatorio", "error");
        return false;
    }
    if (!regexLetras.test(formData.nombres)) {
        Swal.fire("Error", "El campo Nombres solo puede contener letras", "error");
        return false;
    }

    // Validaciones apellidos
    if (!formData.apellidos.trim()) {
        Swal.fire("Error", "El campo Apellidos es obligatorio", "error");
        return false;
    }
    if (!regexLetras.test(formData.apellidos)) {
        Swal.fire("Error", "El campo Apellidos solo puede contener letras", "error");
        return false;
    }

    // Validaciones teléfono
    if (!formData.telefono.trim()) {
        Swal.fire("Error", "El campo Teléfono es obligatorio", "error");
        return false;
    }
    if (!regexTelefono.test(formData.telefono)) {
        Swal.fire("Error", "El número de teléfono no es válido.", "error");
        return false;
    }

    // Validaciones correo
    if (!formData.email.trim()) {
        Swal.fire("Error", "El campo Correo es obligatorio", "error");
        return false;
    }
    if (!regexEmail.test(formData.email)) {
        Swal.fire("Error", "El correo electrónico no es válido", "error");
        return false;
    }

    // Validaciones contraseña
    if (!formData.contrasena.trim()) {
        Swal.fire("Error", "El campo Contraseña es obligatorio", "error");
        return false;
    }
    if (!regexContrasena.test(formData.contrasena)) {
        Swal.fire(
            "Error",
            "La contraseña debe tener 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.",
            "error"
        );
        return false;
    }

    return true; // Si todas las validaciones pasan
};

export const validateFormLogin = (formData: LoginForm) => {
    // const regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    // const regexTelefono = /^[0-9]{7,10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    // Validaciones correo
    if (!formData.email.trim()) {
        Swal.fire("Error", "El campo Correo es obligatorio", "error");
        return false;
    }
    if (!regexEmail.test(formData.email)) {
        Swal.fire("Error", "El correo electrónico no es válido", "error");
        return false;
    }

    // Validaciones contraseña
    if (!formData.contrasena.trim()) {
        Swal.fire("Error", "El campo Contraseña es obligatorio", "error");
        return false;
    }


    return true; // Si todas las validaciones pasan
};