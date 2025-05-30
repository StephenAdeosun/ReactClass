
import Image from "../assets/react.svg"



const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
const StudentInfo = [
    {name: "Alice", age: 20, course: "Computer Science"},
    {name: "Bob", age: 22, course: "Mathematics"},
    {name: "Charlie", age: 21, course: "Physics"},
    {name: "David", age: 23, course: "Chemistry"},
    {name: "Eve", age: 19, course: "Biology"},
]


const Card = [
    {img:Image, title:"Calculator", description:"A calculator that performs basic arithmetic operations."}, 
    {img:Image, title:"Calculator", description:"A calculator that performs basic arithmetic operations."}, 
]

function StudentsInfo() {
  return (
    <div>
      <h1>Students</h1>


        {Card.map((card, index) => {
            return (
                <div key={index} style={{border: "1px solid black", margin: "10px",width:"120px", padding: "10px"}}>
                    <img src={card.img} alt="" />
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                </div>
            )

        })}


      <ul>
        {students.map((student, index) => {
          return <li key={index}>{student}</li>;
        })}
      </ul>
    </div>
  );
}

export default StudentsInfo;
