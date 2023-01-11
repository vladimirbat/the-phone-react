import ShoppingcartIcon from '../shoppingcart-icon/shoppingcart-icon';
import { HEADER_EVENTS } from './app-header.const';
import './app-header.scss';

/* eslint-disable-next-line */
export interface AppHeaderProps {
  title: string;
  srcLogo: string;
  srcShoppingcart: string;
  headerOnClick: (eventName: HEADER_EVENTS) => void;
}

export function AppHeader(props: AppHeaderProps) {
  const { title, srcLogo, srcShoppingcart, headerOnClick } = props;
  const { SHOPPINGCART_ICON_CLICK, TITLE_CLICK, LOGO_ICON_CLICK } = HEADER_EVENTS;
  return (
    <div className="app-header container">
      <div className="logo-container cursor-pointer" onClick={() => headerOnClick(LOGO_ICON_CLICK)}>
        <img src={srcLogo} alt={`the application name is: ${title}`} />
      </div>
      <div className="title-container">
        <h1 className="cursor-pointer" onClick={() => headerOnClick(TITLE_CLICK)}>
          {title}
        </h1>
      </div>
      <ShoppingcartIcon srcShoppingcart={srcShoppingcart} shopingcartIconClick={() => headerOnClick(SHOPPINGCART_ICON_CLICK)} />
    </div>
  );
}

export default AppHeader;
