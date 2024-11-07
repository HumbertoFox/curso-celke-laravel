"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Contact = () => {
    const [data, setData] = useState({
        nameUser: '',
        emailUser: '',
    });

    const valueInput = e => setData({ ...data, [e.target.name]: e.target.value });

    const send = (e) => {
        e.preventDefault();
        alert(`Nome: ${data.nameUser} E-mail: ${data.emailUser}`);
    }

    return (
        <div className="text-center">
            <Menu />

            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Contato para o Projeto
                </h2>

                <form onSubmit={send} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Nome: </label>
                        <input
                            type="text"
                            name="nameUser"
                            placeholder="Nome Completo"
                            onChange={valueInput}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">E-mail: </label>
                        <input
                            type="email"
                            name="emailUser"
                            placeholder="Melhor e-mail"
                            onChange={valueInput}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Enviar
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;