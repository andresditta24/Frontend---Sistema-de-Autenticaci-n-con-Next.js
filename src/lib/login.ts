import { fetchData } from "./backendExpress";
interface LoginForm {
    email: string;
    contrasena: string;
  }
export const loginUser = async (formData: LoginForm) => {
    try {
        const response = await fetchData("login", "POST", formData);
        return response;
    } catch (error) {
        console.error("Error al logear usuario:", error);
        throw error;
    }
};
