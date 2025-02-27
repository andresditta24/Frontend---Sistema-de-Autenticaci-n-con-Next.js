
"use client"

import { useState } from "react";
import Swal from "sweetalert2";
import { validateFormRegister } from "./utils/validacion"; // Importa la validación
import { registerUser } from "@/lib/register";

export default function RegisterForm() {

    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        telefono: "",
        email: "",
        contrasena: "",
    });

    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateFormRegister(formData)) {
            return; // Si la validación falla, no se ejecuta el registro
        }

        

        try {
            const response = await registerUser(formData);

            if (!response.success) {
                // ✅ Mostrar mensaje de error del backend con SweetAlert
                Swal.fire("Error", response.data.message, "error");
                return;
            }
            // ✅ Mostrar mensaje de éxito si el registro fue exitoso
            Swal.fire("Éxito", response.data.message, "success");
            
            
            setFormData({
                nombres: "",
                apellidos: "",
                telefono: "",
                email: "",
                contrasena: "",
            });

           

        } catch (error: unknown) {
            if (error instanceof Error) {
              console.error(error.message);
            } else {
              console.error("Se ha producido un error desconocido");
            }
          } finally {
            // setIsLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Registro de Usuario
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="nombres"
                        placeholder="Nombres"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={formData.nombres}
                    />
                    <input
                        type="text"
                        name="apellidos"
                        placeholder="Apellidos"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={formData.apellidos}
                    />
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={formData.telefono}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <input
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={formData.contrasena}

                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                       
                    >
                        {/* {isLoading ? "Cargando..." : "Registrarse"} */}
                        Regisrarse
                    </button>
                </form>
            </div>
        </div>
    );
}