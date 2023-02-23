const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

var agendas = [
    {
      title: "title 1",
      start: "2023-02-08",
      end: "2023-02-12",
      person: "jean pierre",
      local: "brak",
      color: "red",
    },
    {
      title: "title 2",
      start: "2023-02-01",
      end: "2023-02-03",
      person: "miguel alberto",
      color: "green",
    },
    {
      title: "title 3",
      start: "2023-02-05",
      end: "2023-02-16",
      person: "lucas rodriguez",
      color: "orange",
    },
  ];

app.get("/agendas", (req, res)=>{
      console.log("abriendo agendas");
      res.json(agendas);
});
app.post('/addAgendas',(req,res)=>{
    const { title, start, end, person, color } = req.body;
    agendas.push( {
      title,
      start,
      end,
      person,
      color,
    })
    console.log(agendas);
})
app.listen(8000, ()=>{
    console.log("abierto port 8000")
})

