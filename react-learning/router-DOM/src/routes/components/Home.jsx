import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const Home = () => {

    const { user } = useContext(UserContext)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Tech</th>
                    <th scope="col">Email</th>
                    <th scope="col">Redes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{user.name}</th>
                    <td>{user.tech}</td>
                    <td>{user.email}</td>
                    <td>{user.rrss}</td>
                </tr>
            </tbody>
        </table>
    )
}
