import Footer from './Footer';
import Nav from './Nav';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-normal text-ink">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
