const express = require('express');
const cors = require('cors');
const app = express()
require('dotenv').config()

const port = process.env.PORT || 5000;
// method
app.use(cors())
app.use(express.json())





const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://sun:hwW0vq9tmIJH2eoy@cluster0.baixnwx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

  try {
    await client.connect();

    const jobCollection = client.db("jobdata").collection("data");
    
  
    app.get('/info', async (req, res) => {
      const result = await jobCollection.find().toArray()
      res.send(result)
    })
    app.post('/info', async (req, res) => {
      const body = req.body;
      const result = await jobCollection.insertOne(body);
      res.send({ result })
    })
    

  }
  finally {

  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(port);

})
app.get('/', (req, res) => {
  res.send("success the connection")
  console.log(`connection seccess ${port}`);

})