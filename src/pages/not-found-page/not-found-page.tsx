import {Link} from 'react-router-dom';
import {AppPath} from '@router/paths';

function NotFoundPage() {
  return (
    <div className="page page--gray">
      <main className="page__main container">
        <h1>404 Not Found</h1>
        <p>Страница, которую вы ищете, не существует.</p>
        <Link to={AppPath.main}>Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default NotFoundPage;
