function sendMessage() {
    const userMessageInput = document.getElementById("user-message");
    const userMessage = userMessageInput.value.trim();

    if (userMessage !== "") {
        const chatContainer = document.getElementById("chat-container");

        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");

        const messageSent = document.createElement("div");
        messageSent.classList.add("message", "sent");
        messageSent.textContent = userMessage;

        messageContainer.appendChild(messageSent);
        chatContainer.appendChild(messageContainer);

        userMessageInput.value = "";
    }
}
