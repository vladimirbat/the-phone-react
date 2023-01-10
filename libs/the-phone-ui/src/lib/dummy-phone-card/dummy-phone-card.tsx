import './dummy-phone-card.scss';

/* eslint-disable-next-line */
export interface DummyPhoneCardProps {}

export function DummyPhoneCard(props: DummyPhoneCardProps) {
  return (
    <div className="dummy-phone-card">
      <div className="image-container"></div>
      <div className="description-container">
        <div className="dummy-text"></div>
        <div className="dummy-text"></div>
        <div className="dummy-text"></div>
        <div className="phone-colors-container mt-1">
          <div className="phone-color"></div>
          <div className="phone-color"></div>
          <div className="phone-color"></div>
          <div className="phone-color"></div>
        </div>
      </div>
    </div>
  );
}

export default DummyPhoneCard;
