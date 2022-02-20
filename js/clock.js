const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${Minutes}:${Seconds}`;
}  //콘솔에 찍히는 대신 HTML에 있는 clock 자리에 찍히게 하고 싶은 경우,
//변수명.innerText를 통해 보여지게 할 수 있다.
/*
1. 변수명을 통해 형태를 바꿔줄 준비
2. string으로 씌워 문자화 하고 padStart function 활용
3. innerText에 시:분:초 순서로 변수명 입력
**String은 맨 앞이 대문자임 잊지 말자!
*/

getClock();
setInterval(getClock, 1000);