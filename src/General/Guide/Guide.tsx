import styles from './guide.module.css';

export function Guide() {
  return (
    <div className={styles.guide_block}>
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
