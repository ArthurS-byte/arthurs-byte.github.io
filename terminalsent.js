const sentMails = [
  {
    title: 'Első elküldött üzenet',
    content: 'Ez az első elküldött üzenet tartalma.',
    from: 'Feladó neve',        // sender
    to: 'Email címzett',
    time: '2025.10.16. 10:00',
    unread: false // Sent mails generally are "read"
  },
  {
    title: 'Második üzenet',
    content: 'Második levél részleteinek szövege.',
    from: 'Feladó neve',
    to: 'Másik címzett',
    time: '2025.10.16. 15:23',
    unread: false
  }
];


function renderSentMails(mails) {
  const container = document.getElementById('messagesList');
  container.innerHTML = '';
  mails.forEach(mail => {
    const card = document.createElement('div');
    card.className = 'card mb-2 message-card';
    card.style.cursor = 'pointer';
    card.innerHTML = `
       <div class="card-body">
        <h5 class="card-title">
          ${mail.title}
          ${mail.unread ? '<span class="unread-dot"></span>' : ''}
        </h5>
        <p class="card-text text-truncate" 
           style="max-width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${mail.content}
        </p>
        <div>
          <small class="text-muted">Feladó: ${mail.from}</small><br>
          <small class="text-muted">Címzett: ${mail.to}</small><br>
          <small class="text-muted">${mail.time}</small>
        </div>
      </div>`;
    card.addEventListener('click', () => showModal(mail));
    container.appendChild(card);
  });
}

function showModal(mail) {
  const modalTitle = document.getElementById('messageModalLabel');
  const modalBody = document.querySelector('#messageModal .modal-body');

  modalTitle.textContent = mail.title;
  modalBody.innerHTML = `
    <p><strong>Feladó:</strong> ${mail.from}</p>
    <p><strong>Címzett:</strong> ${mail.to}</p>
    <hr>
    <p>${mail.content}</p>
  `;

  const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
  messageModal.show();
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

// Render all sent mails on page load
renderSentMails(sentMails);
