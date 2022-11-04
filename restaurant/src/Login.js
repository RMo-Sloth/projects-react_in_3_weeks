export default function Login() {
    console.log( "login" );

    function login(){
        console.log( "LOgging in" );
    }

    return (
        <>
            <h1>Login</h1>
            <label>Username</label>
            <input/>
            <label>Password</label>
            <input type="text"/>
            <button onClick={login}>Log in</button>
            <a href="/register">register</a>
        </>
    )
}