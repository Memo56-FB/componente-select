(function() {
    const selectBranchesMazda_filter = document.querySelectorAll('.branches-mazda-form__select-branches');
    const optionsMazda_filter = Array.from(selectBranchesMazda_filter[0].options);
    const inputFilterMazda_filter = document.querySelector('.branches-mazda-form__input-filter');
    if(inputFilterMazda_filter){
        function findBranches (search, optionsMazda_filter) {
        return optionsMazda_filter.filter(option => {
            const regex = new RegExp(search, 'gi');
            return option.text.match(regex);
        });
        }
        
        function filterBranches () {
        optionsMazda_filter.forEach(option => { 
            option.remove();
            option.selected = false;
        });
        const matchArray = findBranches(this.value, optionsMazda_filter);
        selectBranchesMazda_filter[0].append(...matchArray);
        }
        
        
        inputFilterMazda_filter.addEventListener('change', filterBranches);
        inputFilterMazda_filter.addEventListener('keyup', filterBranches);  
    }
}) ()
