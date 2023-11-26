import Navbar from "@/components/Navbar";
import React from 'react';
import "../app/globals.css";



const equipe = () => {
    const teamMembers = [
        { name: 'Wellington', github: 'https://github.com/wellpinho', linkedin: 'https://www.linkedin.com/in/wellpinho/' },
        { name: 'Gustavo', github: 'https://github.com/GustavoInTech', linkedin: 'https://www.linkedin.com/in/gustavo-rodrigues-6571b1253/' },
    ];

    return (
        <div>
            <Navbar onEntrarClick={() => console.log('Botão Entrar Clicado')} />
            <div className="text-white flex justify-center items-center">

                <ul>
                    {teamMembers.map((member, index) => (
                        <li key={index}>
                            <p>Nome: {member.name}</p>
                            <p>GitHub: <a href={member.github}>{member.github}</a></p>
                            <p>LinkedIn: <a href={member.linkedin}>{member.linkedin}</a></p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default equipe;
