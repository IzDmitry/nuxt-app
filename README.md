# nuxt-app
Nuxt.js приложение (front/back) для отображения исторических данных о ценах на биткоин.

## Особенности реализации

- Бд SQLite уже с заготовленными данными на год
- Забыл написать документацию к основным методам


## В API доступны следующие эндпоинты
- GET `/bitcoin` - Возвращает список книг в базе данных в формате JSON

## Развертывание проекта

### Развертывание на локальном сервере

1. Выполните команду `docker-compose up`.
2. Перейти по адресу [http://localhost:3000/](http://localhost:3000/)


## Дополнительные особенности реализации
Использвал для упрощения проекта ORM и SQLite, подключение старших бд можно посмотреть [тут](https://github.com/IzDmitry/drf-book-library) 
