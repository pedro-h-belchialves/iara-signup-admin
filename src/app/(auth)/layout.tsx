import { Sidebar } from "./_components/sidebat";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen w-screen overflow-hidden grid grid-cols-12">
      <Sidebar />
      <main className="col-span-11 w-full h-screen overflow-scroll p-10 ">
        {children}
      </main>
    </section>
  );
};

export default AuthLayout;
