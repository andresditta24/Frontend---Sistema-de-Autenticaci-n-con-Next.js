"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { validateToken } from "@/lib/validateToken";


export default function DashboardPage() {
    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
    });
    const [loading, setLoading] = useState(true); // Estado de carga
    const router = useRouter();

    useEffect(() => {

        const validar = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/auth/login");

                return; // Redirige si no hay token
            }
            const response = await validateToken(token);

            if (!response.success) {

                localStorage.removeItem("token"); // Elimina el token inválido
                router.push("/auth/login"); // Redirige al login
            }

            setUsuario({ nombre: response.data.decode.usuario.nombres, email: response.data.decode.usuario.email })
            setLoading(false); // Marcar carga como completa
        }


        validar();



    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500 text-xl">Cargando...</p>
            </div>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem("token"); // Eliminar el token
        router.push("/auth/login"); // Redirigir al login
    };
    return (
        <>
            <header className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">Mi Dashboard</h1>

                {/* Menú de usuario */}
                <div className="relative">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700"
                    >
                        <span> 🔒 Cerrar sesión</span>
                    </button>



                </div>
            </header>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-96">
                    <h1 className="text-2xl font-bold text-gray-700 mb-4">
                        Sesión Iniciada
                    </h1>
                    <p className="text-lg text-gray-600">
                        Bienvenido, <span className="font-semibold">{usuario.nombre}</span>
                    </p>
                    <p className="text-gray-500">{usuario.email}</p>
                </div>
            </div>
        </>
    );
}