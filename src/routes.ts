import { Router } from "express"
import { MessageController } from "./controllers/messageController";
import { SettingsController } from "./controllers/settingsController";
import { UserController } from "./controllers/userController";

const routes = Router();
const settingsController = new SettingsController()
const usersController = new UserController()
const messagesController = new MessageController()

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.update)

routes.post("/user", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes }