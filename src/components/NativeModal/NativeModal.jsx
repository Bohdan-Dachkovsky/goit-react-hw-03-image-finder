import Button from '../Button/Button.jsx';
import css from './popup.module.css';

const NativeModal = ({ button }) => {
  return (
    <div className={css.popup}>
      <div className={css.overlay}>
        <div className={css.formBody}>
          <Button onClick={button}>x</Button>
          <img src="" alt="" loading="eager" />
        </div>
      </div>
    </div>
  );
};
export default NativeModal;
