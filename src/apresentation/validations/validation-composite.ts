import { Validation } from "../protocols/validation"

export class ValidationComposite implements Validation {
    constructor(private readonly validations: Validation[]) {}

    validate(input: string | Error): Error {
        for (const validation of this.validations) {
            const error = validation.validate(input)
            if (error) {
                return error
            }
        }
    }
}
