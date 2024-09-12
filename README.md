# Seller Personal Account

<h2>Оглавление</h2>
<ol>
  <li><a href="#project-description">Описание проекта</a></li>
  <li><a href="#technologies">Стек технологий</a></li>
  <li><a href="#installation">Установка и запуск приложения</a></li>
  <li><a href="#arch">Архитектура</a></li>
  <li><a href="#problems">Проблемы</a></li>
  <li><a href="#enhancement">Статус</a></li>
</ol>


<h2 id="project-description">1. Описание проекта</h2>
Проект Seller Personal Account- это личный кабинет продавца на торговой площадке, где вы можете управлять своими объявлениями и заказами.

<h2 id="technologies">2. Используемый стек технологий</h2>
<ul>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg"  title="Jest" alt="Jest" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg"  title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="Webpack" alt="Webpack" width="40" height="40"/>&nbsp;
  <img src="https://v4.mui.com/static/logo.png" title="MUI" alt="Material UI" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
</ul>

## Запуск проекта

```
npm install - Установка зависимостей
npm run dev - Запуск проекта на лольном сервере c помощью webpackcode
npm run start:dev - Запуск json-servera с захардкоженными данными
```

----

<h2 id="installation">3. Установка и запуск</h2>
 <span>Клонирование проекта</span>

- `https://github.com/munchedbox23/seller-personal-account.git` - clone project
- `npm install` - Установка зависимостей
- `npm run dev` - Запуск проекта на лольном сервере c помощью webpack .
- `npm run dev:server` - Запуск json-servera с захардкоженными данными .
- `npm run build:prod` - Полная сборка проект в режиме продакшена
- `npm run build:dev` - Полная сборка проект в режиме разработки
- `test:uni` - Запуск Jest для тестирования
- `test:e2e` -  Запуск Cypress для e2e тестирования
- `sb` - Запуск Storybook
- `storybook:build` -  Сборка storybook
- `lint` - Проверка линтером
- `lint:fix` -  Исправление линтером

<h2 id="arch">4. Архитектура</h2>

Проект написан по методологии Feature sliced design(FSD) (https://feature-sliced.design/docs/get-started/tutorial)

----

<h2 id="problems">5. Проблемы</h2>

1. Из-за нехватки времени(начал поздно) не успел реализовать поиск объявлений с помощью search Input.
2. Не сделана адаптивная верстка для разных устройств.
3. Не реализована фильтрация заказов.

После окончания дедлайна продолжу дорабатывать приложение и испрявлять недочеты

<h2 id="enhancement">6. Дальнейшие планы</h2>

- Сделать адаптивный дизайн для разных видов устройств(не успел сделать)
- Сделать поиск по объявлениям
- Реализовать фильтрацию заказов (по заданию)
- Покрыть unit и e2e тестами приложение
