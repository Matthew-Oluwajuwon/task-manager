import Footer from "./Footer";
import Header from "./Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="h-[100svh] bg-bg-color flex flex-col">
      <Header />
      <main className="p-5 flex-1 grid grid-rows-[3rem_1fr] overflow-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
