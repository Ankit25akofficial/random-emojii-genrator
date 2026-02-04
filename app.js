function generate() {
  const emojis = [
    "😖", "🙁", "😵‍💫", "🥴", "🤕", "🤒", "🥺", "🥹", "🥳", "🤪", "😫", "😴", "🥱", "😢", "😤","🤑","😴"
  ];

  const randomIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[randomIndex];

  document.querySelector("h2").innerText = selectedEmoji;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", generate);
