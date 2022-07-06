import { createPortal } from 'react-dom';
import Button from '../Button/Button.jsx';
import css from './popup.module.css';
const nodeModal = document.getElementById('another-root');
const NativeModal = ({ button }) => {
  return createPortal(
    <div className={css.popup}>
      <div className={css.overlay}>
        <div className={css.formBody}>
          <Button onClick={button}>x</Button>
          <img src="" alt="" loading="eager" />
        </div>
      </div>
    </div>,
    nodeModal
  );
};
export default NativeModal;
