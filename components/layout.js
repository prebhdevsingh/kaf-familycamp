import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className=" has-navbar-fixed-top">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}