const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);

/////////////////////////////// FREELANCER SECTION////////////////////////////////////////////
// Add freelance in DB OK

const addUser = function (user) {
  // console.log("users =======>", user);
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO users SET ?`, user, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
// get the signed in freelancer OK
const getUser = function (email) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM users where Email = '${email}' `,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
// edit freelancer profile OK
const editUser = function (user) {
  console.log(`=======<huih"`);
  return new Promise((resolve, reject) => {


    const {user:use,id} = user
    // console.log(`UPDATE  users SET ${Object.entries(use).filter(pair =>!!pair[1]).map(pair =>[pair[0],`"${pair[1]}"`].join("=") ).join(", ")} WHERE id = '${id}'`);
    
    connection.query(`UPDATE  users SET ${Object.entries(use).filter(pair =>!!pair[1]).map(pair =>[pair[0],`"${pair[1]}"`].join("=") ).join(", ")} WHERE id = '${id}'`, (err, data) => {
      if (err) { reject(err) }
      resolve(data)

    });
  });
};

// get feeds
// bringing job offers

const jobOffers = function () {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM joboffers", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};


// add application
const apply = function (Ids) {
  console.log("Ids =======>", Ids);
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO applications SET ?`, Ids, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// bring applications of the user in the home section

const getApps = function (userId) {
  return new Promise((resolve, reject) => {
    console.log(userId);
    connection.query(
      `SELECT jobOfferId FROM applications WHERE userId = ${userId}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

let query = (str) => {
  return new Promise((resolve, reject) => {
    connection.query(str, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
// const delApp = function (data) {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       'DELETE FROM applications WHERE userId = 3 AND jobOfferId=3',
//       // `DELETE FROM applications WHERE userId = ${data.userId} AND jobOfferId= ${data.jobOfferId}`,
//       (err, data) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       }
//     );
//   });
// };
const delApp = async (data) => {
  try {
    let result = await query(
      `DELETE FROM applications WHERE userId = ${data.userId} AND jobOfferId=${data.jobOfferId}`
    );
    console.log({result});
    return result;
  } catch (err) {
    console.log(err);
  }
};



/////////////////////////////// COMPANY SECTION ///////////////////////////////////////
// Add company in DB
const addCompanySignUpData = function (Cdata) {
  console.log("Cdata =======>", Cdata);
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO company SET ?`, Cdata, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// get the signed in company

const GetCompanySignUpData = function (email) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM company where Email = '${email}'`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
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


// const getUsersWhoApplied = function () {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       `SELECT * FROM users INNER JOIN applications ON users.id = applications.userId`,
//       (err, data) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       }
//     );
//   });
// };
// const getAppliedJobsByusers = function () {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       `SELECT * FROM users INNER JOIN applications ON users.id = applications.userId`,
//       (err, data) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       }
//     );
//   });
// };


// ==========================================================================
//===========JOB OFFERS ============


// inserting job offers AHMED

const AddJobOffers = function (job) {
  console.log("jobs =======>", job);
  return new Promise((resolve, reject) => {
    connection.query(
//       `INSERT INTO joboffers (companyId ,JobTitle ,Description) VALUES ('${job.companyId}','${job.JobTitle}','${job.Description}')`,

      `INSERT INTO joboffers SET ?`, job,

      (err, jobData) => {
        if (err) {
          reject(err);
        }
        resolve(jobData);
      }
    );
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





// get the signed in freelancer
// up there
// add application
// up there
// bring applications of the user in the home section
// up there

//=======================
// bringing job offers AHMED

const GetjobOffers = function () {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM joboffers", (err, data) => {
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
  delApp,

  ////// Company side
    GetjobOffers,
  GetCompanySignUpData,
  AddJobOffers,
  addCompanySignUpData,
  companyInfo,


  // getUsersWhoApplied,
  // getAppliedJobsByusers

};
/////////////////////////////////////
