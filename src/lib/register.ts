// src/lib/register.ts
import { fetchData } from "./backendExpress";
interface dataRegister {
    nombres: string;
    apellidos: string;
    telefono: string;
    email: string;
    contrasena: string;
}
export const registerUser = async (formData: dataRegister) => {
    try {
        const response = await fetchData("register", "POST", formData);
        return response;
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
};
