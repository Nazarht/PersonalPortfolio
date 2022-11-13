const modal = document.getElementById("modal-window");
const modalBackground = document.getElementById('modal-background')
const close = document.getElementById('close-button');
const open = document.getElementById('open');

open.onclick = function() {
    modal.style.display = 'flex';
    modalBackground.style.display = 'block';
}

close.onclick = function() {
    modal.style.display = 'none';
    modalBackground.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target === modalBackground) {
        modal.style.display = 'none';
        modalBackground.style.display = 'none';
    }
}

