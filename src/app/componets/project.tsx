import React from 'react';


const Project = () => {
  return (
    <section id="projects" className="p-10 bg-black text-center">
      <h2 className="heading text-center text-5xl pt-8 text-white">
        My <span className="head text-blue-500">Projects</span>
      </h2>
      <div className="projects-container flex flex-wrap justify-center gap-5 grid-cols-3">
        <div className="project w-[300px] rounded-lg shadow-lg overflow-hidden bg-white text-left transition-transform duration-300 hover:transform hover:translate-y-[-5px]">
          <img className='w-full h-[200px] object-cover' src="/currency.jpg" alt="currency" />
          <div className="project-info p-4">
            <h3 className='text-xl mb-2.5'>Currency converter</h3>
          </div>
        </div>

        <div className="project w-[300px] rounded-lg shadow-lg overflow-hidden bg-white text-left transition-transform duration-300 hover:transform hover:translate-y-[-5px]">
          <img className='w-full h-[200px] object-cover' src="/unnamed.png" alt="calculator" />
          <div className="project-info p-4">
            <h3 className='text-xl mb-2.5'>Simple calculator</h3>
          </div>
        </div>

        <div className="project w-[300px] rounded-lg shadow-lg overflow-hidden bg-white text-left transition-transform duration-300 transform hover:translate-y-[-5px]">
          <img className='w-full h-[200px] object-cover' src="/todo.png" alt="todo list" />
          <div className="project-info p-4">
            <h3 className='text-xl mb-2.5'>Todo List</h3>
          </div>
        </div>

        <div className="project w-[300px] rounded-lg shadow-lg overflow-hidden bg-white text-left transition-transform duration-300 hover:transform hover:translate-y-[-5px]">
          <img className='w-full h-[200px] object-cover' src="/weather.png" alt="weather" />
          <div className="project-info p-4">
            <h3 className='text-xl mb-2.5'>Weather widget</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
