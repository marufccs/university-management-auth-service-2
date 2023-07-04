import mongoose, { Error } from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'
import { IGenericErrorResponse } from '../interfaces/common'

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: Error.ValidatorError | Error.CastError) => {
      if (el instanceof mongoose.Error.ValidatorError) {
        return {
          path: el.path,
          message: el.message,
        }
      } else if (el instanceof mongoose.Error.CastError) {
        return {
          path: el.path,
          message: `CastError: Invalid value (${el.stringValue}) for field '${el.path}'`,
        }
      }
      return {
        path: '',
        message: '',
      }
    }
  )

  const statusCode = 400
  return {
    statusCode,
    message: 'ValidationError',
    errorMessages: errors,
  }
}
