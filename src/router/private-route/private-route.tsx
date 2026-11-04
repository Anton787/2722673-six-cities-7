import {Navigate} from 'react-router-dom';
import {AppPath} from '@router/paths';

type PrivateRouteProps = {
  isAuthorized: boolean;
  children: JSX.Element;
};

function PrivateRoute({isAuthorized, children}: PrivateRouteProps) {
  return isAuthorized ? children : <Navigate to={AppPath.login} replace />;
}

export default PrivateRoute;
