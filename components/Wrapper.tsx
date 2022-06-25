import Nav from './Nav';

const Wrapper = (props: any) => {
  return (
    <div className="bg-normal">
      <Nav />
      {props.children}
    </div>
  );
};

export default Wrapper;
