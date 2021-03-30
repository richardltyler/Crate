// App Imports
import models from '../../setup/models'

// Get preference by ID
export async function getById(parentValue, { preferenceId }) {
  const preference = await models.Preference.findOne({ where: { id: preferenceId } })

  if (!preference) {
    // Preference does not exists
    throw new Error('The preference you are looking for does not exist.')
  } else {
    return preference
  }
}

// Get preference by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Preference.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
      ]
    })
  } else {
    throw new Error('Please login to view your preference.')
  }
}

// Get all preferences
export async function getAll() {
  return await models.Preference.findAll({
    include: [
      { model: models.User, as: 'user' },
    ]
  })
}

// Create preference
export async function create(parentValue, { description }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Preference.create({
      description: description,
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to add to your preference.')
  }
}

// Update preference
export async function update(parentValue, { id, description }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Preference.update(
      {
        description
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete preference
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Preference.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Access denied.')
  }
}