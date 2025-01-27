window.addEventListener('DOMContentLoaded',() => {
  const selectAll = document.querySelector('#checkmark');
  selectAll.addEventListener('click',()=> {
    selectAll.classList.toggle('checked');
    document.querySelectorAll('.card_container .checkmark').forEach(i => {
      selectAll.classList.contains('checked') ? i.classList.add('checked'): i.classList.remove('checked');
    })
  })
  
  document.querySelectorAll('.card').forEach(i => {
    i.addEventListener('click',(ev)=> {
       ev.preventDefault();
       ev.currentTarget.querySelector('.card_container .checkmark').classList.toggle('checked');
    })
  })
})


