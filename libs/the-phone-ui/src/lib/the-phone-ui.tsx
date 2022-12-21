import styles from './the-phone-ui.module.scss';

/* eslint-disable-next-line */
export interface ThePhoneUiProps {}

export function ThePhoneUi(props: ThePhoneUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThePhoneUi!</h1>
    </div>
  );
}

export default ThePhoneUi;
