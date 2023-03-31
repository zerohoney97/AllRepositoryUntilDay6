
console.log(document.querySelector('.text-wrap h2').getBoundingClientRect().top+window.pageYOffset);
let posY=document.querySelector('.text-wrap h2').getBoundingClientRect().top+window.pageYOffset

window.onscroll=function (params) {
    // 스크롤 했을 때
    console.log('스크롤됨')
    console.log(window.scrollY);
    if(posY<window.scrollY){
        document.querySelector('.header').classList.add('isActive')
    }else{
        document.querySelector('.header').classList.remove('isActive')
    }
}
