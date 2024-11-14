const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');


async function fetchMessages() {
    try {
      const response = await fetch('http://localhost:3000/api/messages');
      
      if (!response.ok) {
        throw new Error('Erreur de réseau');
      }
      
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Erreur lors de la récupération des feeds :', error);
      return error
    }
}

async function displayMessages() {
    messagesContainer.innerHTML = "";
    const data = await fetchMessages();

    // Iterate through each conversation
    data?.conversations?.forEach(conversation => {
        const lastMessage = conversation.messages[conversation.messages.length - 1];
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat__message");

        messageElement.innerHTML = `
            <img src="${lastMessage.profileImage}" class="chat__message-avatar" alt="${lastMessage.sender}'s Avatar">
            <div class="chat__message-content">
                <strong>${lastMessage.sender}</strong>: ${lastMessage.content}
            </div>
        `;
        messagesContainer.appendChild(messageElement);
    });
}

displayMessages();