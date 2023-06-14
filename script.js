const wrapper = document.querySelector('.formBox');

const login = document.querySelector('.btnLogin-popup');

const close = document.querySelector('.icon-close');

login.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
  });
  close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
  });
  
