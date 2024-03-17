import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const Form = () => {

    const focusRef = useRef();

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const {userName, email, password, formState, onInputChange} = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    useEffect(() => {
        focusRef.current.focus();
    }, []).

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">User name</label>
                <input
                value={userName} 
                type="text" 
                className="form-control" 
                name="userName" 
                placeholder="Enter your Username" 
                onChange={onInputChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                ref={focusRef}
                value={email} 
                type="email" 
                className="form-control" 
                name="email" 
                placeholder="Enter you Email" 
                onChange={onInputChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                value={password} 
                type="password" 
                className="form-control" 
                name="password" 
                placeholder="Password" 
                onChange={onInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
