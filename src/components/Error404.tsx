import Head from "./Head";

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Ceburu | 404</title>
      </Head>
      <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-6xl font-bold text-primary-500">404</p>
          <p className="mt-2 text-lg font-semibold">Sorry! Page not found</p>
          <p className="text-sm">The page you requested was not found</p>
        </div>
      </main>
    </>
  );
};

export default Error404;
