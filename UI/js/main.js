const parties = document.getElementById('parties');
const partyLink = document.getElementById('party-link');
const officeLink = document.getElementById('office-link');
const createParty = document.getElementById('createparty');
const createOffice = document.getElementById('createoffice');
const allParties = document.getElementById('allparties');

partyLink.addEventListener('click', ()=> {
    document.querySelector('.active').className = '';
    createParty.className = 'active';
});

officeLink.addEventListener('click', ()=> {
    document.querySelector('.active').className = '';
    createOffice.className = 'active';
});

parties.addEventListener('click', ()=> {
    document.querySelector('.active').className = '';
    allParties.className = 'active';
});

// console.log(allParties);
// console.log(allParties);
// console.log(allParties);
