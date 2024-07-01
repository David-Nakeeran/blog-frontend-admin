import {useState, useId} from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const id = useId();

    // handleChange function

    // handleSubmit function

    return (
        <div className='login-container'>
            <h1>Admin sign in</h1>
            <form>
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