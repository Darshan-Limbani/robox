import Footer from "../Components/Footer.jsx";

const PageWrapper = ({ children }) => {
  return (
    <div className={"flex flex-col items-center h-full overflow-scroll"}>
      {/*<div className={"h-full flex-1"}>*/}
        {children}
      {/*</div>*/}
      {/*<footer className={"h-auto flex justify-center"}>*/}
      {/*  <Footer/>*/}
      {/*</footer>*/}
    </div>
  );
};

export default PageWrapper;