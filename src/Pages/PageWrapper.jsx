const PageWrapper = ({ children }) => {
  return (
    <div className={"flex justify-center"}>
      {children}
    </div>
  );
};

export default PageWrapper;