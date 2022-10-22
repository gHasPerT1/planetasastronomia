const $btnSingIp = document.querySelector('.sing-in-btn'),
      $btnSingUp = document.querySelector('.sing-up-btn'),
      $singUp = document.querySelector('.sing-up'),
      $singIn = document.querySelector('.sing-in');
document.addEventListener( 'click' , e => {
    if (e.target === $btnSingIp || e.target === $btnSingUp){
        $singIn.classList.toggle('active');
        $singUp.classList.toggle('active')
    }
})  