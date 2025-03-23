
import './App.css'

function App() {
  return (
    <>
    <h1>The First React</h1>
    <Student name='Akbar' dept='Science'></Student>
    <Student name='Liakot' dept='Economic'></Student>
    <Student name='Shaykot' dept='Sports'></Student>
    <Developer name='Soyed' tech='JS, Java' occu='Software Engineer'></Developer>
    <Developer name='Jayed' tech='Java, C' occu='Software Engineer'></Developer>
    <Developer name='Foyez' tech='Python, Java' occu='DevOps Engineer'></Developer>

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
      <h4>Occupation: {occu} </h4>
    </div>
  )
}

export default App
