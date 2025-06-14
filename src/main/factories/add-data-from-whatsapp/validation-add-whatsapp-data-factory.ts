import { Validation } from "../../../apresentation/protocols/validation";
import { RequiredFieldValidation } from "../../../apresentation/validations/required-field-validation";
import { ValidationComposite } from "../../../apresentation/validations/validation-composite";

export const makeValidationAddWhatsappData = (): ValidationComposite => {
  const validations: Validation[] = [];

  const requiredFields = ["vooInicial"];

  for (const field of requiredFields) {
    validations.push(new RequiredFieldValidation(field));
  }

  return new ValidationComposite(validations);
};
