"use server"

import { signIn, signOut } from "./auth"

export async function signInAction() {
  await signIn("google",{redirectTo:"/account"})
}

export async function signOutAction() {
  // Implement sign out logic here
  await signOut({redirectTo:"/"})
}
