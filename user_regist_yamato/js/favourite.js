const checkmark = document.querySelector('#checkmark');
// const checkmark = document.querySelectorAll('#checkmark');
const checkmarks = document.querySelectorAll('.checkmark');
checkmarks.forEach(checkmark => {
    checkmark.addEventListener('click', function () { 
        checkmark.style.backgroundColor = '#FF4549'; 
        checkmark.style.border = 'none';
        checkmark.classList.add("checked");
    });
});
