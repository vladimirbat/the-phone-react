import ShoppingcartIcon from '../shoppingcart-icon/shoppingcart-icon';
import './app-header.scss';

/* eslint-disable-next-line */
export interface AppHeaderProps {
  title: string;
  srcLogo: string;
  srcShoppingcart: string;
}

export function AppHeader(props: AppHeaderProps) {
  const { title, srcLogo, srcShoppingcart } = props;
  return (
    <div className="app-header container">
      <div className="logo-container">
        <img src={srcLogo} alt={`the application name is: ${title}`} />
      </div>
      <div className="title-container">
        <h1>{title}</h1>
      </div>
      <ShoppingcartIcon srcShoppingcart={srcShoppingcart} />
    </div>
  );
}

export default AppHeader;
