import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <h1 className="font-inter text-center font-extrabold text-4xl pt-20 pb-10">
          404 - Error
        </h1>
        <h2 className="font-inter text-center ">
          There is nothing here. It either does not exist or is under
          construction.
        </h2>

        <div className="flex justify-center gap-10 mt-10">
          <Link
            to="/"
            className="px-4 py-2 bg-amber-400 rounded-md block w-fit font-bold"
          >
            Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-amber-400 rounded-md block w-fit font-bold"
          >
            Go back
          </button>
        </div>
      </main>
    </>
  );
}
export default ErrorPage;
