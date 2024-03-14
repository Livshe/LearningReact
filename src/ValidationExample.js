import React, {useState} from "react";

function Validate(){

    const Form = () => {
        const initialValues = { email: "", password: "" };
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);
    }

        const myChangeHandler = (event) => {
            let nam = event.target.name;
            let val = event.target.value;
            if (nam === "age") {
                if (!Number(val)) {
                alert("Your age must be a number");
            }
        }
        this.setState({[nam]: val});
    }

    return (
        <div>
            <form>
            <input onChange={myChangeHandler}/>
            </form>
        </div>
    );
}

export default Validate;