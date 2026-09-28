import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
