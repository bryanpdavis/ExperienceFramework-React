import { useState, useEffect } from 'react';
import Components from '../../components/ExperienceBase';
import data from '../../configs/pages/home'



function App() {
  
  return (
      <div className="App">
        {data.content.body.map(experiencebase => Components(experiencebase))}
      </div>
  );
}

export default App;
