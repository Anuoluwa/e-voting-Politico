import db from '../config/connection';

const dropUsers = `
DROP TABLE IF EXISTS users cascade`;

const dropParties = `
DROP TABLE IF EXISTS parties cascade`;

const dropOffices = `
DROP TABLE IF EXISTS offices cascade`;

const dropCandidates = `
DROP TABLE IF EXISTS candidates cascade`;

const dropVotes = `
DROP TABLE IF EXISTS votes cascade`;

const dropPetitions = `
DROP TABLE IF EXISTS petitions cascade`;

const dropOfficeVoters = `
DROP TABLE IF EXISTS vote_office cascade`;

const dropUserOffices = `
DROP TABLE IF EXISTS  user_office cascade`;

db.query(dropUsers).then((enumRes) => {
  if (enumRes) {
    console.log('Uers table dropped successfully');
  } else {
    console.log('Error in dropping  type');
  }
  db.query(dropOffices).then((response) => {
    if (response) {
      console.log('Offices table dropped successfully');
    } else {
      console.log('Error in dropping Office table');
    }
    db.query(dropCandidates).then((res) => {
      if (res) {
        console.log('Candidates table dropped successfully');
      } else {
        console.log('Error in dropping Candidate table');
      }
      db.query(dropParties).then((result) => {
        if (result) {
          console.log('Parties table dropped successfully');
        } else {
          console.log('Error in dropping Parties table');
        }
        db.query(dropVotes).then((resDropVote) => {
          if (resDropVote) {
            console.log('Voters table dropped successfully');
          } else {
            console.log('Error in dropping voters table');
          }
          db.query(dropPetitions).then((resDropPet) => {
            if (resDropPet) {
              console.log('Petition table dropped successfully');
            } else {
              console.log('Error in dropping petition table');
            }
            db.query(dropOfficeVoters).then((resOfficeVoter) => {
              if (resOfficeVoter) {
                console.log('vote_office table dropped successfully');
              } else {
                console.log('Error in dropping voter_office table');
              }
              db.query(dropUserOffices).then((resDropUserOffice) => {
                if (resDropUserOffice) {
                  console.log('user_office table dropped successfully');
                } else {
                  console.log('Error in dropping user_office table');
                }
              }).catch(error => console.log(`${error}`));
            }).catch(error => console.log(`${error}`));
          }).catch(error => console.log(`${error}`));
        }).catch(error => console.log(`${error}`));
      }).catch(error => console.log(`${error}`));
    }).catch(error => console.log(`${error}`));
  }).catch(error => console.log(`${error}`));
}).catch(error => console.log(`${error}`));
