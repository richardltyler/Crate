// App Imports
import models from '../../setup/models'

// Get all surveySamples
export async function getAll() {
  return await models.SurveySample.findAll({ order: [['id', 'DESC']] })
}

// Get surveySample by style
export async function getByStyle(parentValue, { style }) {
  const surveySample = await models.SurveySample.findOne({ where: { style: style } })

  if (!surveySample) {
    // Product does not exists
    throw new Error('The surveySample you are looking for does not exists or has been discontinued.')
  } else {
    return surveySample
  }
}

// Get surveySample by category
export async function getByCategory(parentValue, { category }) {
  const surveySample = await models.SurveySample.findOne({ where: { category: category } })

  if (!surveySample) {
    // Product does not exists
    throw new Error('The surveySample you are looking for does not exists or has been discontinued.')
  } else {
    return surveySample
  }
}