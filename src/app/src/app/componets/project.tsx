import React from 'react';

const Project = () => {
  return (
    

    <section id="projects">
       
  <h2 className='heading'>My <span className='head' >Projects</span></h2>
  <div className="projects-container">
 
    <div className="project">
      <img src="/currency.jpg" alt="currency"/>
      <div className="project-info">
        <h3>Currency converter</h3>
       
    
      </div>
    </div>
    
   
    <div className="project">
      <img src="/unnamed.png" alt="calculator"/>
      <div className="project-info">
        <h3>Simple calculator</h3>
   
      
      </div>
    </div>


    <div className="project">
      <img src="/todo.png" alt="todo list"/>
      <div className="project-info">
        <h3>Todo List</h3>
  
   
      </div>
    </div>



    <div className="project">
      <img src="/weather.png" alt="weather"/>
      <div className="project-info">
        <h3>Weather widget</h3>
    
   
      </div>
    </div>


   
  </div>
</section>

  );
};

export default Project;
