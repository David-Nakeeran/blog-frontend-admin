import {useState, useId} from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const id = useId(); // Generates unique id for accessibility attributes

    // Keeps state and form in sync
    function handleChange(e) {
        const {name, value} = e.target;
        return setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            };
        });
    };

    // handleSubmit function
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const serialiseBody = JSON.stringify(formData);
            const fetchOptions = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: serialiseBody
        }
            const response = await fetch('http://localhost:3000/login', fetchOptions);

            if(!response.ok) {
                throw new Error(`HTTP error, status: ${response.status}`)
            }

            const data = await response.json();
            console.log(data);

        }   catch(error) {
            console.error('There was a problem with the fetch operation:', error)
        }
        
    }
    
    // TODO
    // 1. store token in localstorage
    // 2. navigate to adminDashboard
    // 3. After submit clear state

    return (
        <div className='login-container'>
            <h1>Admin sign in</h1>
            <form onSubmit={handleSubmit} method='POST'>
                <label htmlFor={`${id}-username`}>Your email</label>
                <input 
                type='email'
                id={`${id}-username`}
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                <label htmlFor={`${id}-password`}>Your password</label>
                <input 
                type='password'
                id={`${id}-password`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}