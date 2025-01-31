import Layout from "../Layout/Layout";
import Counter from "./Counter";
import Courses from "./Courses";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import PackageBanner from "./PackageBanner";
import Services from "./Services";

function HomeContent() {
  return (
    <Layout>
      <Header />
      <Counter />
      <Features />
      <Courses />
      <Services />
      <PackageBanner />
      <Footer />
    </Layout>
  );
}

export default HomeContent;
