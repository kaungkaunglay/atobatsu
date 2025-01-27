window.addEventListener('DOMContentLoaded', ()=> {
  document.querySelectorAll('.more-btn').forEach((target,ind) => {
    target.addEventListener('click', (ev) => {
      ev.currentTarget.classList.toggle('active');
      document.querySelectorAll('.more-content')[ind].classList.toggle('active');
    })
  })
})