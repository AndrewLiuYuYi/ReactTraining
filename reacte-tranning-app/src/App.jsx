import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/Tabutton.jsx'
import { EXAMPLES } from './data.js'

function App() {
  const [ selectedTopic, setselectedTopic ] = useState();

  function handleSelect(onClickButton){
    setselectedTopic(onClickButton);
  }

  let tabContext = <p>Please seletct a topic.</p>;

  if(selectedTopic){
    tabContext = <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p> {EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }

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
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} /> )}
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContext}

        </section>
      </main>

    </>
  )
}

export default App
