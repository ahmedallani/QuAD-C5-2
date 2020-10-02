const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3008;
const db = require("./DATABASE/databaseFuncs.js");
// cors

const cors = require("cors");
app.use(cors());

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'))
//

// the table of the users  Describtion  
app.post('/signup', async (req, res)  => {
    console.log('req.body');
    console.log('req.body ====>',req.body);
    try {
        const data = await db.addUser(req.body);
        res.status(200).send(data);
    }
    catch (e) {
        res.send(e);
    }
});

// apply for a job offer
app.post('/apply', async (req, res)  => {
    console.log('req.body');
    console.log('req.body ====>',req.body);
    try {
        const data = await db.apply(req.body);
        console.log('data is',data)
        res.status(200).send(data);
    }
    catch (e) {
        res.send(e);
    }
});
//Get the freelancer job applications
app.get('/applications/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const applications = await db.getApps(req.params.id); ////////////////////
    console.log(applications);
    res.status(200).send(applications);
  }
  catch (err) {
    console.error(err)
  }
});

// Getting All the Signed In Users // AHMED
app.get('/signup', async (req, res) => {
    try{
        const allData = await db.getUser();
        res.status(200).send(allData);
    }
    catch (err) {
        console.error(err);
    }
});
// checking if login data is valid // AHMED
// app.post('/login', async (req, res) => {
//     try {

//         const data = await db.Users();
//         console.log('[Log in all data]',data);
//         for(var i = 0; i < data.length; i++) {
//             var elm = data[i];
//             console.log('elm.email',elm.Email)
//              console.log('elm.password',elm.Password)
//             if (elm.Email === req.body.email && elm.Password === req.body.password) {
//                 res.status(200).send('successfully Logged In !') }
//     }catch (err) {console.log(err)}
// });
// ================================================================= AHMED
// app.put("/update", async (req, res) => {
//   console.log("req.body ====>", req.body);
//   try {
//     const elm = await db.updateUsersAllData(req.body);
//     res.status(200).send(elm);
//   } catch (e) {
//     res.send(e);
//   }
// });
// =================================================================
// setting up profile


  // add  Description
  app.post('/edit', async (req, res)  => {
    console.log('req.body ====>',req.body);
    try {
        const profileData = await db.editUser(req.body);
        res.send(profileData);
    }
    catch (e) {
        res.send(e);
    }

});

// Getting All the SignedIn Users Description // AHMED

// app.get('/profile', async (req, res) => {
//     try{
//         const profileAllData = await db.UsersDescription();
//         res.status(200).send(profileAllData);
//     }
//     catch (err) {
//         console.error(err);
//     }
// });
//=========JOB OFFERS=====================
  //  getting job offers // AHMED

// app.get('/jobs', async (req, res) => {
//     try{
//         const jobsData = await db.GetjobOffers();
//         res.status(200).send(jobsData);
//     }
//     catch (err) {
//         console.error(err);
//     }
// });

//    inserting job offers // AHMED
app.post('/jobs', async(req,res) => {
  console.log('req',req.body)
    try{
        const addedJobs = await db.AddJobOffers(req.body);

        res.status(200).send(addedJobs)
    }catch(err) {
        console.log('[server side joboffers insert]',err)
    }
});
//======================================================
  // Company signUp // AHMED
// app.post('/signup/company', async (req, res) => {
//     try{
//         const Cdata = await db.addCompanySignUpData(req.body);
//         res.status(200).send(Cdata);
//     }
//     catch (e) {res.send(e)}
// });

// app.get('/signup/company', async (req, res) => {
//     try {const codata = await db.GetCompanySignUpData();
//     res.status(200).send(codata)
//  }
//  catch (err) {res.send(err)}
// })

// app.post('/login/company', async (req, res) => {
//     try {
//         const data = await db.addCompanySignUpData();
//         console.log('[Log in all data]',data);
//         for(var i = 0; i < data.length; i++) {
//             var elm = data[i];
//             if (elm.Email === req.body.email && elm.Password === req.body.password) {
//                 res.status(200).send('successfully Logged In !')}};
//     }catch (err) {console.log(err)}
// });

//////////////////////// Slim's repo ///////////////////
// the table of the users  Describtion  
 /////// Up there

// apply for a job offer
// up there
//Get the freelancer job applications
// up there

// Getting All the Signed In Users
app.get('/signup', async (req, res) => {
    try{
        const allData = await db.getUsers();
        res.status(200).send(allData);
    }
    catch (err) {
        console.error(err);
    }
})
// checking if login data is valid
app.post('/login', async (req, res) => {
    try {
        const data = await db.getUser(req.body.email);
        console.log(data)
            if (data[0].Email === req.body.email && data[0].Password === req.body.password) {
                res.status(200).send(data[0])

            }
        
    }catch (err) {console.log(err)}
});

// =================================================================
//AHMED
// app.put("/update", async (req, res) => {
//   console.log("req.body ====>", req.body);
//   try {
//     const elm = await db.updateUsersAllData(req.body);
//     res.status(200).send(elm);
//   } catch (e) {
//     res.send(e);
//   }
// });
// =================================================================
// setting up profile


  // add  Description
//  up there

// Getting All the SignedIn Users Description
// app.get("/profile", async (req, res) => {
//   try {
//     const profileAllData = await db.UsersDescription();
//     res.status(200).send(profileAllData);
//   } catch (err) {
//     console.error(err);
//   }
// });

// getting job offers
app.get("/home", async (req, res) => {
  try {
    const jobsData = await db.jobOffers();
    res.status(200).send(jobsData);
  } catch (err) {
    console.error(err);
  }
});
// Company signUp
app.post("/signup", async (req, res) => {
  try {
    const Cdata = await db.addCompanySignUpData();
    res.status(200).send(Cdata);
  } catch (e) {
    res.send(e);
  }
});
app.post("/login", async (req, res) => {
  try {
    const data = await db.addCompanySignUpData();
    console.log("[Log in all data]", data);
    for (var i = 0; i < data.length; i++) {
      var elm = data[i];
      if (elm.Email === req.body.email && elm.Password === req.body.password) {
        res.status(200).send("successfully Logged In !");
      }
    }
  } catch (err) {
    console.log(err);
  }

  //
});

// -*- sending company informatuions to the company profile -*- \\
// app.get("/profile", async (req, res) => {
//   try {
//     const companyInfos = await db.companyInfo();
//     res.status(200).send(companyInfos);
//   } catch (err) {
//     console.log(" we can't give you data ", err);
//   }
// });
////////////////////////////////////////////////////////
app.get('/application', async (req, res) => {
  try {
    const companyInfos = await db.getUsersWhoApplied();
    res.send(companyInfos);
  }
  catch (err) {
     console.log(err)
    }
})

app.listen(port,
     () => console.log(`server is listening on port ${port}`));