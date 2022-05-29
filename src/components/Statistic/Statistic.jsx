import styles from './section.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={styles.statistics}>
        {title && <h2 className={styles.subtitle}>{title}</h2>}

        <ul className={styles.list}>
          {stats.map(element => (
            <li className={styles.item}>
              <span className={styles.label}>{element.label}</span>
              <span className={styles.percentage}>{element.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
