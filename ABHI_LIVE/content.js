chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showThankYouAlert") {
    alert("✅ Thank you for your contribution!\n\nOur team will review this site and get back to you.\n\nUntil then, stay alert and avoid sharing sensitive information.\n\n— ABHI Team 🛡️");
  }
});

// content.js

// Create wrapper
let wrapper = document.createElement('div');
wrapper.style.position = 'fixed';
wrapper.style.top = '10px';
wrapper.style.right = '10px';
wrapper.style.zIndex = '9999';
wrapper.style.textAlign = 'center';
wrapper.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(wrapper);

// Create the dot
let dot = document.createElement('div');
dot.style.width = '20px';
dot.style.height = '20px';
dot.style.borderRadius = '50%';
dot.style.margin = '0 auto';
wrapper.appendChild(dot);

// Create the label
let label = document.createElement('span');
label.innerText = "A.B.H.I.";
label.style.display = 'block';
label.style.marginTop = '4px';
label.style.fontSize = '12px';
label.style.fontWeight = 'bold';
label.style.color = '#16d3d3ff';
wrapper.appendChild(label);

// Function to update dot color + blink
function updateDot(isPhishing) {
  if (isPhishing) {
    dot.style.backgroundColor = 'red';
    dot.style.animation = 'blink 1s infinite';
  } else {
    dot.style.backgroundColor = 'green';
    dot.style.animation = 'blink 1s infinite';
  }
}

// Listen for messages from background.js
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.prediction === 'phishing') updateDot(true);
  else if (msg.prediction === 'safe') updateDot(false);
});

// CSS animation
let style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
    0% {opacity: 1;}
    50% {opacity: 0;}
    100% {opacity: 1;}
}`;
document.head.appendChild(style);



let isChatOpen = false;

// Create floating button
const chatBtn = document.createElement("div");
chatBtn.innerText = "💬 Chat with ABHI AI";
chatBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4af28aff;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  z-index: 999999;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;
document.body.appendChild(chatBtn);

// Chat box container
const chatContainer = document.createElement("div");
chatContainer.innerHTML = `
  <div id="abhiChatBox" style="
    position: fixed; bottom: 70px; right: 20px;
    width: 300px; max-height: 400px;
    background: white; border: 1px solid #ccc;
    border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);
    overflow: hidden; display: none; flex-direction: column; z-index: 999999;
  ">
    <div style="padding: 10px; background: #0078D4; color: white; font-weight: bold;">🧠 ABHI AI</div>
    <div id="chatMessages" style="flex: 1; padding: 10px; overflow-y: auto; max-height: 300px;"></div>
    <div style="display: flex; padding: 10px; border-top: 1px solid #eee;">
      <input type="text" id="chatInput" placeholder="Ask ABHI..." style="flex: 1; padding: 5px;" />
      <button id="chatSendBtn">➤</button>
    </div>
  </div>
`;
document.body.appendChild(chatContainer);

// Toggle chat on button click
chatBtn.onclick = () => {
  const box = document.getElementById("abhiChatBox");
  isChatOpen = !isChatOpen;
  box.style.display = isChatOpen ? "flex" : "none";
};

// Handle sending messages
document.getElementById("chatSendBtn").onclick = sendMessage;
document.getElementById("chatInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById("chatMessages");

  // ✅ User message with black color
  chat.innerHTML += `<div style="color: black; margin: 5px 0;"><b>You:</b> ${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
  input.value = "";

  fetch("https://abhi-artificial-brain-for-harm.onrender.com/respond", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  })
    .then((res) => res.json())
    .then((data) => {
      // ✅ ABHI's reply also in visible color
      chat.innerHTML += `<div style="color: black; margin: 5px 0;"><b>ABHI:</b> ${data.reply}</div>`;
      chat.scrollTop = chat.scrollHeight;
    })
    .catch((err) => {
      chat.innerHTML += `<div style="color: red;"><b>ABHI:</b> Network error!</div>`;
    });
}