const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-3">
        <p className="font-bold text-2xl">404</p>
        <p className="border-r"></p>
        <p className="text-2xl">This page could not be found.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
