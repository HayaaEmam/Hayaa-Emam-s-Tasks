import '../styles/Home.module.css'
import React, {useState} from "react";

  
  
const DefaultState = () => {
  //setting default state = 0
  const [counter, setCounter] = React.useState(0);;
  
  //function for the + button
  const increase = () => {
    setCounter(counter + 1)
  }
  
//function for the - button
  const decrease = () => {
    setCounter(counter - 1)
  }

  //styles (CSS)
  const styles ={
div:{
  width: "30vw",
  margin: "30vh auto",
},

h1:{
  fontFamily: "sans-serif",
  fontSize: "5vh",
  color: "#fff",
},

h2:{
  fontFamily: "sans-serif",
  fontSize: "4vh",
  color: "#fff",

},

div2:{
  display:"flex",
  justifyContent:"space-evenly"
},

btn:{
  borderRadius: "100%",
  width: "3vw",
  height: "3vw",
  fontSize: "4vh",
  border: "none"


}
  }

  //HTML elements
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>React Counter App</h1>
        <h2 style={styles.h2}>{counter}</h2>
        <div style={styles.div2}>
        <button onClick={increase} style={styles.btn}>+</button>
        <button onClick={decrease} style={styles.btn}>-</button>
      </div>
      </div>
  )
}
  

export default DefaultState
