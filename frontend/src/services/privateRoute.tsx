import { RouteProps, Route, Redirect } from "react-router";

interface PrivateRouteProps extends RouteProps {
  component: React.FC<RouteProps>;
  path: string;
}

export default function PrivateRoute({
  component: Component,
  path,
}: PrivateRouteProps) {
  return (
    <Route
      path={path}
      render={(props) =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}