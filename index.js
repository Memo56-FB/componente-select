const selectBranches = document.querySelectorAll('.branches__select');
const options = Array.from(selectBranches[0].options);
const inputFilter = document.querySelector('.branches__input');

function findBranches (search, options) {
return options.filter(option => {
    const regex = new RegExp(search, 'gi');
    return option.text.match(regex);
});
}

function filterBranches () {
options.forEach(option => { 
    option.remove();
    option.selected = false;
});
const matchArray = findBranches(this.value, options);
selectBranches[0].append(...matchArray);
}

inputFilter.addEventListener('change', filterBranches);
inputFilter.addEventListener('keyup', filterBranches);