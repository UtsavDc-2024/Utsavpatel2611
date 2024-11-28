// Select elements from the DOM
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Sample data for generating random stories
const storyText =
  "It was 94°F outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Helper function to generate a random value from an array
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Event listener for the "Generate random story" button
randomize.addEventListener('click', generateStory);

function generateStory() {
  // Create a fresh copy of the story text
  let newStory = storyText;

  // Replace placeholders with random values
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Handle custom name input
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Handle US/UK measurement system
  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone'; // Convert pounds to stone
    const temperature = Math.round((94 - 32) * (5 / 9)) + '°C'; // Convert °F to °C
    newStory = newStory.replace('94°F', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
