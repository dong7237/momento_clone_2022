const bg_img = []
let img_count = 9

for (i = 1; i <= img_count; i++) {
    bg_img.push(`${i}.jpg`)
}
//랜덤 함수로 인덱스 받아서 img만들고 src에 넣고
//새로고침 될 때마다 실행되어야 하니 함수에 넣어야 함.
const bg_img_selector = bg_img[Math.floor((Math.random() * bg_img.length))]

const create_element = document.createElement('img')
create_element.src = `bg/${bg_img_selector}`
document.body.appendChild(create_element)

create_element.classList.add('background_img')