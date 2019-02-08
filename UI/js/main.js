const parties = document.getElementById('parties');
const partyLink = document.getElementById('party-link');
const officeLink = document.getElementById('office-link');
const createParty = document.getElementById('createparty');
const createOffice = document.getElementById('createoffice');
const allParties = document.getElementById('allparties');
const header = document.getElementById('board');
const btns = header.getElementsByClassName('link');

partyLink.addEventListener('click', () => {
  document.querySelector('.active').className = '';
  createParty.className = 'active';
});

officeLink.addEventListener('click', () => {
  document.querySelector('.active').className = '';
  createOffice.className = 'active';
});

parties.addEventListener('click', () => {
  document.querySelector('.active').className = '';
  allParties.className = 'active';
});

// const header = document.getElementById('menu-active');
// const btns = header.getElementsByClassName('link');
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     const current = document.getElementsByClassName('active');
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(' active', '');
//     }
//     this.className += ' active';
//   });
// }


// var header = document.getElementById('board');
// var btns = header.getElementsByClassName('link');
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     let current = document.getElementsByClassName('active');
//     current[0].className = current[0].className.replace(' active', '');
//     this.className += ' active';
//   });
}
