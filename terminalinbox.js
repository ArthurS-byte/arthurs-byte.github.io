const storageKey = 'biloba_firstMailShown';

  // Mail content you want to display
  const newMail = {
    title: 'Nincs internet kapcsolat',
    content: 'Úgy tűnik, hogy nincs internet kapcsolatod. Kérlek, ellenőrizd a hálózati beállításaidat, és próbálj újra csatlakozni az internethez. Offline módban csak üzenetek olvasására van lehetőség.',
    from: 'Feladó neve',
    time: new Date().toLocaleString('hu-HU')
  };

  // Function to render mail similarly as before
function renderMail(mail) {
  document.getElementById('messagesList').innerHTML = `
    <div class="card mb-2 message-card" style="cursor:pointer;">
      <div class="card-body">
        <h5 class="card-title">${mail.title}</h5>
        <p class="card-text text-truncate" style="max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${mail.content}
        </p>
      </div>
    </div>
  `;

  // Add click event listener to show modal
  const card = document.querySelector('.message-card');
  card.addEventListener('click', () => {
    showModal(mail);
  });
}


function showModal(mail) {
  // Set modal title and body content
  const modalTitle = document.getElementById('messageModalLabel');
  const modalBody = document.querySelector('#messageModal .modal-body');
  modalTitle.textContent = mail.title;
  modalBody.textContent = mail.content;

  // Show bootstrap modal
  const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
  messageModal.show();
}



  // Check if the first mail has already been shown
  if (!localStorage.getItem(storageKey)) {
    // Show the mail after 2 seconds delay on first visit
    setTimeout(() => {
      renderMail(newMail);
      // Mark that we have shown the mail
      localStorage.setItem(storageKey, 'true');
    }, 5000);
  } else {
    // Mail was shown before, show immediately
    renderMail(newMail);
  }

  function showFullMessage(mail) {
  alert(`Tárgy: ${mail.title}\n\n${mail.content}`);
}

function showError() {
  const errorDiv = document.getElementById('errorAlert');
  errorDiv.textContent = 'Nincs internet kapcsolat';
  errorDiv.classList.remove('d-none');

  // Optional: hide after 3 seconds
  setTimeout(() => {
    errorDiv.classList.add('d-none');
  }, 3000);
}