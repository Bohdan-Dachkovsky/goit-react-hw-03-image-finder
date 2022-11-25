import css from './imageGallery.module.css'
import PropTypes from 'prop-types'

const ImagineGallery = ({ onShow, items, error, basement, children }) => {
  const photos = (items || []).map(
    ({ id, largeImageURL, webformatURL, tags }) => (
      <div
        key={id}
        onClick={() => onShow({ largeImageURL, tags })}
        className={css.box}
      >
        <ul className={css.list}>
          <li key={tags} className={css.el}>
            <img src={webformatURL} alt={tags} />
          </li>
        </ul>
      </div>
    ),
  )
  return (
    <div className={css.distance}>
      {error && console.log('Виникла помилка, cпробуйте будь ласка пізніше')}

      <div className={css.miniContainer}>{Boolean(items.length) && photos}</div>
      {children}
      <div className="pageButton">{basement}</div>
    </div>
  )
}
export default ImagineGallery
ImagineGallery.defaultProps = {
  searchName: '',
}

ImagineGallery.propTypes = {
  items: PropTypes.array.isRequired,
  error: PropTypes.string,
  onLoader: PropTypes.func.isRequired,
  onBox: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
}
