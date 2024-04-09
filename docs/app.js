// Selectors for chatbot UI components
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

// Initialize userMessage variable to store the user's input
let userMessage = null;
// Placeholder for API key - replace with your actual API key
const API_KEY = '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';
// Store the initial height of the chat input for dynamic resizing
const inputInitHeight = chatInput.scrollHeight;

// Function to create a chat <li> element with a message and className (outgoing/incoming)
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    // Conditionally render the chat content based on the message type
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

// Function to generate a response from the OpenAI API
const generateResponse = (chatElement) => {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const messageElement = chatElement.querySelector("p");

    // Setup the request options including headers and body
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
        })
    };

    // Fetch response from API, display it in the UI, and handle errors
    fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
            messageElement.textContent = data.choices[0].message.content.trim();
        })
        .catch(() => {
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again.";
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight)); // Scroll to the latest message
}

// Function to handle sending a chat message
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Reset the chat input field
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user message to the chatbox and simulate AI response
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Show "Thinking..." before the actual response comes back
    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

// Adjust the height of the input area based on its content dynamically
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// Send the message when Enter is pressed, but not when Shift is also pressed
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

// Event listeners for user interaction with the chat UI
sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
