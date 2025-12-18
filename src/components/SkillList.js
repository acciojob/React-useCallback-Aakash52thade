import React, { useState, useCallback } from 'react';

// SkillList Component
const SkillList = ({ skills, onDeleteSkill }) => {
  return (
    <ul id="skill-list" style={{ listStyle: 'none', padding: 0 }}>
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          onClick={() => onDeleteSkill(skill)}
          style={{
            cursor: 'pointer',
            margin: '10px 0',
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '5px',
            display: 'inline-block',
            marginRight: '10px'
          }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

// UseCallbackComp Component
function UseCallbackComp() {
  const [inputValue, setInputValue] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  const handleDeleteSkill = useCallback((skillToDelete) => {
    setSkills(prevSkills => prevSkills.filter(skill => skill !== skillToDelete));
  }, []);

  const handleAddSkill = () => {
    const trimmedValue = inputValue.trim();
    
    if (trimmedValue === '') return;
    if (skills.includes(trimmedValue)) return;
    
    setSkills(prevSkills => [...prevSkills, trimmedValue]);
    setInputValue('');
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 id="heading" style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px'
      }}>
        Skills Manager
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          id="skill-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a skill"
          style={{
            padding: '10px',
            width: '70%',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        />
        
        <button 
          id="skill-add-btn" 
          onClick={handleAddSkill}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add Skill
        </button>
      </div>

      <SkillList skills={skills} onDeleteSkill={handleDeleteSkill} />
    </div>
  );
}

export default UseCallbackComp;