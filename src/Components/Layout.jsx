import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[360px] bg-white">
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout; 