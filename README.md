# Growth-India
ai for rural devlopement<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Growth India</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <button onclick="toggleMode()">🌓 Toggle Light/Dark Mode</button>
  <h1>Welcome to Growth India</h1>
  <p>Empowering Rural Youth with AI</p>

  <div id="class-buttons">
    <button onclick="showSection('class6to8')">📘 Class 6–8</button>
    <button onclick="showSection('class9to10')">📗 Class 9–10</button>
    <button onclick="showSection('class11to12')">📕 Class 11–12</button>
    <button onclick="showSection('govtJobs')">🎯 Govt Jobs After 12th</button>
    <button onclick="showSection('aiTutor')">🤖 AI Tutor</button>
  </div>

  <div id="content"></div>

  <section id="why">
    <h2>Why Growth India?</h2>
    <p>India's rural youth have untapped potential. Growth India bridges the gap using AI tools, digital education, and local innovation.</p>
  </section>

  <section id="vision">
    <h2>Our Vision</h2>
    <p>To build AI-powered rural learning centers across India that offer modern education, skill training, and tech-based livelihood support.</p>
    <h3>Pilot Village: Pathkhauli</h3>
    <p>We begin from Pathkhauli, Ayodhya — a model village for digital innovation, student-led AI labs, and 24/7 community access.</p>
  </section>

  <section id="join">
    <h2>Join the Movement</h2>
    <p>We are inviting students, teachers, developers & donors to be part of the Growth India journey. Together, we build digital Bharat.</p>
    <button onclick="showJoinMessage()">Join Us</button>
    <h3>Coming Soon: AI Gram Assistant 🤖</h3>
    <p>A local-language chatbot to answer students' questions, support farmers, and connect communities — in development phase!</p>
  </section>

  <section id="govtJobs" style="display:none">
    <h2>🎯 Govt Job Preparation After 12th</h2>
    <ul>
      <li><strong>Indian Army (Nursing Assistant, GD, Tradesman):</strong> Physical + Written + SSB tips</li>
      <li><strong>UP Police / SSC / Railway Group D:</strong> Maths, Reasoning, GS notes + tests</li>
      <li><strong>Free Mock Tests + AI Mentor:</strong> Coming soon on Growth India</li>
      <li><strong>Scholarship & Entry Form Alerts:</strong> Daily notification on WhatsApp (coming soon)</li>
    </ul>
    <p>Start early, stay consistent — and let Growth India guide you to a government job!</p>
  </section>

  <section id="aiTutor" style="display:none">
    <h2>📚 AI Tutor: Study Assistant</h2>
    <p>Type your question and get instant help from our AI tutor!</p>
    <input type="text" id="studentQuestion" placeholder="Ask a question..." style="width:60%; padding:10px;" />
    <button onclick="answerQuestion()">Ask</button>
    <p id="aiAnswer" style="margin-top:20px;"></p>
  </section>

  <section id="class6to8" style="display:none">
    <h2>📘 Class 6–8</h2>
    <ul>
      <li>Science & Math short notes</li>
      <li>AI quizzes + Games based learning</li>
      <li>Coming soon: Chapter-wise practice</li>
    </ul>
  </section>

  <section id="class9to10" style="display:none">
    <h2>📗 Class 9–10</h2>
    <ul>
      <li>NCERT-based summaries</li>
      <li>Sample papers & AI-based solutions</li>
      <li>Weekly revision booster</li>
    </ul>
  </section>

  <section id="class11to12" style="display:none">
    <h2>📕 Class 11–12</h2>
    <ul>
      <li>Board-focused notes: Physics, Chem, Bio, Math</li>
      <li>MCQ tests + solution guides</li>
      <li>Ask AI doubt assistant (above)</li>
      <li>Competitive prep: NEET + NDA + CUET (Coming soon)</li>
    </ul>
  </section>
</body>
</html>
