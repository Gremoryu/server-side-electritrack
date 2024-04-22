import jwt from "jsonwebtoken";
import { SECRET_KEY_JWT } from "../../domain/constants/secretKeyJWT";

export const createJwt = (especialista : any) => {
    const payload  = {
        correo : especialista.correo,
    }
    const token = jwt.sign(payload, SECRET_KEY_JWT, { expiresIn: "1h" });
    return token;
}