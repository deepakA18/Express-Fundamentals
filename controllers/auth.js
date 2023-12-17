const authenticate = (req,res)=>{
    const {name} = req.body;
    if(name)
    {
      res.status(200).send(`Welcome ${name}`)
    }
    else{
      res.status(401).send('Please provide credentials')
    }
  }

  module.exports = authenticate;