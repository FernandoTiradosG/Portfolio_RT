import React from "react";


const Skill = () => {

  const skills = [
    { id: 1, src: '', title: '', style: 'shadow-  -500'}, //Todo: Add src and title
    { id: 2, src: '', title: '', style: 'shadow-  -500'},
    { id: 3, src: '', title: '', style: 'shadow-  -500'},
    { id: 4, src: '', title: '', style: 'shadow-  -500'},
    { id: 5, src: '', title: '', style: 'shadow-  -500'},
    { id: 6, src: '', title: '', style: 'shadow-  -500'},
  ]

  return (
    <div name="Skill" className="bg-gradient-to-b from-gray-800 w-full to-black text-white md:h-screen" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Skills</p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {skills.map (({id, src, title, style}) => (
              <div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + {style}}>
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4"></p>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{title}</button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
};

export default Skill;