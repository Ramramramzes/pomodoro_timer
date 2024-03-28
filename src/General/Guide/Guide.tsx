import { useSelector } from 'react-redux';
import styles from './guide.module.css';
import { RootState } from '../../states/store';

export function Guide() {
  const inputChange = useSelector((state: RootState) => state.inputChange)
  
    return (
      <div className={!inputChange.textState ? styles.guide_block : ' dn'}>
        <h3 className={styles.title}>Ура! Теперь можно начать работать:</h3>
        <ul>
          <li className={styles.list_item}><span className={styles.marker}>•</span>Выберите категорию и напишите название текущей задачи</li>
          <li className={styles.list_item}><span className={styles.marker}>•</span>Запустите таймер («помидор»)</li>
          <li className={styles.list_item}><span className={styles.marker}>•</span>Работайте пока «помидор» не прозвонит</li>
          <li className={styles.list_item}><span className={styles.marker}>•</span>Сделайте короткий перерыв (3-5 минут)</li>
          <li className={styles.list_item}><span className={styles.marker}>•</span>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</li>
        </ul>
      </div>
    );
  }
  
