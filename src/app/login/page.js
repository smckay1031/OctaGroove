

export default function Login() {
    return (
        <main className="h-96 flex flex-col items-center justify-center">
            <h1 className="text-5xl my-10 font-bold font-Inter">Welcome to OctoGroove</h1>
            <form className="flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-semibold font-Inter">Login with Spotify</h2>
                <button className="flex my-5" type="submit">
                    <img src="" alt="Spotify" />
                    <p>Login</p>
                </button>
            </form>
        </main>
    )
}