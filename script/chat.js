async function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    });
    const data = await response.json();
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('p');
    messageElement.textContent = `ChatGPT: ${data}`;
    chatBox.appendChild(messageElement);
}