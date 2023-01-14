import { DetailedHTMLFactory } from 'react';
import { Search } from 'react-router';
import './app-breadcumb.scss';

export interface AppBreadcumbProps {
  breadcumbLevels?: string[];
  level: number;
  goToView: (view: string) => void;
}

export function AppBreadcumb(props: AppBreadcumbProps) {
  const { level, goToView } = props;
  const breadcumbLevels = props.breadcumbLevels ? props.breadcumbLevels : defaultBreadcumbLevels;
  return (
    <div className="app-breadcumb">
      <ul className="breadcrumb">
        {renderUlContent(breadcumbLevels, level, goToView)}
        <li>{breadcumbLevels[level]}</li>
      </ul>
    </div>
  );
}

export default AppBreadcumb;

function renderUlContent(breadcumLevels: string[], level: number, goToView: (view: string) => void) {
  const levels = [...breadcumLevels];
  levels.splice(level);
  return <>{renderLevels(levels, goToView)}</>;
}

function renderLevels(levels: string[], goToView: (view: string) => void) {
  return levels.map((bread) => (
    <li key={bread}>
      <a onClick={() => goToView(bread)}>{bread}</a>
    </li>
  ));
}

export const defaultBreadcumbLevels = ['Search', 'Detail', 'Shoppingcart'];
