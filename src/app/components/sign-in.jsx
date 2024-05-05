//Button component to trigger Spotify user login
import { signIn } from "../api/auth/[...nextauth]/auth"
 
export function LoginButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("spotify")
      }}
    >
      <button type="submit">Signin with Spotify</button>
    </form>
  )
} 