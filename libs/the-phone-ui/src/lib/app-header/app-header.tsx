import './app-header.scss';

/* eslint-disable-next-line */
export interface AppHeaderProps {
  title: string;
  srcLogo: string;
}

export function AppHeader(props: AppHeaderProps) {
  const { title, srcLogo } = props;
  return (
    <div className="app-header container">
      <div className="logo-container">
        <img src={srcLogo} alt={`the application name is: ${title}`} />
      </div>
      <div className="title-container">
        <h1>{title}</h1>
      </div>
      <div className="logo-container">
        <img src={srcLogo} alt={`the application name is: ${title}`} />
      </div>
    </div>
  );
}

export default AppHeader;
