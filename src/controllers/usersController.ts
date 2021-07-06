
import Express from 'express'
import User, { UserDoc } from '../models/userModel'

export default {
  index: async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    try {
      const users = await User.find({}).exec()
      res.locals.users = users
      next()
    } catch (err) {
      next(err)
    }
  },
  indexView: (req: Express.Request, res: Express.Response) => {
    res.render('users/index')
  },
  new: (req: Express.Request, res: Express.Response) => {
    res.render('users/new')
  },
  create: async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const userParams = req.body as UserDoc
    try {
      await User.create(userParams)
      res.locals.redirect = '/users'
      next()
    } catch (err) {
      next(err)
    }
  },
  redirectView: (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const redirect = res.locals.redirect
    if (redirect) {
      res.redirect(redirect)
    } else {
      next()
    }
  },
  edit: async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const userId: string = req.params.id
    try {
      console.log("Try to Edit User id : " + userId);
      const user = await User.findById(userId)
      res.locals.user = user
      next()
    } catch (err) {
      next(err)
    }
  },
  editView: (req: Express.Request, res: Express.Response) => {
    res.render('users/edit')
  },
  update: async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const userId: string = req.params.id
    console.log("Try to Update User id : " + userId);
    const userParams = req.body as UserDoc

    try {
      await User.findByIdAndUpdate(userId, {
        $set: userParams,
      })
      res.locals.redirect = '/users'
      next()
    } catch (err) {
      next(err)
    }
  },
  delete: async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const userId: string = req.params.id
    console.log("Try to Delete User id : " + userId);
    try {
      await User.findByIdAndRemove(userId)
      res.locals.redirect = '/users'
      next()
    } catch (err) {
      next(err)
    }
  },
}