const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('users').where({id})
    .then(user => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const handleProfileUpdate = async (req, res, db) => {
  const {id} = req.params;
  const changes = req.body.formInput;

  const count = await db('users').where({id}).update(changes);
  if (count) {
    res.json('success')
  }
  else {
    res.status(400).json('Unable to update')
  }
}

module.exports = {
  handleProfileGet,
  handleProfileUpdate
}