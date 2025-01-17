export class RoleController {
  constructor ({ roleModel }) {
    this.roleModel = roleModel
  }

  get = async (req, res) => {
    const data = await this.roleModel.get()
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.roleModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.roleModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.roleModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
