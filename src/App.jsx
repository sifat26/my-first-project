/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Bookstore from "./Bookstore";


function App() {
  const books=[
    {id:1,
    name:'kolo',
    price:100},
    {id:2,
    name:'Physics',
    price:100},
    {id:3,
    name:'molo',
    price:100}
  ]
  const actors=["a", "b", "c", "d", "e"]
  const singers=[
    {
      name:'Kuta kuta',
      age:22
    },
    {
      name:'Kuta futa',
      age:24
    },
    {
      name:'Kuta fata',
      age:23
    }
  ]


  return (
    <>
    <Bookstore books={books}>

    </Bookstore>

    {
      singers.map(singer=><Singer sname={singer}></Singer>)
    }
    <Actor name="Bappa"> </Actor>
    {
      // eslint-disable-next-line react/jsx-key
      actors.map(actor =><Actor name={actor}></Actor>)
    }



      {/* <Header></Header> */}
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Explore core concept " isDone = {true} ></Todo>

      <Todo task="Learn JSX"isDone={true}> </Todo>
      <Device name="Laptop" price="3000"></Device>
      <Device name="Mobile" price="4000"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="A" Score="100"></Student>
      <Student grade="B" Score="250"></Student>
      <Developer></Developer>

      <h1 className="text-red">Vite + React</h1>
    </>
  );
}
function Person() {
  // const age=23;
  // const money =25;
  const person = {
    name: "sakib",
    age: 22,
  };
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Hellow {person.name} and his age {person.age}
      </h1>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function Student({ grade, Score }) {
  return (
    <div className="student">
      <p>Name: {grade}</p>
      <p>Age: {Score}</p>
    </div>
  );
}
function Developer() {
  const DeveloperStyle = {
    margin: "20px",
    padding: "20px",
    border: "3px solid black",
    borderRadius: "7px",
  };
  return (
    <div style={DeveloperStyle}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  );
}
function Device(props) {
  //  console.log(props);
  return (
    <div>
      <h2>
        This device : {props.name} And price{props.price}
      </h2>
    </div>
  );
}

export default App;
