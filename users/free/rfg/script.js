function typeWriter(text, elementId, speed = 30) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

function generateFact() {
  const facts = [
    "Honey never spoils.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "A day on Venus is longer than its year.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Sharks existed before trees.",
    "Wombat poop is cube-shaped.",
    "The Eiffel Tower can grow taller in summer.",
    "Humans share 60% of their DNA with bananas.",
    "A bolt of lightning is five times hotter than the sun.",
    "Sloths can hold their breath longer than dolphins.",
    "There's a species of jellyfish that can live forever.",
    "Oxford University is older than the Aztec Empire.",
    "The heart of a blue whale is the size of a small car.",
    "Some turtles can breathe through their butts.",
    "The moon has moonquakes.",
    "A cloud can weigh over a million pounds.",
    "You can't hum while holding your nose.",
    "The longest hiccup spree lasted 68 years.",
    "There's a planet where it rains molten glass sideways."
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);
  const selectedFact = facts[randomIndex];
  typeWriter(selectedFact, "fact");
}
