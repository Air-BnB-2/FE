import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';

function Login (props) {
    const {values} = props;

    const initialFormValues = {
        username: '',
        password: ''
      }
    
      const [users, setUsers] = useState([])
      const [formState, setFormState] = useState(initialFormValues)
      const [buttonDisabled, setButtonDisabled] = useState(true)
      const [formErrors, setFormErrors] = useState(initialFormValues)

      // validation
      const formSchema = yup.object().shape({
          username: yup
          .string()
          .min(3, "username must be longer than 3 characters")
          .required("Username is a required field"),
          password: yup
          .string()
          .min(3, "password must be longer than 3 characters")
          .required("Password is a required field")
      })

      useEffect(() => {
          formSchema.isValid(formState)
            .then((valid) => {
                setButtonDisabled(!valid)
            });
      }, [formState])

    const validateChange = (event) => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then((valid) => {
                setFormErrors({
                    ...formErrors,
                    [event.target.name]: ''
                });
            })
            .catch((error) => {
                setFormErrors({
                    ...formErrors,
                    [event.target.name]: error.formErrors
                })
            });
    }   

        const formSubmit = event => {
            event.preventDefault()
            axios.post('https://reqres.in/api/users', formState)
            .then((response) => {
                setUsers([...users, response.data])
                console.log(response.data)

                setFormState(initialFormValues)
            })
            .catch((error) => {
                console.log(error.response)
            });
        };

        const onInputChange = (event) => {
            event.persist();
            const newFormData = {
                ...formState,
                [event.target.name]: 
                event.target.type === 'submit' ? event.target.submit : event.target.value
            }
            validateChange(event)
            setFormState(newFormData)
        }

    return (

        <form className='form-container' onSubmit={formSubmit}>
            <label htmlFor='username'> Username: &nbsp;
                <input id='username'
                    value={formState.username}
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={onInputChange}
                />
            </label>
            <label htmlFor='password'> Password: &nbsp;
                <input id='password'
                    value={formState.password}
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={onInputChange}
                />
            </label>
            <button id='submitBtn' disabled={buttonDisabled} type='submit'>Submit</button>
        </form>
    )
}

export default Login;