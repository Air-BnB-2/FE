import React, { useState, useEffect } from 'react';
import formSchema from './FormSchema';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
};

export default function Form() {

    const [formState, setFormState] = useState(initialFormValues)

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [users, setUsers] = useState([]);

    useEffect( () => {

        formSchema.isValid(formState).then( (valid) => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const validateChange = (event) => {
        yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then( (valid) => {
            setErrors({
                ...errors, 
                [event.target.name]: ''
            });
        })
        .catch( (err) => {
            setErrors({
                ...errors,
                [event.target.name]: err.errors
            });
        });
    };

    const formSubmit = (event) => {

        event.preventDefault();
        axios
        .post('https://reqres.in/api/users', formState)
        .then( (response) => {
            setUsers([...users, response.data]);
            console.log('success', response.data);

            setFormState(initialFormValues);
        })
        .catch( (err) => {
            console.log(err.response);
        });
    };

    const inputChange = (event) => {
        event.persist();

        const newFormData = {
            ...formState, 
            [event.target.name]:
                event.target.type === 'button' ? event.target.submit : event.target.value
        };
        validateChange(event);
        setFormState(newFormData)
    };
    
    return (
        <form onSubmit={formSubmit}>
            <div className='formInputs'>
                <label htmlFor='firstName'>
                    <input type='text' name='firstName' placeholder='First Name' value={formState.firstName} onChange={inputChange}/>
                    <p className ='errors'>{errors.firstName}</p>
                </label>
                <label htmlFor='lastName'>
                    <input type='text' name='lastName' placeholder='Last Name' value={formState.lastName} onChange={inputChange}/>
                    <p className ='errors'>{errors.lastName}</p>
                </label>
                <label htmlFor='username'>
                    <input type='text' name='username' placeholder='Username' value={formState.username} onChange={inputChange}/>
                    <p className ='errors'>{errors.username}</p>
                </label>
                <label htmlFor='email'>
                    <input type='text' name='email' placeholder='Email' value={formState.email} onChange={inputChange}/>
                    <p className ='errors'>{errors.email}</p>
                </label>
                <label htmlFor='password'>
                    <input type='text' name='password' placeholder='Password' value={formState.password} onChange={inputChange}/>
                    <p className ='errors'>{errors.password}</p>
                </label>
                <button disabled={buttonDisabled} name='submit'>Submit</button>
            </div>
        </form>
    )
};