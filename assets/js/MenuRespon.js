var iconMenu = document.querySelector('.header__icon--menu');
var menuList = document.querySelector('.header__menu--list');
iconMenu.onclick = function(){
  menuList.classList.add('active')
}
document.addEventListener('click',function(e){
    if(!menuList.contains(e.target) && 
    !e.target.matches('.header__icon--menu')){
        menuList.classList.remove('active');
    }
});