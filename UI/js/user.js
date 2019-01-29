const parties = document.getElementById('parties');
const partyLink = document.getElementById('party-link');
const officeLink = document.getElementById('office-link');
const createParty = document.getElementById('createparty');
const createOffice = document.getElementById('createoffice');
const allParties = document.getElementById('allparties');
const offices = document.getElementById('offices');
const officesDetails = document.getElementById('offices-details');


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

offices.addEventListener('click', () => {
  document.querySelector('.active').className = '';
  officesDetails.className = 'active';
});
