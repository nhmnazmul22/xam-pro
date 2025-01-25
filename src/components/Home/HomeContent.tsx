import Layout from "../Layout/Layout";
import Counter from "./Counter";
import Features from "./Features";
import Header from "./Header";

function HomeContent() {
  return (
    <Layout>
      <Header />
      <Counter />
      <Features />
    </Layout>
  );
}

export default HomeContent;
