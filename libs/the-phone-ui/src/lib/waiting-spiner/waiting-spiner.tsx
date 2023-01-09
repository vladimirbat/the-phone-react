import './waiting-spiner.scss';

export interface WaitingSpinerProps {
  condition: boolean;
}

export function WaitingSpiner(props: WaitingSpinerProps) {
  const { condition } = props;
  return condition ? renderSpinner() : null;
}

function renderSpinner() {
  return (
    <div className="waiting-spinner">
      <img src="/spinner.gif" alt="loading ..." />
    </div>
  );
}

export default WaitingSpiner;
