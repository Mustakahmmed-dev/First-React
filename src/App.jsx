
import './App.css';
import Books from './Books';
import Actor from './Actor';
import Singer from './Singer';

function App() {
  const actors = ["Jampi", "Jacky", "Luckky", "Ohay", "Termia"];

  const singers = [
    {id: 1, name: "James", age: 43, country: "United States"},
    {id: 2, name: "Hurry", age: 87, country: "United States"},
    {id: 3, name: "Torry", age: 45, country: "United States"},
    {id: 4, name: "Harris", age: 21, country: "United Arab Emirates"},
  ];

  return (
    <>
    <h1>The First React</h1>

    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }

    {/* <p> Total: {actors.length} </p>
    {
      actors.map(actor => <Actor actor={actor} ></Actor>)
    } */}


    {/* <Student name='Akbar' dept='Science'></Student>
    <Student name='Liakot' dept='Economic'></Student>
    <Student name='Shaykot' dept='Sports'></Student>
    <Developer name='Soyed' tech='JS, Java' occu='Software Engineer'></Developer>
    <Developer name='Jayed' tech='Java, C' occu='Software Engineer'></Developer>
    <Developer name='Foyez' tech='Python, Java' occu='DevOps Engineer'></Developer> */}

      {/* <Books name='JS' price={200} available={true}></Books>
      <Books name='C++' price={500} available={false}></Books>
      <Books name='Python' price={900} available={true}></Books>
      <Books name='JS Bangla' price={250} available={true}></Books>
      <Books name='JS Bangla' price={250} available={true}></Books> */}



    </>
  )
}

function Student(props){
  const names = ["Jashim", "Karim", "Akbar", "Liakot", "Shaikot"];
  const age = 20;

  const studentStyles = {
    border: "3px solid red",
    padding: "10px",
    borderRadius: "20px",
    marginBottom: "20px"
  }
  return (
    <div style={studentStyles}>

      <h2> Name: {props.name}  </h2>
      <p>Department: {props.dept} </p>
      <p>Age: {age} </p>

    </div>
    
  )
}

function Developer({name, tech, occu}){

  return (
    <div>
      <h2>Name: {name} </h2>
      <h4>Technologies: {tech} </h4>
      <h4>Occupation: 
        {occu == "Software Engineer" ? <p> {occu}, Good Choice </p> : <p> {occu} Not bad</p> }
      </h4>
    </div>
  )
}

export default App
