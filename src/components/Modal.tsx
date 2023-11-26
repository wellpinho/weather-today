import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (email: string, senha: string) => void;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title }) => {
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
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 ml-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu email"
                                required
                                className="p-2 border rounded-full placeholder-opacity-50 placeholder-gray-500" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="senha" className="mb-1 ml-2">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Digite sua senha"
                                required
                                className="p-2 border rounded-full placeholder-opacity-50 placeholder-gray-500" />
                        </div>
                        <button type="submit" className="bg-gray-900 text-white p-2 rounded-full
                        hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out">
                            Entrar
                        </button>
                    </form>

                    <p className="mt-4 text-center text-blue-500">
                        Não tem uma conta ? <a href="#">Criar conta</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;