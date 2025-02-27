import { fetchData } from "./backendExpress";

export const validateToken = async (token: string) => {
    try {
        const response = await fetchData("validate-token", "GET", undefined, token);
        return response;
    } catch (error) {
        console.error("Error validar token:", error);
        throw error;
    }
};
