import React from "react";

const About = () => {
  return (
    <div name="Sobre Mi" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white " >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Sobre Mi</p>
        </div>
        <p className=" text-xl">¡Hola! Soy Fernando, un apasionado desarrollador web con experiencia en el mundo del audiovisual. Mi portfolio es un reflejo de mi dedicación a combinar creatividad y tecnología para crear experiencias digitales cautivadoras. Con sólidas habilidades en HTML, CSS, JavaScript y una sensibilidad estética desarrollada, estoy emocionado por colaborar en proyectos innovadores que desafíen los límites de lo posible en la web. ¡Explora mi trabajo y descubre cómo puedo contribuir a tu próximo proyecto!</p>
      </div>
    </div>
  )
};

export default About;