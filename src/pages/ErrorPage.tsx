import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate(-1), 3000);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <h1 className="font-inter text-center font-extrabold text-4xl pt-20 pb-10">
          404 - Error
        </h1>
        <h2 className="font-inter text-center ">
          There is nothing here. Redirecting you to your previous page...
        </h2>
      </main>
    </>
  );
}
export default ErrorPage;
