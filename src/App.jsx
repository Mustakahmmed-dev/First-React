
import './App.css'

function App() {
  return (
    <>
    <h1>The First React</h1>
    <Student name='Akbar' dept='Science'></Student>
    <Student name='Liakot' dept='Economic'></Student>
    <Student name='Shaykot' dept='Sports'></Student>
    

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


export default App
