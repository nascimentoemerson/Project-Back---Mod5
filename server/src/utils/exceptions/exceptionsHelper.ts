import { BadGatewayException, InternalServerErrorException, UnauthorizedException } from "@nestjs/common"
import { Exception } from "./IException"

export enum Exceptions {
    InvalidData,
    DatabaseException,
    NotFoundData,
    UnauthorizedException

}

export function HandleException({message, exception}: Exception) {
    if (exception === Exceptions.InvalidData || exception === Exceptions.NotFoundData) {
        throw new BadGatewayException(message ? message: "Invalid Data")
    }
    if (exception === Exceptions.DatabaseException) {
        throw new InternalServerErrorException("Error in database")
    }
    if (exception=== Exceptions.UnauthorizedException) {
        throw new UnauthorizedException(message? message: "You not have permissions")
    }
  
}
