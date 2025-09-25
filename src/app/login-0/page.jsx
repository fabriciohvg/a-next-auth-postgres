import { LoginForm } from "@/components/login-form"
import TopNavbar from "@/components/my-top-navbar";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 max-w-md mx-auto">
      <TopNavbar />
      <div className="flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
