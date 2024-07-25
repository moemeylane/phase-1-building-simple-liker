function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("Success") : reject("Failure");
    }, 300);
  });
}

document.querySelectorAll('.like').forEach(likeButton => {
  likeButton.addEventListener('click', () => {
    const glyph = likeButton.querySelector('.like-glyph');

    if (glyph.innerHTML === '❤') {
      glyph.innerHTML = '♡';
      likeButton.classList.remove('activated-heart');
    } else {
      mimicServerCall()
        .then(() => {
          glyph.innerHTML = '❤';
          likeButton.classList.add('activated-heart');
        })
        .catch(() => {
          document.getElementById('modal').classList.remove('hidden');
          document.getElementById('modal-message').innerText = "Something went wrong. Please try again.";
          setTimeout(() => {
            document.getElementById('modal').classList.add('hidden');
          }, 3000);
        });
    }
  });
});
