import { signIn, signOut } from "auth"

export function SignIn({ provider }) {
  return (
    <form action={async () => {
        "use server"
        await signIn(provider)
      }}>
      <button className="bg-neutral-700 text-white p-2 rounded-md">
        Sign In with {provider}
      </button>
    </form>
  )
}

export function SignOut() {
  return (
    <form action={async () => {
        "use server"
        await signOut()
      }}>
      <button className="bg-neutral-700 text-white p-2 rounded-md">
        Sign Out
      </button>
    </form>
  )
}