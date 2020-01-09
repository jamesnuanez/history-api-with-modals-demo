//===========================================================================
// Setup
//===========================================================================
var openModalButton  = document.getElementById('open-modal-button');
var modalContainer   = document.getElementById('modal-container');
var modal            = document.getElementById('modal');
var modalCloseButton = document.getElementById('modal-close-button');

//=============================================================================
// Handle modal
//=============================================================================
function handleModal() {
  console.log('     state: ', history.state);
  if (history.state === 'modal-open') {
    openModalButton.disabled = true;
    modalContainer.style.display = 'flex';
  } else {
    openModalButton.disabled = false;
    modalContainer.style.display = 'none';
  }
}

//===========================================================================
// On page load
//===========================================================================
/*
This triggers when you go to the URL directly, refresh the page, or go
forward or back with a document change (e.g. go to another website and then
press back). NOTE: In Firefox, this does not trigger when going forward or
back with a document change, but it still displays the modal as if it did.
*/
console.log('');
console.log('---> global scope');
handleModal();

//===========================================================================
// On popstate
//===========================================================================
/*
This triggers when you go forward or back with no document change (i.e. You
press forward or backward but stay on the same page. For example, when you
press back after using pushState).
*/
window.onpopstate = function() {
  console.log('');
  console.log('---> onpopstate function');
  handleModal();
};

//===========================================================================
// Open Modal
//===========================================================================
openModalButton.addEventListener('click', function() {
  console.log('');
  console.log('---> pushstate');
  history.pushState('modal-open', null, null);

  /*
  This removes focus from the button before it gets disabled in the
  handleModal function. If focus is not removed when the button is disabled,
  the escape key will be ignored (in Firefox) and will not close the modal.
  */
  openModalButton.blur();

  /*
  We could technically just put the logic to show the modal here, since we
  just set the state and therefore don't need to check what it is, but doing
  it this way avoids duplicate code.
  */
  handleModal();
});

//===========================================================================
// Close Modal
//===========================================================================
// When clicking the background
modalContainer.addEventListener('click', function() {
  history.back();
});

// When clicking the X button
modalCloseButton.addEventListener('click', function() {
  history.back();
});

// Prevents closing when clicking modal itself
modal.addEventListener('click', function(event) {
  event.stopPropagation();
});

// When pressing the Escape key
window.addEventListener('keydown', function(event) {
  var modalOpen = history.state === 'modal-open';
  var escapeKey = (event.key === 'Esc' || event.key === 'Escape');
  if (modalOpen && escapeKey) {
    history.back();
  }
});
