import { servicesSchema } from '../../schemas/mongodb/services/services.schema.js'

export class ServicesModel {
  async get () {
    const data = await servicesSchema.find()
    return data
  }

  async post (obj) {
    const data = await servicesSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await servicesSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await servicesSchema.deleteOne(id)
    return data
  }
}