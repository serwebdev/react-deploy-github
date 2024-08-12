import { useLocation, useRouteError } from 'react-router-dom';

interface IError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as IError;

  const location = useLocation();

  console.error('error:', error);
  console.log('location:', location);
  console.log('window.location.href:', window.location.href);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
