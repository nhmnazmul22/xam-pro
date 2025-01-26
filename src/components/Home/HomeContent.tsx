import Layout from "../Layout/Layout";
import Counter from "./Counter";
import Courses from "./Courses";
import Features from "./Features";
import Header from "./Header";
import Services from "./Services";

function HomeContent() {
  return (
    <Layout>
      <Header />
      <Counter />
      <Features />
      <Courses />
      <Services />
    </Layout>
  );
}

export default HomeContent;
