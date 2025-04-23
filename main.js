const lines = [
    "I'VE BEEN WAITING TO TELL YOU THIS FOR A LONG TIME!",
    "I DON'T KNOW HOW YOU'LL REACT TO THIS BUT.....",
    "I LOVE YOU! <3"
  ];

  const chars = "ABCDEFGHIJKLMN.!'OPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+[]{}|;:,<>?/`~ ";
  const delayBetween = 80;
  const speed = 10;

  const textContainer = document.getElementById("text");

  function animateChar(targetChar, container) {
    return new Promise((resolve) => {
      const span = document.createElement("span");
      span.className = "char";
      container.appendChild(span);

      let i = 0;
      const interval = setInterval(() => {
        span.textContent = chars[i % chars.length];
        if (chars[i % chars.length] === targetChar || targetChar === " ") {
          clearInterval(interval);
          span.textContent = targetChar;
          resolve();
        }
        i++;
      }, speed);
    });
  }

  async function animateLine(line) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "line";
    textContainer.appendChild(lineDiv);
    for (let i = 0; i < line.length; i++) {
      await animateChar(line[i], lineDiv);
      await new Promise(res => setTimeout(res, delayBetween));
    }
  }

  async function startAnimation() {
    for (const line of lines) {
      await animateLine(line);
    }
  }

  // Floating multicolored hearts
  const colors = ['#ff4d4d', '#ff66cc', '#ff5050', '#ff9999', '#ff1a75'];
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
    heart.style.setProperty('--color', heart.style.background);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

  setInterval(createHeart, 300);
  startAnimation();