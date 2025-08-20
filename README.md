# ABHI-ARTIFICIAL-BRAIN-FOR-HARM-IDENTIFICATION-CLIENT
✅ Helps users detect and report potential phishing / harmful websites.  
🌐 Real-time communication with the AI-powered server hosted on Render.  
📤 Allows users to submit feedback/reports directly from the extension.  
📥 Easy to install and use – just download and add to your browser.  
🔒 Designed with a focus on cybersecurity and user safety.


ABHI Artificial Brain for Harm Identification – Client Extension


🚀 A lightweight browser extension that connects with the ABHI Artificial Brain for Harm Identification backend to help users detect, analyze, and report phishing or harmful websites in real-time.

📌 Features
🌐 Real-time Analysis – Detect suspicious/phishing websites while browsing.

🔗 Seamless Integration – Works with Chrome/Edge browsers.

📤 Feedback Submission – Report any false positives/negatives directly from the extension.

⚡ Fast & Lightweight – Optimized for quick detection without slowing down your browser.

🔒 User Safety First – Designed with a strong focus on cybersecurity and privacy.

📂 Repository Structure
bash
Copy
Edit
ABHI-ARTIFICIAL-BRAIN-FOR-HARM-IDENTIFICATION-CLIENT/
│── icons/               # Extension icons (16px, 48px, 128px)
│── manifest.json        # Extension configuration
│── background.js        # Handles background requests
│── content.js           # Injected into web pages
│── popup.html           # Popup UI
│── popup.js             # Popup logic
│── styles.css           # Popup styling
│── README.md            # Project documentation

⚙️ Installation Guide
Option 1 – Load Unpacked Extension
Clone or download this repository:

bash
Copy
Edit
git clone https://github.com/Abhijeet-Khanzode/ABHI-ARTIFICIAL-BRAIN-FOR-HARM-IDENTIFICATION-CLIENT.git
Open Chrome/Edge → go to chrome://extensions/

Enable Developer Mode (top-right).

Click Load Unpacked and select this folder.

The extension will appear in your browser toolbar 🎉

🔗 Backend Connection
This extension communicates with the backend server:
👉 ABHI Artificial Brain for Harm Identification – Backend

app.py is deployed on Render.

Extension sends URL data to backend → AI model checks for phishing/harm → returns result.

User can see results instantly in the extension popup.

📤 Feedback System
UNDER CONSTURCTION



📌 Tech Stack
Frontend (Extension): JavaScript, HTML, CSS

Backend: Python (Flask/FastAPI) + Machine Learning (XGBoost/Sklearn)


Deployment: Render

🤝 Contribution
Contributions are welcome!



📜 License
This project is licensed under the MIT License – you are free to use and modify with attribution.

👨‍💻 Author
Developed by Abhijeet Khanzode
📧 For queries: dev.abhi.khanzode@gmail.com

