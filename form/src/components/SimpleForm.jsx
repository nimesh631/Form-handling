import { useState } from "react"

function SimpleForm() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:",email);
        console.log("Password:",password);

        setEmail('');
        setPassword('');
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2> Login </h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
    </form>
  )
}

export default SimpleForm