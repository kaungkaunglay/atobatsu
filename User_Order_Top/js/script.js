document.querySelectorAll('.cross-icon').forEach(item => {
  item.addEventListener('click',(ev)=> {
    ev.preventDefault();
    const target = ev.currentTarget.getAttribute('href');
    document.querySelector(target).value = '';
  })
})