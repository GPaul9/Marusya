# Marusya
A web app for searching movies by genre, viewing trailers, and information about them. You can also add your favorites and watch them later in your user profile.

## Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC4D37?style=for-the-badge)
![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logoColor=white)
![React Player](https://img.shields.io/badge/React%20Player-1DB954?style=for-the-badge)
![React Loading Skeleton](https://img.shields.io/badge/Loading%20Skeleton-FFA500?style=for-the-badge)
![React Responsive](https://img.shields.io/badge/React%20Responsive-00C2FF?style=for-the-badge)

## Installation
- npm install
- npm run dev

## Demo

## Screenshots
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://github.com/user-attachments/assets/05cef8a3-60cc-4c31-9985-5948531fe3d3" width="400" />
  <img src="https://github.com/user-attachments/assets/c288a620-6b00-474a-acd2-db1c269c6cf4" width="400" />
  <img src="https://github.com/user-attachments/assets/fc1972a5-9f9f-40d0-ab58-fdcdb34803a3" width="400" />
</div>

## API
BASE_URL: https://cinemaguide.skillbox.cc/

Auth
| Метод | Путь | Описание |
|---|---|---|
| `POST` | `/auth/login` | Логин пользователя по почте:паролю |
| `GET` | `/auth/logout` | Закрытие текущей пользовательской сессии |
| `POST` | `/user` | Регистрация/Создание пользователя |
| `GET` | `/profile` | Получение данных о текущем авторизованном пользователе |

Favorites
| Метод | Путь | Описание |
|---|---|---|
| `GET` | `/favorites` | Получение избранных фильмов |
| `POST` | `/favorites` | Добавление фильма в избранное |
| `DELETE` | `/favorites/{movieId}` | Удаление фильма из избранного (integer) |

Movies
| Метод | Путь | Описание |
|---|---|---|
| `GET` | `/movie` | Получение фильмов по заданным фильтрам (count: integer, page: integer, title: string, genre: string) |
| `GET` | `/movie/top10` | Получение фильмов с наивысшим рейтингом |
| `GET` | `/genres` | Получение жанров |
| `GET` | `/movie/{movieId}` | Получение фильма по id (integer) |
| `GET` | `/movie/random` | Получение случайного фильма |
