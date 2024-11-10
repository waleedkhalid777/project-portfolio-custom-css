import React from 'react';

const skills = [
  
  { name: 'HTML', percent: 60, bgColor: 'bg-orange-500',}, // Updated color for better visibility
  { name: 'CSS', percent: 50, bgColor: 'bg-blue-500' },
  { name: 'JavaScript', percent: 70, bgColor: 'bg-yellow-500' },
  { name: 'Next.JS', percent: 75, bgColor: 'bg-green-500' },
  { name: 'TypeScript', percent: 65, bgColor: 'bg-purple-500' },
];

const Skills = () => {
  return (
    <div className="py-8 " id='skills'>
      <div className='inner'>
      <h2 className="heading text-center text-5xl pt-8 text-white">
        My <span className="head text-blue-500">Skills</span>
      </h2>

        <div className="skill-area flex flex-col items-center max-w-2xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div className="skill w-full" key={index}>
              <div className="skill-title font-semibold mb-2 text-white text-lg">{skill.name}</div>
              <div className="skill-bar w-full bg-gray-300 rounded-md overflow-hidden relative">
                <div 
                  className={`fill ${skill.bgColor} flex items-center justify-between pr-2 text-white font-bold`} 
                  style={{ width: `${skill.percent}%` }}
                >
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
