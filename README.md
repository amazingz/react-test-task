# react-test-task
Задача:
1. Создать приложение из react-create-app. Node version 13.6.0
2. Использовать сетку flex-box.
3. Главную страницу разделить на место под логотип, navBar, контент и footer. Закрасить каждый блок цветом с opacity 0.1 для понимания визуальных границ.
4. В блок "контент" добавить карточку пользователя с lazyLoading загрузкой данный с сервера. Сервер будет отвечать с задержкой 3 секунды. 
   (Симулируем медленный интернет). Карточка должна показываться сразу и иметь loaders для визуализации загрузки данных.
5. Для получения данных использовать URL: http://skilltome.softit.cf/api/test_user с Basic авторизацией. 
   Login: JohnSnow  Pass: F4g8e45Degi
   
   
   Basic — наиболее простая схема, при которой username и password пользователя передаются в заголовке Authorization в незашифрованном виде (base64-encoded). Однако при использовании HTTPS (HTTP over SSL) протокола, является относительно безопасной.

Пример HTTP аутентификации с использованием Basic схемы.
https://habrastorage.org/files/c27/ac0/637/c27ac06373984352a1ebe2f6424cd9e9.png

https://habr.com/ru/company/dataart/blog/262817/

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-test-task)


https://scotch.io/tutorials/build-a-react-app-with-user-authentication#toc-login-page

https://jasonwatmore.com/post/2018/09/11/react-basic-http-authentication-tutorial-example
