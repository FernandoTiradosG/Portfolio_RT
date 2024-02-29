import React from "react";
import Galeria from "../assests/image/GaleriaImages.png";
import Pokedex from "../assests/image/PokeDex.png";
import Findflix from "../assests/image/FindFlix.png";
import Tienda from "../assests/image/Tienda.png";


const Portfolio = () => {

  const portfolio = [
    { id: 1, src: Galeria, url: 'https://github.com/FernandoTiradosG/DAWEC/tree/main/T2/SPRINT%202/ejercicio4'},
    { id: 2, src: Pokedex, url: 'https://github.com/FernandoTiradosG/DAWEC/tree/main/T1/SPRINT%205'},
    { id: 3, src: Findflix, url: 'https://github.com/FernandoTiradosG/DAWEC/tree/main/T1/SPRINT%204/Ejercicio4'},
    { id: 4, src: Tienda, url: 'https://github.com/FernandoTiradosG/Proyecto-StockTiendaComic/tree/main/Tienda'},
  ]

  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Portfolio</p>
          <p className="py-6">Echa un vistazo a algunos de mis trabajos aquí mismo.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolio.map (({id, src, url}) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>

                <div className="flex items-center justify-center">
                  <a href={url} className="text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-500">Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Portfolio;