import { LoginForm } from "@/components/login-form"
import {NavMain} from  "@/components/nav-main"

export default function Page() {
  return (
    <div className="b flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
