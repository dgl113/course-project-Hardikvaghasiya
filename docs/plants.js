// Defines an array of plant objects, each with properties for name, sun, water, and an image URL
const plants = [
    // Each object represents a plant with specific characteristics and an image
    { name: 'Rose', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/rose.jpg' },
    // Additional plant objects follow the same structure
    { name: 'Lavender', sun: 'Full Sun', water: 'Low', imageUrl: 'images/lavender.jpg' },
    { name: 'Daisy', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/daisy.jpg' },
    { name: 'Sunflower', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/sunflower.jpg' },
    { name: 'Tulip', sun: 'Full Sun to Partial Shade', water: 'Moderate', imageUrl: 'images/tulip.jpg' },
    { name: 'Marigold', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/marigold.jpg' },
    { name: 'Gardenia', sun: 'Partial Sun', water: 'High', imageUrl: 'images/gardenia.jpg' },
    { name: 'Orchid', sun: 'Partial Shade', water: 'Low', imageUrl: 'images/orchid.jpg' },
    { name: 'Hydrangea', sun: 'Partial Sun', water: 'High', imageUrl: 'images/hydrangea.jpg' },
    { name: 'Iris', sun: 'Full Sun to Partial Shade', water: 'Moderate', imageUrl: 'images/iris.jpg' },
    { name: 'Lily', sun: 'Full Sun to Partial Shade', water: 'Moderate to High', imageUrl: 'images/lily.jpg' },
    { name: 'Peony', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/peony.jpg' },
    { name: 'Chrysanthemum', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/chrysanthemum.jpg' },
    { name: 'Begonia', sun: 'Partial Shade', water: 'Moderate', imageUrl: 'images/begonia.jpg' },
    { name: 'Azalea', sun: 'Partial Sun', water: 'Moderate', imageUrl: 'images/azalea.jpg' },
    { name: 'Camellia', sun: 'Partial Shade', water: 'Moderate', imageUrl: 'images/camellia.jpg' },
    { name: 'Carnation', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/carnation.jpg' },
    { name: 'Foxglove', sun: 'Partial Sun to Shade', water: 'Moderate', imageUrl: 'images/foxglove.jpg' },
    { name: 'Gladiolus', sun: 'Full Sun', water: 'Moderate', imageUrl: 'images/gladiolus.jpg' },
    { name: 'Hibiscus', sun: 'Full Sun', water: 'High', imageUrl: 'images/hibiscus.jpg' },
    { name: 'Jasmine', sun: 'Full Sun to Partial Shade', water: 'Moderate', imageUrl: 'images/jasmine.jpg' },
    { name: 'Lilac', sun: 'Full Sun', water: 'Moderate to High', imageUrl: 'images/lilac.jpg' },
    { name: 'Magnolia', sun: 'Full Sun to Partial Shade', water: 'Moderate', imageUrl: 'images/magnolia.jpg' },
    { name: 'Pansy', sun: 'Partial Sun to Shade', water: 'Moderate', imageUrl: 'images/pansy.jpg' },
    { name: 'Petunia', sun: 'Full Sun to Partial Shade', water: 'Moderate', imageUrl: 'images/petunia.jpg' }
];

// Function to filter plants based on a search term
function filterPlants() {
    // Retrieves the user's search term and converts it to lowercase for case-insensitive comparison
    const searchTerm = document.getElementById('search').value.toLowerCase();
    // Filters the plants array for plants whose name includes the search term
    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm)
    );
    // Displays the filtered list of plants
    displayPlants(filteredPlants);
}

// Function to display plants in the HTML document
function displayPlants(plantArray) {
    // Gets the container element where plants will be displayed
    const plantList = document.getElementById('plant-list');
    plantList.innerHTML = ''; // Clears any existing content in the container

    // Iterates over the array of plant objects
    plantArray.forEach(plant => {
        // Creates a new div element for each plant
        const plantItem = document.createElement('div');
        plantItem.className = 'plant-item'; // Sets the class for styling

        // Creates an img element for the plant's image
        const image = document.createElement('img');
        image.src = plant.imageUrl; // Sets the image source URL
        image.alt = plant.name; // Provides alternative text for the image
        image.loading = 'lazy'; // Optimizes loading for images outside the viewport

        // Creates a div to hold plant information (name and details)
        const plantInfo = document.createElement('div');
        plantInfo.className = 'plant-info';

        // Creates an h3 element for the plant's name
        const plantName = document.createElement('h3');
        plantName.className = 'plant-name';
        plantName.textContent = plant.name; // Sets the text content to the plant's name

        // Creates a paragraph element for the plant's sun and water requirements
        const plantDetails = document.createElement('p');
        plantDetails.className = 'plant-details';
        plantDetails.textContent = `Sun: ${plant.sun}, Water: ${plant.water}`;

        // Appends the plant name and details to the plant info div
        plantInfo.appendChild(plantName);
        plantInfo.appendChild(plantDetails);
        // Appends the image and plant info to the plant item div
        plantItem.appendChild(image);
        plantItem.appendChild(plantInfo);
        // Appends the plant item div to the plant list container in the document
        plantList.appendChild(plantItem);
    });
}
// Event listener that calls displayPlants function to show all plants when the document is loaded
document.addEventListener('DOMContentLoaded', () => displayPlants(plants));