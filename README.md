# Pomodoro timer

В данном приложении я реализовал таймер Помодоро
> Метод помодоро помогает увеличивать продуктивность и 
делать большее количество дел за меньшее количество времени.

### Описание

Существует множество подобных таймеров, но в большинстве из них ~~жадные разрабы~~ платная персонализация. В моем приложении есть несколько преимуществ по сравнению с остальными:

- Настройка рабочего времени/перерыва/большого перерыва
- Выбор количества кругов перед большим перерывом
- Включение выключение звуковых/визуальных уведомлений
- Todo лист позволяющий управлять задачами
- Ночная тема
- Статистика активности за 3 недели

Пощупать можно [тут](https://pomodoro-timer-seven-beta.vercel.app)

### Технологии

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://ru.legacy.reactjs.org) [![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/introduction/getting-started) [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/en/starter/installing.html) [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main/start/tutorial)

[react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) / [react-timer-hook](https://www.npmjs.com/package/react-timer-hook) / [redux-persist](https://www.npmjs.com/package/redux-persist) / [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

### Использовать локально

Для использования локально скачайте репозиторий 
```
cd pomodoro_timer
npm install
npm run build
node server/server.js
```

Приложение откроется [локально](http://localhost:3000)
(порт 3000 меняется в server/server.js)

### Что можно исправить

Статистика текущей недели переносится только в понедельник, для корректного переноса данных с текущей недели на прошлую, нужно зайти в приложение в понедельник

---
Спасибо за ценные советы и тестирование 
- [@bukomp](https://github.com/bukomp)
- [@SawGoD](https://github.com/SawGoD)