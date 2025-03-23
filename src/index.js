console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{

     const imageUrl ="https://dog.ceo/api/breeds/image/random/4";

    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then( response=>response.json())
    .then(data=>{
        const images = data.message
        const imageContainer = document.getElementById('dog-image-container')
        
        images.forEach((imageUrl)=>{
            const imgElement = document.createElement('img')
            imgElement.src = imageUrl
            imgElement.alt = 'ceo dog'
            imageContainer.appendChild(imgElement)
        })
    })
    .catch((error) => {
        console.error("Error fetching images:", error);
      });

        const dogBreedsList = document.getElementById('dog-breeds');
        const breedDropdown = document.getElementById('breed-dropdown');
      
        let allBreeds = [];
      
        
        fetch("https://dog.ceo/api/breeds/list/all")
          .then((response) => response.json())
          .then((data) => {
            allBreeds = Object.keys(data.message); 
            renderBreeds(allBreeds); 
          })
          .catch((error) => {
            console.error("Error fetching dog breeds:", error);
          });
      
        function renderBreeds(breeds) {
          dogBreedsList.innerHTML = ''; 
      
          breeds.forEach((breed) => {
            const listItem = document.createElement('li');
            listItem.textContent = breed;
      
           
            listItem.addEventListener('click', () => {
              listItem.style.color = "purple";
            });
      
            dogBreedsList.appendChild(listItem);
          });
        }
      
        
        breedDropdown.addEventListener('change', (event) => {
          const selectedLetter = event.target.value; 
      
         
          const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter));
      
          renderBreeds(filteredBreeds); 
        });
})