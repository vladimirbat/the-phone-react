import { useEffect } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { WebRouterController } from '../../infrastructure/web-router-controller';
import styles from './app-navigate-provider.module.scss';

/* eslint-disable-next-line */
export interface AppNavigateProviderProps {}

export function AppNavigateProvider(props: AppNavigateProviderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    WebRouterController.setNavigate(navigate);
    WebRouterController.setLocation(location);
  }, []);
  return null;
}

export default AppNavigateProvider;
