![preview-hw](/preview.jpg)

# PHONEBOOK (App)

**Individual project.**

**Title:** Phonebook.

**Description:** the phonebook application.

**Target:** the phonebook application development for quickly finding the right contact and keeping contacts in order.

**Basic functionality:** authorization/authentication, private/public routes, forms with validation, loader, navigation, notification, adaptive layout, transform and animated effects, "scroll to top" button, modal windows, favicon.

**Skills:** React, Redux Toolkit, JavaScript, CSS via JS (styled-components), Formik, Yup, Axios.

---

**Індивідуальний проект.**

**Назва:** Phonebook.

**Опис:** додаток телефонної книги.

**Ціль:** розробка додатка телефонної книги для збереження контактів та швидкого пошуку потрібного контакту

**Навички:** React, Redux Toolkit, JavaScript, CSS/JS (styled-components), Formik, Yup, Axios.

**Базовий функціонал:**
- Можливість реєстрації та логіна користувача, 
- Робота з приватною колекцією контактів.
- Маршрутизація (React Router).
- HTTP-запити з використанням [**axios**](https://axios-http.com/).
- Реалізація модальних вікон.
- Реалізація форм з перевірками, з використанням бібліотек Formik + Yup та без.
- Прелоадер з використанням бібліотеки [**react-loader-spinner**](https://mhnpd.github.io/react-loader-spinner/).
- Cповіщення з використанням бібліотеки [**react-hot-toast**](https://react-hot-toast.com/docs).
- Кнопка скролу на початок сайту.
- Відображення фавікону сторінки.
- Верстка адаптивна.
- Використана бібліотека [**Redux Toolkit**](https://redux-toolkit.js.org/)

### Шаблон React-проекту
Використаний цей [шаблон React-проекту](https://github.com/goitacademy/react-homework-template#readme) як стартова точка програми.
[README to React homework template](/README.template.md)

### API (бекенд)

Використаний готовий [**бекенд**](https://connections-api.herokuapp.com/docs/), котрий підтримує всі необхідні операції з колекцією контактів, а також реєстрацію, логін та оновлення користувача за допомогою JWT. 

### Операції

Використано функцію
[`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk) для
оголошення асинхронних генераторів actions та виконання HTTP-запитів. Обробка
actions та зміна даних у стані Redux зроблена за допомогою
[`createSlice`](https://redux-toolkit.js.org/api/createSlice).

# КОРИСНІ ПОСИЛАННЯ

## Динамічне імпортування модулів
Функція `React.lazy()` відповідає за асинхронне завантаження компонента, а `Suspense` призупиняє його відображення до завершення завантаження.

```jsx
//App.js
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
```

Suspense слід розмістити безпосередньо всередині компонента SharedLayout. В іншому випадку, при завантаженні кожної сторінки, будуть пропадати і повторно рендерувати компоненти загальної частини сторінок, наприклад хедер та навігація.

```jsx
//SharedLayout.js
import { Suspense } from 'react';

<>
  <Header />
  <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
</>
```

## Маршрутизація
**npm i react-router-dom** 

```jsx
//index.js
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

```jsx
//App.js
import { Route, Routes } from 'react-router-dom'

<Routes>
  <Route path='/' element={<SharedLayout/>}>
    <Route index element={<Home/>} />
    <Route path='movies' element={<Movies/>} />
    <Route path='*' element={<Error/> } />
  </Route>
</Routes>
```

`<Outlet>` - у це місце буде рендетися розмітка компонентів сторінок.

```jsx
//SharedLayout.js
import { Outlet } from 'react-router-dom'

<>
  <Header/>
  <Outlet />
</>
```

## Навігація

### Компоненти <Link> та <NavLink>
Компоненти `<Link>` та `<NavLink>` рендерять тег `<a>` відмінність в тому, що при натисканні просто оновлюється URL в адресному рядку браузера, без перезавантаження сторінки.

```jsx
//Header.jsx
import { Link, NavLink } from "react-router-dom";

  <>
    <Link to="/">Home</Link>
    <NavLink to="/contacts">Contacts</NavLink>
  </>
```
Компонент [`<NavLink>`](https://reactrouter.com/en/main/components/nav-link) відрізняється тим, що за замовчуванням елементу активного посилання додається клас active (це можна використовувати для її стилізації.)

### Хук useNavigate
Він надає нам функцію `navigate` якій під час виклику передаємо шлях, куди необхідно виконати навігацію.

```jsx
//Header.jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

<button onClick={() => navigate('/login', { replace: true })}>
  Login
</button>;
```

Необов'язковий аргумент функції `navigate()` — властивість `replace`, за замовчуванням `false`, контролює як буде додано новий запис на стек історії. Використовується рідко, наприклад при логіні, щоб користувач не зміг повернутися кнопкою «назад» на сторінку логіна після входу, адже він уже в системі і робити йому там нічого.

### Компонент Navigate
Компонент [`Navigate`](https://reactrouter.com/en/main/components/navigate) - обгортка над хуком `useNavigate`. Він виконує навігацію у момент рендеру. Шлях для навігації та необов'язкові параметри передаються окремими пропсами.

```jsx
//Header.jsx
import { Navigate, useState } from "react-router-dom";

if (isLoginSuccess) {
    return <Navigate to="/contacts" replace={true} />;
  }
```

## Бібліотека Formik
**npm i formik**

[Formik](https://formik.org/) — найпопулярніша у світі бібліотека форм із відкритим кодом для React і React Native.

### Хук useFormik в Formik
[useFormik (documentation)](https://formik.org/docs/api/useFormik)

[React Formik Tutorial with Yup (video)](https://youtu.be/7Ophfq0lEAY?si=ctnlSBJ0ejKcLGVj)

### Бібліотека Yup в Formik
**npm install yup**

[Yup ](https://formik.org/docs/guides/validation#validationschema) — 
schema-builder для валідації значень. 

```js
import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5, 'The password must be at least 5 characters long')
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
// ...
<Formik
  initialValues={{ email: '', , age: '', , password: '', confirmPassword: '' }}
  validationSchema={basicSchema}
>

```

## Бібліотека [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

```js
npm install @reduxjs/toolkit
npm install react-redux
```

Якщо не буде використовуватись функція `combineReducers()` то можна 2 в 1:

`npm install @reduxjs/toolkit react-redux`

### Зв'язування store з компонентами React

```js
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```

### Підписка на store - хук useSelector(selector)

У компонентах використовують хук `useSelector(selector)`, якому передається посилання на функцію селектор, яка в свою чергу інкапсулює в собі читання значень із стану Redux.

```js
//App.js
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(selectContacts);
};
```

```js
//selectors.js
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectContactsInfo = state => state.contacts;

```
Селектори не тільки скорочують дублювання коду, але і скорочують час необхідний на рефакторинг.

> [!NOTE]
> [Посібник зі стилю коду Redux](https://redux.js.org/style-guide#name-selector-functions-as-selectthing) рекомендує до назви функцій селектора додати слово **select** у поєднанні з описом вибраного значення.

**Процес оптимізації селекторів (мемоізація)** — збереження результатів виконання функції для запобігання повторним обчисленням. Для цього використовується функція `createSelector()`, яка приймає  два аргументи:
1. масив вхідних селекторів (повторні обчислення виконуватимуться лише тоді, коли зміниться значення якогось з них);
1. функція перетворювач, в якій виконуватимуться всі обчислення.

```js
//selectors.js
import { createSelector } from "@reduxjs/toolkit";

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
```

### Відправка actions - хук useDispatch()

```js
import { useDispatch } from 'react-redux';

const App = () => {
  // Отримуємо посилання на функцію actions
  const dispatch = useDispatch();

  dispatch(deleteСontact(id));
};
```

### Метод `.unwrap()` що робить dispatch() асинхронним 
[Unwrapping Result Actions](https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions)

```js
const login = async (body) => {
  try {
    await dispatch(loginThunk(body)).unwrap()
    console.log('Login successfully')
  } catch (error) {
    console.log(error)
  }
}
```

```js
const login = (body) => {
  dispatch(loginThunk(body))
    .unwrap()
    .then(() => {
      console.log('Login successfully')
    })
    .catch((error) => {
      console.log(error)
    })
}
```

### Оголошення асинхронного генератора action за допомогою функції [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)

`createAsyncThunk()` – це функція з бібліотеки Redux Toolkit, яка дозволяє створювати асинхронні action creators. 

[Нотатки по createAsyncThunk()](/README.thunk.md)


### Генератор унікальних ідентифікаторів рядків для JS (в Redux Toolkit)

```js
import { nanoid } from '@reduxjs/toolkit';

id: nanoid();
```

## Повернення об’єкту розташування з поточної URL-адреси (хук useLocation)
`import { useLocation } from 'react-router-dom';`

```ruby
const location = useLocation();
<Link to={`/movies/${movie.id}`} state={{ from: location }}>
```

```ruby
const location = useLocation();
<Link to={location.state?.from ?? '/'}/>
```

## HTTP-запити

[**npm i axios**](https://axios-http.com/)

`import axios from "axios";`

```js
// якщо запити з одного URL то можемо лише встановити базовий URL для axios:
axios.defaults.baseURL = 'https://mockapi.io/';

export const getAllContacts = async () => {
  const { data } = await axios('contacts');
  return data;
};
```

```js
// якщо запити з різних URL то слід використовувати instance axios.create для кожного URL:

const instanceForContacts = axios.create({
  baseURL: 'https://1.mockapi.io/',
});
const instanceForProducts = axios.create({
  baseURL: 'https://2.mockapi.io/',
});

export const getAllContacts = async () => {
  const { data } = await instanceForContacts('contacts');
  return data;
};
```

## Прелоадер

[**npm i react-loader-spinner**](https://mhnpd.github.io/react-loader-spinner/)

`import { InfinitySpin } from 'react-loader-spinner';`

## React Icons
[**npm i react-icons**](https://react-icons.github.io/react-icons/)

```jsx
import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}
```

## Перевірка типів одержуваних пропсів

[**npm i prop-types**](https://www.npmjs.com/package/prop-types)

```js
import PropTypes from 'prop-types';

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
```

## Cповіщення для React [react-hot-toast](https://react-hot-toast.com/docs)

[**npm i react-hot-toast**](https://www.npmjs.com/package/react-hot-toast)

```js
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast.success('Here is your toast!', {
    duration: 1500,
  });

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
```

## CSS на JavaScript

[**npm i styled-components**](https://www.npmjs.com/package/styled-components)

```js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: black;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #007aff;
  }
`;
```




