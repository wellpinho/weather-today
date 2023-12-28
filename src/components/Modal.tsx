'use client'
import { FaEye, FaEyeSlash, FaAddressCard } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (email: string, senha: string) => void;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title }) => {


    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as any).email.value;
        const senha = (e.target as any).senha.value;
        onSubmit(email, senha);
    };

    return (
        <div className="fixed inset-0 bg-black
        bg-opacity-25 backdrop-blur-sm flex
        justify-center items-center">
            <div className="w-[400px] flex flex-col bg-white p-6 rounded-md">
                <button className="text-black text-xl
                place-self-end" onClick={onClose}>X</button>

                <div className="bg-white p-2 rounded">
                    <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div className="flex flex-col relative">
                            <label htmlFor="email" className="mb-1 ml-2">

                                Email:
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Digite seu email"
                                    required
                                    className="p-2 border rounded-full placeholder-opacity-50 placeholder-gray-500 flex-grow"
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <FaAddressCard className="text-gray-500 opacity-50" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col relative">
                            <label htmlFor="senha" className="mb-1 ml-2 ">
                                Senha:
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="senha"
                                    name="senha"
                                    placeholder="Digite sua senha"
                                    required
                                    className="p-2 border rounded-full placeholder-opacity-50 placeholder-gray-500 flex-grow"
                                />
                                <div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer "
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash className="text-gray-500 opacity-50" /> : <FaEye className="text-gray-500 opacity-50" />}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="bg-gray-900 text-white p-2 rounded-full
                        hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out">
                            Entrar
                        </button>
                    </form>

                    <p className="mt-4 text-center text-blue-500">
                        Não tem uma conta ? <Link href="/">Criar conta</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;