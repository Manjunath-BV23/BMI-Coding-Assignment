import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(2);
  const [gender, setGender] = useState("")
  const [height, setHeight] = useState(24);
  const [weight, setWeight] = useState(0)
  const [cate, setCate] = useState("")

  const handleSubmit = () => {
   
    console.log("age: ", age ,"gender: ", gender, "height: ", height, "weight: ", weight)
    var h = (height*2.54)/100;

    var bmi = weight/h**2;
    console.log("BMI: ", bmi)

    if(gender == "male"){
      if(bmi <= 18.5){
        setCate("Underweight")
      }
      else if(bmi >= 18.5 && bmi <= 24.9){
        setCate("Normal weight")
      }
      else if(bmi >= 25 && bmi <= 29.9){
        setCate("Overweight")
      }
      if(bmi >= 30){
        setCate("Obesity")
      }
    }
    else if(gender == "male"){
      if(bmi <= 20.5){
        setCate("Underweight")
      }
      else if(bmi >= 20.5 && bmi <= 26.9){
        setCate("Normal weight")
      }
      else if(bmi >= 27 && bmi <= 31.9){
        setCate("Overweight")
      }
      if(bmi >= 32){
        setCate("Obesity")
      }
    }

    // alert("Result: ", cate)
  }

  
  return (
    <div className="App">
      <div>
      <label>
        Age:
        <input type="number" min={2} max={100} value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Height (inches):
        <input type="number" min={24} max={96} value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Compute</button>
      {<p> BMI Category is: {cate}</p>}
    </div>
    </div>
  );
}

export default App;
