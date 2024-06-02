import {signIn} from "../../auth";

export function SignIn() {
    retrun (
        <form action={async () => {
            'use server'
            await signIn()
        }}
        >
            <button type="submit"> Login </button>
        </form>
    )
}