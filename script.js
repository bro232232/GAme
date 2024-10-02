const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const startButton = document.getElementById('start-button');

const story = {
    start: {
        text: "You find yourself in a dark forest. The path splits into two. Do you go left or right?",
        choices: [
            { text: "Left", next: "leftPath" },
            { text: "Right", next: "rightPath" }
        ]
    },
    leftPath: {
        text: "You encounter a wild beast! Do you fight or flee?",
        choices: [
            { text: "Fight", next: "fightBeast" },
            { text: "Flee", next: "fleeBeast" }
        ]
    },
    rightPath: {
        text: "You find a treasure chest! Do you open it or leave it?",
        choices: [
            { text: "Open", next: "openChest" },
            { text: "Leave", next: "leaveChest" }
        ]
    },
    fightBeast: {
        text: "You bravely fight the beast and win! You find a hidden path leading to a castle.",
        choices: [
            { text: "Enter the castle", next: "castle" }
        ]
    },
    fleeBeast: {
        text: "You run away safely but end up back at the start.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    openChest: {
        text: "The chest is full of gold! You are rich!",
        choices: [
            { text: "Celebrate", next: "celebrate" }
        ]
    },
    leaveChest: {
        text: "You leave the chest and continue your journey, but you always wonder what was inside.",
        choices: [
            { text: "Continue", next: "start" }
        ]
    },
    castle: {
        text: "Inside the castle, you find a throne room. Do you sit on the throne or explore further?",
        choices: [
            { text: "Sit on the throne", next: "throne" },
            { text: "Explore further", next: "explore" }
        ]
    },
    celebrate: {
        text: "You celebrate your newfound wealth and live happily ever after.",
        choices: [
            { text: "Play Again", next: "start" }
        ]
    },
    throne: {
        text: "You sit on the throne and become the ruler of the land!",
        choices: [
            { text: "Play Again", next: "start" }
        ]
    },
    explore: {
        text: "You find a secret passage that leads to more adventures!",
        choices: [
            { text: "Continue", next: "start" }
        ]
    }
};

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.style.display = 'none';
    showStory("start");
}

function showStory(storyNode) {
    const node = story[storyNode];
    storyElement.innerText = node.text;
    choicesElement.innerHTML = '';
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });
}
