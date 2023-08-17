let dark = false;
function darkMode(){

    if(dark == false){ //dark가 아니라면(dark가 false값과 같다면)
        dark = true;
        document.querySelector(".fa-moon").classList.add("fa-sun")
        document.querySelector(".fa-moon").classList.remove("fa-moon")
        // 달 누르면 달없어지고, 해로 바뀜
        document.querySelector("html").classList.add("dark")
        localStorage.setItem("dark" ,true);
    }else{ //dark라면(dark가 false값과 다르다면)
        dark = false;
        document.querySelector(".fa-sun").classList.add("fa-moon")
        document.querySelector(".fa-sun").classList.remove("fa-sun")
        // 클릭했을때 moon,sun 변함
        document.querySelector("html").classList.remove("dark")
        //html f12눌러서 확인 하기 클래스가 dark인지아닌지
        localStorage.removeItem("dark") //원래 새로고침하면 다크모드로 바뀌는것 삭제
    }
    // console.log(dark)
    // alert()
} //함수를 이용해서 실행, html 달에 li onclick="darkMode()"  넣기

const dark_mode = localStorage.getItem("dark");
// console.log("dark_mode")
if(dark_mode == "true"){
    darkMode()
} //새로고침해도 다크모드 계속 실행

//다국어
const url = new URL(location.href).searchParams;
const lang = url.get("Lang")
// console.log(lang)
//한국어,영어 누르면 console창에 en,kr각각 뜬다.

axios.get("data/data.json")
.then(function(res){
    // console.log(res)
    if($lang == "en"){
        res.data.EnNav.map((e,i)=>{
            // console.log(e) //영어 누르면 데이터 나옴
            document.querySelectorAll(".list li a")[i].textContent = e.title
        }) // 영어 누르면 영어 메뉴로 바뀜
    } //콘솔창에 한국어,영어 나오는지 확인
})
.catch(function(error){
    console.log(error)
})

function language(lang){
    if(lang == "en"){
        localStorage.setItem("lang","en");
    }else{
        localStorage.removeItem("lang","en");
    }
}

const $lang = localStorage.getItem("lang");

//다국어

//모바일 네비

function mNav(){
    document.querySelector(".m-btn").classList.toggle("on")
}

//모바일 네비