import Footer from './Footer';
import Nav from './Nav';

const Wrapper = (props: any) => {
  return (
    <div className="bg-normal">
      <Nav />
      {props.children}

      <Footer />
    </div>
  );
};

export default Wrapper;
