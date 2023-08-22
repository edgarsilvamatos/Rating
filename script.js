const form = document.querySelector("#myForm")
const grayStar = document.querySelectorAll(".fa.fa-star")

form.addEventListener('click', function(event){
    event.preventDefault();
})

grayStar.forEach(button => {
    button.addEventListener('click', function() {

        grayStar.forEach(btn => btn.classList.remove('checked')); 
        
        button.classList.add('checked');
        
        selectedRating = parseInt(button.id);
        console.log(selectedRating)
    });
});

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        data.city = 'newyork';
        data.rating = 31;

        const updatedJSON = JSON.stringify(data, null, 2);

        console.log(updatedJSON); 
    })
