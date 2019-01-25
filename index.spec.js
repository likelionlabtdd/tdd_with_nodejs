/*** 테스트 코드 파일 ***/

const assert = require('assert'); // node 기본 모듈
const should = require('should');
const request = require('supertest'); // API 기능 테스트
const app = require('./index');

describe('GET /users', () => { 
    /** 첫 번째 테스트 */
    it('응답값이 배열이고, name속성을 포함한다.', (done) => {
        request(app) 
            .get('/users') // supertest가 내부적으로 express 서버를 구동 & 실제 요청 보냄
            .end((err, res) => {
                // Q.응답값이 배열인가?
                res.body.should.be.instanceOf(Array); 
                // Q.배열 안에 name이라는 key가 있는가?
                res.body.forEach(user => { 
                    user.should.have.property('name');
                });
                done(); // 테스트 종료를 알리는 함수
            });

        // assert.equal(1,1); // 같으면 통과, 다르면 예외발생
        // (1).should.equal(1); // 기본 assert문보다 should가 가독성이 더 좋다.
    });

    /** 두 번째 테스트 */
    it('콘솔에 출력한다.', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                // throw err;
                console.log('***** 두 번째 테스트 통과! *****');
                done();
            });
    });
}); 