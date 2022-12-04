import '../styles/globals.scss';
import Header from './(components)/(header)';
import Content from './(components)/(content)';

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <h1>welcome</h1>
        <h2>Projects</h2>
        <section>
          <Content />
        </section>
      </main>
    </>
  );
};

export default Page;
