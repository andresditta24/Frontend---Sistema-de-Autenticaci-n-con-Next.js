export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1000";
interface data {
    nombres?: string;
    apellidos?: string;
    telefono?: string;
    email: string;
    contrasena: string;
}
export const fetchData = async (endpoint: string, method = "GET", data?: data, token?: string) => {
    try {
        
        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_URL}/${endpoint}`, {
            method,
            headers,
            body: method !== "GET" ? JSON.stringify(data) : null,
        });
        const result = await response.json();

        if (!response.ok) {
             return { success:false, data: result };
        }

        return { success:true, data: result };
        
    } catch (error) {
        console.error("Error en fetchData:", error);
        throw error;
    }
};
