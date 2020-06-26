const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

const title = (sub = "") => {
  return `EXPRESS CRUD ${sub}`;
};

app.use(bodyParser.urlencoded({ extended: false }));

let users = [
  {
    id: 1,
    name: "Olenolin Itzcak",
    email: "oitzcak0@rambler.ru",
  },
  {
    id: 2,
    name: "Natalya Bartusek",
    email: "nbartusek1@epa.gov",
  },
  {
    id: 3,
    name: "Gretel Laurenson",
    email: "glaurenson2@blogspot.com",
  },
  {
    id: 4,
    name: "Demetris MacGlory",
    email: "dmacglory3@mysql.com",
  },
  {
    id: 5,
    name: "Arleyne Rhymer",
    email: "arhymer4@dmoz.org",
  },
  {
    id: 6,
    name: "Jessika Gauche",
    email: "jgauche5@dropbox.com",
  },
  {
    id: 7,
    name: "Ario Renneke",
    email: "arenneke6@ifeng.com",
  },
  {
    id: 8,
    name: "Sheena Sowden",
    email: "ssowden7@4shared.com",
  },
  {
    id: 9,
    name: "Inness Croal",
    email: "icroal8@comsenz.com",
  },
  {
    id: 10,
    name: "Tommi Harle",
    email: "tharle9@slideshare.net",
  },
  {
    id: 11,
    name: "Lanny Wileman",
    email: "lwilemana@google.co.uk",
  },
  {
    id: 12,
    name: "Rosalind Skoughman",
    email: "rskoughmanb@mozilla.org",
  },
  {
    id: 13,
    name: "Bonnie Rocks",
    email: "brocksc@youtu.be",
  },
  {
    id: 14,
    name: "Steffie Smouten",
    email: "ssmoutend@reuters.com",
  },
  {
    id: 15,
    name: "Christean Sextie",
    email: "csextiee@webs.com",
  },
  {
    id: 16,
    name: "Lanae Hannen",
    email: "lhannenf@tmall.com",
  },
  {
    id: 17,
    name: "Valeda Jessop",
    email: "vjessopg@google.com.hk",
  },
  {
    id: 18,
    name: "Niven Tilston",
    email: "ntilstonh@etsy.com",
  },
  {
    id: 19,
    name: "Carter Baiyle",
    email: "cbaiylei@devhub.com",
  },
  {
    id: 20,
    name: "Stephani Aronoff",
    email: "saronoffj@symantec.com",
  },
];
let idRange = 21;

app.set("view engine", "ejs");

// ALL USERS

app.get("/", (req, res) => {
  res.render("index", { users, title: title() });
});

// ADD USER
app.get("/add", (req, res) => {
  res.render("add", { title: title("- Add new user") });
});

app.post("/add", (req, res) => {
  const { fullname, email } = req.body;
  users.push({ id: idRange, name: fullname, email: email });
  idRange++;
  res.redirect("/");
});

// EDIT USER
app.get("/:idUser/edit", (req, res) => {
  const idx = users.findIndex((obj) => obj.id === parseInt(req.params.idUser));
  if (idx >= 0) {
    const user = users[idx];
    res.render("edit", { title: title(`- Edit user - ${user.name}`), user });
  }
  else res.redirect("/");
});

app.post("/:idUser/edit", (req, res) => {
  const idx = users.findIndex((obj) => obj.id === parseInt(req.params.idUser));
  users[idx].name = req.body.fullname;
  users[idx].email = req.body.email;
  res.redirect("/");
});

// DELETE USER
app.get("/:idUser/delete", (req, res) => {
  users = users.filter((user) => user.id != req.params.idUser);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
