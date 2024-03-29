import { useDispatch, useSelector } from 'react-redux';
import styles from './guide.module.css';
import { AppDispatch, RootState } from '../../states/store';
import { hideText } from '../../states/taskInputSlice';
import { useEffect } from 'react';

export function Guide() {
  const dispatch = useDispatch<AppDispatch>()
  const inputChange = useSelector((state: RootState) => state.inputChange)
  const taskList = useSelector((state: RootState) => state.taskList)
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode)


  useEffect(() => {
    taskList.value.length != 0 ? dispatch(hideText(true)) : dispatch(hideText(false));
  },[taskList])

    return (
      <div id='guide_block' className={!inputChange.textState ? '' : 'dn'}>
        <h3 className={styles.title}>Ура! Теперь можно начать работать:</h3>
        <ul>
          <li className={darkmode ? styles.list_item : styles.list_item_dark}><span className={styles.marker}>•</span>Выберите категорию и напишите название текущей задачи</li>
          <li className={darkmode ? styles.list_item : styles.list_item_dark}><span className={styles.marker}>•</span>Запустите таймер («помидор»)</li>
          <li className={darkmode ? styles.list_item : styles.list_item_dark}><span className={styles.marker}>•</span>Работайте пока «помидор» не прозвонит</li>
          <li className={darkmode ? styles.list_item : styles.list_item_dark}><span className={styles.marker}>•</span>Сделайте короткий перерыв (3-5 минут)</li>
          <li className={darkmode ? styles.list_item : styles.list_item_dark}><span className={styles.marker}>•</span>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</li>
        </ul>
      </div>
    );
  }
  
