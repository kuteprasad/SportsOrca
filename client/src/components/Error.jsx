const Error = ({error}) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default Error;
