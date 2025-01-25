import BottomFooter from "./BottomFooter";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <BottomFooter />
    </>
  );
}

export default Layout;
