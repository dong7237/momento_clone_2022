const quotes_array = [
    {
        quote: "1. 삶이 있는 한 희망은 있다",
        author: "키케로",
    },

    {
        quote: "2. 산다는것 그것은 치열한 전투이다.",
        author: " 로망로랑",
    },

    {
        quote: "3. 하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: " 사무엘 잭슨",
    },

    {
        quote: "4. 언제나 현재에 집중할수 있다면 행복할것이다.",
        author: " 파울로 코엘료",
    },

    {
        quote: "5. 진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author: " 찰리 채플린",
    },

    {
        quote: "6. 직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author: " 엘버트 허버드사",
    },

    {
        quote: "7. 신은 용기있는자를 결코 버리지 않는다",
        author: " 켄러",
    },

    {
        quote: "8. 피할수 없으면 즐겨라",
        author: " 로버트 엘리엇",
    },

    {
        quote: "9. 단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: " 이드리스 샤흐",
    },

    {
        quote: "10. 먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author: " 엘사 맥스웰",
    }
]
const quotes_box = document.querySelector('.quotes_box')
const quotes = document.querySelector('.quotes')
const author = document.querySelector('.author')

//obj에서 랜덤으로 명언을 담아 변수에 넣고 그 변수의 key값에 접근

const randon_quotes = quotes_array[Math.floor(Math.random() * quotes_array.length)]
quotes.innerText = randon_quotes.quote;

author.innerText = randon_quotes.author;