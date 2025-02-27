"use client"
import { loginUser } from "@/lib/login";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";



export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    contrasena: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await loginUser(formData);
      if (!response.success) {
        Swal.fire("Error", response.data.message, "error");
        return;
      }


      // Guardar el token en localStorage o sessionStorage
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Se ha producido un error desconocido");
      }
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              {isLoading ? "Cargando..." : "Iniciar Sesión"}
         
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          ¿No tienes cuenta?{" "}
          <a href="/auth/register" className="text-blue-600 hover:underline">
          {isLoading ? "Cargando..." : "Ingresar"}
          </a>
        </p>
      </div>
    </div>
  );
}