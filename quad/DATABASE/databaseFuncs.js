const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);
// Sign Up
// ==========================================================================
//Select all users // AHMED
// const Users = function () {
//   return new Promise((resolve, reject) => {
//     connection.query("SELECT * FROM users", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

//AHMED
// const addUsers = function (user) {
//   console.log("users =======>", user);
//   return new Promise((resolve, reject) => {
//     connection.query(`INSERT INTO users SET ?`, user, (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     })
//   })
// }


// get the signed in freelancer
const getUser = function (email) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM users where Email = '${email}' `, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });
  });
};
// add application
const apply = function (Ids) {
  console.log('Ids =======>', Ids)
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO applications SET ?`, Ids, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });
  });
};
// bring applications of the user in the home section
const getApps = function (userId) {
  return new Promise((resolve, reject) => {
    console.log(userId)
    connection.query(`SELECT jobOfferId FROM applications WHERE userId = ${userId}`, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    })
  })
}


// ==========================================================================
//===========JOB OFFERS ============
// bringing job offers AHMED

// const GetjobOffers = function () {
//   return new Promise((resolve, reject) => {
//     connection.query("SELECT * FROM joboffers", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// inserting job offers AHMED

const AddJobOffers = function (job) {
  console.log("jobs =======>", job);
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO joboffers (companyId ,JobTitle ,Description) VALUES ('${job.companyId}','${job.JobTitle}','${job.Description}')`, (err, jobData) => {
      if (err) {
        reject(err);
      }
      resolve(jobData);
    });

  });
};
//=================Company=====================
// AHMED
// const addCompanySignUpData = function (company) {
//   console.log("companys ADD =======>", company);

//   return new Promise((resolve, reject) => {
//     connection.query(`INSERT INTO company SET ?`, company, (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };
// const GetCompanySignUpData = function (company) {

//   console.log("companys GET =======>", company);

//   return new Promise((resolve, reject) => {
//     connection.query(`SELECT * FROM company`, (err, CompanyData) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(CompanyData);
//     });
//   });
// };


// module.exports = {

//   getUser,
//   addUser,
//   editUser,
//   jobOffers,
//   apply,
//   getApps,
//   addCompanySignUpData,
//   companyInfo,

//   // Users,
//   // addUsers,
//   // GetjobOffers,
//   addCompanySignUpData,
//   // AddJobOffers,
//   // updateUsersAllData,
//   // GetCompanySignUpData

// };

////////////////////// SLIM's REPO
// Sign Up
// ==========================================================================
const addUser = function (user) {

  console.log('users =======>', user)
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO users SET ?`, user, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });
  });
};
// ==========================================================================
// Setting up profiles

const editUser = function (user) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', user, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });

  });
}

// get the signed in freelancer
// up there
// add application
// up there
// bring applications of the user in the home section
// up there

//=======================
// bringing job offers

const jobOffers = function () {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM joboffers', (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });
  });

};

const addCompanySignUpData = function (user) {
  console.log('users =======>', user)
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO company SET ?`, user, (err, data) => {
      if (err) { reject(err) }
      resolve(data)
    });
  });
};
// -*- bringing company informations for the company profile -*-\\
const companyInfo = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM company", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = {
  getUser,
  addUser,
  editUser,
  jobOffers,
  apply,
  getApps,
  ////// Company side
  AddJobOffers,
  addCompanySignUpData,
  companyInfo
};
/////////////////////////////////////
