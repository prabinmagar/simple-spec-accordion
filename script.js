
const specList = document.querySelectorAll('.spec-head');

specList.forEach((item) => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('showPara');
        let icon = item.firstElementChild;

        if(icon.firstElementChild.className == "fas fa-plus"){
            icon.innerHTML = "<i class = 'fas fa-minus'></i>";
        } else {
            icon.innerHTML = "<i class = 'fas fa-plus'></i>";
        }
    })
});