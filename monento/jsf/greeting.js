const loginForm = document.querySelector('#login_form')
const loginInput = document.querySelector('#input_id')
const loginSubmit = document.querySelector('#submit_id')
const greeting = document.querySelector('.greeting')


function greetfunc(username) {

    greeting.classList.remove('hidden');
    //환영문구를 보이게 함
    greeting.innerText = `반갑습니다 ${username}님`;
    //그리팅 클래스에 환영문구를 넣음
}
function loginfunc(event) {
    //로그인하는 함수
    event.preventDefault();
    loginForm.classList.add('hidden')
    //로그인 폼을 안보이게 함
    const username = loginInput.value;
    //작성한 아이디를 유저네임에 저장함
    greetfunc(username);
    localStorage.setItem('username', username);
    //로컬저장소에 유저네임을 저장함
}


const USERNAME = localStorage.getItem("username")

if (USERNAME === null/*로그인 해야됨*/) {
    loginForm.classList.remove('hidden')
    loginForm.addEventListener("submit", loginfunc)
} else {
    //로그인폼없애고 환영문구 뜨게 하기
    greetfunc(USERNAME)
}


