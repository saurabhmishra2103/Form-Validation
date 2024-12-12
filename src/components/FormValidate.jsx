import React, { useState } from 'react'
import '../../src/styles/formValidate.css';
import FormInput from './FormInput';


const FormValidate = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        DOB: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "dob",
            type: "date",
            placeholder: "DOB",
            label: "DOB",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8 characters and include atleast 1 letter, 1 number, 1 special character!",
            label: "Password",
            pattern: `?=^.{8,}$)((?=.*)|(?=.*+))(?![.])(?=.*[A-Z])(?=.*[a-z]).*$`,
            required: true
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true
        },
    ];



    const handleSubmit = (e) => {
        // e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    return (
        <>
            <div className='formValidate'>
                <form onSubmit={handleSubmit} method='post'>
                    <h1>Register</h1>
                    {inputs.map((input) => (
                        <FormInput key={inputs.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormValidate