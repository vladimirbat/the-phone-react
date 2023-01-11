import './alert-modal.scss';

export interface AlertModalProps {
  title: string;
  text: string;
  closeEvent: () => void;
}

export function AlertModal(props: AlertModalProps) {
  const { title, text, closeEvent } = props;
  const aceptar = () => {
    closeEvent();
  };
  return (
    <div className="alert-modal">
      <div className="modal-background">
        <div className="modal-canvas">
          <h3>{title}</h3>
          <div className="text">{text}</div>
          <div className="accept-area mt-6">
            <button onClick={() => aceptar()}>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertModal;
