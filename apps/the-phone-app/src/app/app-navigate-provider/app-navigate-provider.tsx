import { useNavigate } from 'react-router';
import { WebRouterController } from '../../infrastructure/web-router-controller';
import styles from './app-navigate-provider.module.scss';

/* eslint-disable-next-line */
export interface AppNavigateProviderProps {}

export function AppNavigateProvider(props: AppNavigateProviderProps) {
  const navigate = useNavigate();
  WebRouterController.setNavigate(navigate);
  return null;
}

export default AppNavigateProvider;
