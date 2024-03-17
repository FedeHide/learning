import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useForm } from "../hooks/useForm"

export const Login = () => {

    const initialForm = {
        name: '',
        tech: '',
        email: '',
        rrss: ''
    }

    const { formState, onInputChange ,name, tech, email, rrss } = useForm(initialForm);
    const {setUser} = useContext(UserContext);

    const onSubmit = (e) => {
        e.preventDefault();
        setUser(formState);
        alert('User registered');
    }

    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={onInputChange} value={name} type="text" className="form-control" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tech" className="form-label">Tech</label>
                    <input onChange={onInputChange} value={tech} type="text" className="form-control" name="tech" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={onInputChange} value={email} type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rrss" className="form-label">Redes</label>
                    <input onChange={onInputChange} value={rrss} type="text" className="form-control" name="rrss" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}
