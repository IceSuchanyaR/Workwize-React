import React, { Component } from 'react';
import logo from './56595.jpg';
import pig1 from './1p.jpg';
import pig2 from './2p.jpg';
import pig3 from './22.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="app-left">
        <img src={logo} className="App-logo" alt="logo" />
    <h1>Suchanya Roekplian</h1>
    
                <h2>EDUCATION</h2>
              
                    <p>King Mongkut's Institute of Technology Ladkrabang , Bangkok , Thailand</p> 
      <p>Faculty of science in Applied Mathematics.</p>
          <p>GPA: 3.19</p>
          <h2 >CONTACT ME</h2>
      <p>Address  : 166/16 , Chalongkrung Road ,LadKrabang,Bangkok  10520 </p>
      <p>Email    : suchanya.ro@gmail.com</p>
      <p>Tel      :  096-7104026 </p>
      <p>facebook : Ice'Suchanya Roekplian</p>
       
   
<h2 >WORK  EXPERIENCE</h2>
<h3>INTERNSHIP</h3>
<p>- Internship Prpgrammer in General Electronic Commerce Services Co. ltd </p>
            <h3>PART-TIME JOB</h3>
            <p>- I had an experience working as part-time job at seven-eleven </p>
            <h3>TUTOR</h3>
            <p>-  Teaching mathematical logic for primary students</p>
            <p>-  Teaching mathematical for university entrance </p> */}
            </div>
            <div className="app-right">
        <h2 >TECHNICAL SKILLS</h2>  
        <p>JAVA</p>
  <div className="skills java">90%</div>
        <p>HTML</p>
  <div className="skills html">90%</div>
<p>CSS</p>
  <div className="skills css">80%</div>
<p>BOOTSTRAP</p>
  <div className="skills css">80%</div>
<p>JAVASCRIPT</p>
<div class="container">
  <div className="skills js">65%</div>
</div>
<p>ORACLE</p>
<div class="container">
  <div className="skills oracle">50%</div>
</div>

<p>MySQL</p>
<div class="container">
  <div className="skills sql">60%</div>
</div>
<h1 class="margin">INTERESTS</h1>       
            <h3>Travel , Photography , Music , Paint Design </h3><br></br>
            <div className="flex-container" >
            <img src={pig1} className="pig" alt="logo" />
            <img src={pig2} className="pig" alt="logo" />
            <img src={pig3} className="pig" alt="logo" />                                    
            </div>
      </div>
      </div>
    );
  }
}

export default App;
