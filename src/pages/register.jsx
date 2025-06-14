import Form from "../components/form";
import UserContext from "../components/Context";
import { useContext } from "react";

function Register() {
    const {user , dark  } = useContext(UserContext)
    return (
        <div className={`flex flex-col items-center justify-center h-screen ${
                  dark === "dark" ? "text-white bg-black" : "text-black bg-white"
  
        }`}>
            <h1 className="text-3xl font-bold mb-4">Register</h1>
            <Form />
        </div>
    );
}

export default Register;