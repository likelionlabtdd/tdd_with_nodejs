const express = require('express');
const logger = require('morgan'); // npm i morgan --save-dev
const app = express(); // 어플리케이션 객체 생성

const users = [
    {name: 'Alice'},
    {name: 'Paul'}
];

/** next: middleware가 여러 개 있을 때 다음 mw를 실행하기 위한 callback함수 */
const middleware = (req, res, next) => {
    /**
     * 함수 코드
     */
    next(); // next를 실행해야 다음 mw나 다음 어플리케이션의 행동이 실행된다.
};

/** parameter 갯수로 error middleware임을 식별한다. */
const errorMiddleware = (err, req, res, next) => {
    // 일반 미들웨어에서 에러가 발생하지 않으면 skip
};

app.use(middleware); 
app.use(errorMiddleware);

/* api 서버를 만들 때 클라이언트가 어떤 요청을 했는지 알 필요 있음 */
app.use(logger('dev')); // 요청에 대한 응답 로그 출력

app.get('/', (req, res) => {
    res.send('Hello NodeJS!');
}); 

app.get('/users', (req, res) => {
    res.json(users);
});

/** application은 listen 함수를 사용해 서버를 요청대기상태로 만든다. */
/** supertest를 돌릴 때는 주석처리 */
// app.listen(3000, () => {
//     console.log('running');
// });   


/** app을 파일 밖에서도 사용할 수 있도록 모듈화 */
module.exports = app;
