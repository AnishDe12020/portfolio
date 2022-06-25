import Link from "@/components/Shared/Link";

function Error({ statusCode }) {
  return (
    <div className="mt-16 mb-96 flex flex-col items-center justify-center">
      {statusCode ? (
        <h1 className="text-center text-6xl font-bold">
          {statusCode}
          {statusCode === 404
            ? " Page Not Found"
            : statusCode === 500
            ? " Server Error"
            : ""}
        </h1>
      ) : (
        <h1 className="text-center text-6xl font-bold">
          A client side error occured.
        </h1>
      )}
      <Link
        noHighlight
        noExternalLinkIcon
        noGradientUnderline
        href="/"
        className="my-16 rounded-lg border-[1px] border-tertiary bg-secondary px-4 py-2"
      >
        Go Home
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
