const tabs = document.querySelectorAll('.tab__btn');
const contentTab = document.querySelectorAll('.content__tab');

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', (e)=>{
      tabs.forEach(tab => {tab.classList.remove('active')});
      tab.classList.add('active');
      const line = document.querySelector('.line');
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";
      contentTab.forEach(content =>{content.classList.remove('active')})
      contentTab[index].classList.add('active')
    })

});