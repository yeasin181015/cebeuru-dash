import { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error }: FallbackProps) => {
  if (import.meta.env.DEV) {
    return (
      <div
        className="flex h-screen w-screen flex-col items-center justify-center"
        role="alert"
      >
        <div className="mx-auto max-w-xl px-1 text-danger-500">
          <h2 className="text-lg font-semibold">{error.message} </h2>
          <p className="max-h-[400px] overflow-auto">{error.stack}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center"
      role="alert"
    >
      <div className="flex items-center divide-x divide-gray-600">
        <p className="text-2xl font-bold px-2">Error</p>
        <p className="px-2">An unknown error occured</p>
      </div>
    </div>
  );
};

export default ErrorFallback;
