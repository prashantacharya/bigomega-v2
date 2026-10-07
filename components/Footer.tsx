import SocialMedia from './Socialmedia';

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Prashant Acharya
        </p>
        <SocialMedia className="-mr-2" />
      </div>
    </footer>
  );
};

export default Footer;
