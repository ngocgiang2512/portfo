import { lazy } from 'react'
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom';
import { DefaultRoute, Routes } from './routes';
import VerticalLayout from '@layouts/VerticalLayout';

const Router = () => {
  // ** Init Error Component
  const Error = lazy(() => import('@src/views/Error'))

  return (
    <AppRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return <Redirect to={DefaultRoute} />
          }}
        />
        {Routes.map(route => {
          return (
            <Route
              exact
              key={route.path}
              path={route.path}
              render={props => (
                <VerticalLayout>
                  <route.component />
                </VerticalLayout>
              )}
            />
          )
        })}
        {/* NotFound Error page */}
        <Route path='*' component={Error} />
      </Switch>
    </AppRouter>
  )
};

export default Router;