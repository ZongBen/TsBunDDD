import type { Container } from "inversify";
import { AuthController } from "./authController";
import type { IBaseController } from "../../be-common/controller/interfaces/IBaseController";

export const regisControllers = (container: Container): IBaseController[] => {
    return [
        container.resolve(AuthController)
    ];
}