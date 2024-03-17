import { Navbar } from "./routes/components/Navbar";
import { Home } from "./routes/components/Home";
import { About } from "./routes/components/About";
import { Contact } from "./routes/components/Contact";
import { Login } from "./routes/components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./routes/context/UserProvider";

export const App = () => {
    return (
        <UserProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Navigate to='/' />} />
            </Routes>
        </UserProvider>
    )
}
