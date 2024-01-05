import Navbar from "@/components/Navbar";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "../app/globals.css";
import Link from "next/link";
import Image from 'next/image';



const equipe = () => {
    const teamMembers = [
        {
            name: 'Wellington Pinho',
            imgSrc: 'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            github: 'https://github.com/wellpinho',
            linkedin: 'https://www.linkedin.com/in/wellpinho/'
        },
        {
            name: 'Gustavo Rodrigues',
            imgSrc: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            github: 'https://github.com/GustavoInTech',
            linkedin: 'https://www.linkedin.com/in/gustavo-rodrigues-6571b1253/'
        },
    ];

    const handleEnter = () => {
        console.log('Botão Entrar Clicado');
    };

    return (
        <div>
            <Navbar handleEnter={handleEnter} />
            <div className=" text-center text-white py-10">
                <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">Desenvolvedores</h1>

                <div className="flex flex-wrap justify-center items-center max-w-5xl mx-auto gap-8 group">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white/10 duration-500 p-4 md:p-8 rounded-md 
                        mix-blend-luminosity group-hover:blur-sm hover:!blur-none
                        group-hover:scale-[0.85] hover:!scale-100 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-[340px]">
                            <Image
                                src={member.imgSrc}
                                alt={`Avatar de ${member.name}`}
                                width={16}
                                height={16}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />


                            <p className="text-xl font-bold mb-2 text-center">{member.name}</p>
                            <p className="text-sm leading-7 my-4 font-light opacity-50">{member.description}</p>
                            <div className="flex justify-center items-center gap-4">
                                <Link href={member.github} target="_blank" rel="noopener noreferrer"
                                    className="social-button bg-gray-800 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
                                    <FaGithub size={20} color="white" />
                                </Link>
                                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="social-button bg-gray-800 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-900">
                                    <FaLinkedin size={20} color="white" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default equipe;
