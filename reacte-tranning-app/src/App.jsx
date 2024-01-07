import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx'



function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </li>
  );
}

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <main>
        <section id="core-concepts">
          <h2>
            Core Concepts
          </h2>
          <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} 
                        description={CORE_CONCEPTS[0].description} 
                        image={CORE_CONCEPTS[1].image}/>
          <CoreConcept title={CORE_CONCEPTS[1].title} 
                        description={CORE_CONCEPTS[1].description} 
                        image={CORE_CONCEPTS[1].image}/>
          <CoreConcept title={CORE_CONCEPTS[2].title} 
                        description={CORE_CONCEPTS[2].description} 
                        image={CORE_CONCEPTS[2].image}/>
          <CoreConcept title={CORE_CONCEPTS[3].title} 
                        description={CORE_CONCEPTS[3].description} 
                        image={CORE_CONCEPTS[3].image}/>            
          </ul>
        </section>
      </main>

    </>
  )
}

export default App
