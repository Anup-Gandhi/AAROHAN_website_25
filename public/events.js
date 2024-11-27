const stack = document.querySelector(".stack");
const cards = Array.from(stack.children).reverse().filter((child) => child.classList.contains("card"));
const eventNameDiv = document.getElementById("event-name");
const descriptionDiv = document.getElementById("event-description");
const nextBtn = document.getElementById("next-btn");

// Event names and descriptions
const eventInfo = {
  "pronite": {
    name: "Pronite",
    description: "Experience an unforgettable night of performances at Pronite, where artists from all over take the stage to create magic!"
  },
  "youtubers-fest": {
    name: "YouTubers Fest",
    description: "Join the YouTubers Fest for an exciting day with famous creators sharing stories, experiences, and interacting live!"
  },
  "comedy-nite": {
    name: "Comedy Nite",
    description: "Get ready for a night filled with laughter at Comedy Nite, featuring top comedians to tickle your funny bone!"
  },
  "theatre-fest": {
    name: "Theatre Fest",
    description: "Dive into the world of drama and storytelling at Theatre Fest, where each act brings a new story to life!"
  }
};

// Function to update the event name and description
function updateEventInfo(card) {
  const eventKey = card.dataset.event;
  eventNameDiv.textContent = eventInfo[eventKey]?.name || "Event Name";
  descriptionDiv.textContent = eventInfo[eventKey]?.description || "Event description not available.";
}

// Initial event info for the first visible card
updateEventInfo(cards[3]);

// Function to move to the next card
function nextCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");
    
    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
      updateEventInfo(lastCard); // Update name and description with each image swap
    },1000);
  }
}

// Event listener for the Next button
nextBtn.addEventListener("click", nextCard);
