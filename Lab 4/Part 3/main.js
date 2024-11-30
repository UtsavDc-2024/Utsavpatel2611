// Define the animal object with properties and methods
const animal = {
    name: "Lion",
    sound: "Roar",
    info: "Lions are large carnivorous mammals that belong to the family of Felidae.",
  
    // Method to update animal information
    updateInfo: function(newName, newSound, newInfo) {
      this.name = newName;
      this.sound = newSound;
      this.info = newInfo;
    }
  };
  
  // Function to display animal information
  function displayAnimalInfo() {
    document.getElementById('animal-name').textContent = `Name: ${animal.name}`;
    document.getElementById('animal-sound').textContent = `Sound: ${animal.sound}`;
    document.getElementById('animal-info').textContent = `Info: ${animal.info}`;
  }
  
  // Call the function to display initial info
  displayAnimalInfo();
  
  // Add event listener to update animal information on button click
  document.getElementById('update').addEventListener('click', function () {
    // Update the animal object with new information
    animal.updateInfo(
      "Tiger",
      "Growl",
      "Tigers are the largest cat species, known for their orange fur and black stripes."
    );
  
    // Display the updated information
    displayAnimalInfo();
  });
  