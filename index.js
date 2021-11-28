const express = require('express')

const bodyParser = require('body-parser')
const app = express()
const port = 3000

const mongoose = require('mongoose')

const Animals = require('./animals.js')

app.use(bodyParser.urlencoded({
  extended: false
}))



app.get('/animals', (req, res) => {

  Animals.find((err, animals) => {

    if (err) {
      res.send("Error occured no animals retrieved")
      return
    }
    res.send(animals)
    console.log(animals)
  })
})

app.get('/animals/:id', (req, res) => {
  const id = req.params.id;

  Animals.findById(id, (err, animals) => {
    if (err) {
      res.send("animals not found")
      return
    }

    res.send(animals)
    console.log(animals)
  })
})

app.post('/animals', (req, res) => {
  console.log("Inserting an animals in the database")

  let IsAlive = false;
  if (req.body.IsAlive === 'true') {
    IsAlive = true;
  }
  
  let animals = new Animals({
    Quantity: parseInt(req.body.Quantity),
    name: req.body.name,
    breed: req.body.breed || "No breed inserted",
    IsAlive: IsAlive
  });


  animals.save(err => {
    if (err) {

      res.send(`animals not inserted into the database, error is: ${err}`)

      return
    }

    res.send("animals inserted into the database")
    console.log("animals is in the database")
  })

  return
})

app.put('/animals/:id', (req, res) => {

  console.log("Trying to edit animals")
  console.log(parseInt(req.body.Quantity))


  Animals.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    Quantity: ((parseInt(req.body.Quantity) == NaN) ? 0 : parseInt(req.body.Quantity)),
    breed: req.body.breed,
    IsAlive: (req.body.IsAlive === 'true')
  }, err => {
    if (err) {
      res.send("It didn't edit. The error is: " + err)
      return;
    }
    res.send("It did edit")
  })
})


app.delete('/animals/:id', (req, res) => {

  Animals.findByIdAndDelete(req.params.id, err => {
    if (err) {
      res.send("animals did not delete")
      return
    }
    res.send("animals deleted")
    console.log(`animals with id ${req.params.id} is now deleted`)

  })
})

app.listen(port, () => {

  mongoose.connect('mongodb+srv://skanderz:Angelemavie1@animalsapi.yvsql.mongodb.net/AnimalsAPI?retryWrites=true&w=majority').
  catch(error => console.log(error));
  console.log(`Example app listening at http://localhost:${port}`)
})