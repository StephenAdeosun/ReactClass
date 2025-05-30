const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Alice"];

const StudentInfo = [
    {name: "Alice", age: 20, course: "Computer Science"},
    {name: "Bob", age: 22, course: "Mathematics"},
    {name: "Charlie", age: 21, course: "Physics"},
    {name: "David", age: 23, course: "Chemistry"},
]

const userFilter = users.filter((user) => user=== "Alice");

function Users (){
    return (
        <div>

        {/* map over  StudentInfo */}
            <h1>These are objects from an array</h1>
            {StudentInfo.map((student,index)=>{
                return (
                    <div key={index} style={{border: "1px solid black", margin: "10px",width:"120px", padding: "10px"}}>
                        <h2>{student.name}</h2>
                        <p>Age: {student.age}</p>
                        <p>Course: {student.course}</p>
                    </div>
                )
            })}

            
            <h1>These are lists from an array</h1>
            <ul>
                {users.map((user, index) =>{
                    return (
                        <li key={index}>{user}</li>
                    )
                   
                })}
            </ul>

            <h1>These are filters from an array</h1>
                {userFilter.map((user, index) => {
                    return (
                        <li key={index}>{user}</li>
                    )
                }
                )}

        </div>
    )

}

export default  Users;

{users.map((user, index)=>{
    return(
        <li key={index}>{user}</li>
    )
}

)}