import reactImg from '../assets/react-core-concepts.png'


const reactDescriptrions = ['Fundeamental','Crucial','Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
    const descrption = reactDescriptrions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom"></img>
        <h1>React Essentitals</h1>
        <p>
           {descrption} 加油把 React 練好真的完成自己的目標
        </p>
      </header>
    );
  }