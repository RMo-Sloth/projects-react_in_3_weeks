export default function Login() {
    console.log( "login" );
    return (
        <>
            <h1>Login</h1>
            <label>Username</label>
            <input/>
            <label>Password</label>
            <input type="text"/>
            <button>Log in</button>
            <a href="/register">register</a>
        </>
    )
}