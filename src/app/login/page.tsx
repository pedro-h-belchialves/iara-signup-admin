import { LogoIcon } from "@/components/icons/logo";
import { LoginForm } from "./_components/form";

const Login = () => {
  return (
    <section className="h-screen w-screen bg-gray-100 flex flex-col gap-10 justify-center items-center">
      <LogoIcon className="text-blue-600" />
      <main className="w-full max-w-[400px] h-fit bg-white p-10 flex flex-col gap-8 rounded-xl border items-center border-gray-200 shadow-lg">
        <h1 className="text-xl font-semibold text-gray-700">
          Fazer login administrador
        </h1>

        <LoginForm />
      </main>
    </section>
  );
};

export default Login;
