import { PessoaFisicaModel } from "../PessoaFisicaModel";

export const createFormInput = <T>(idForm: string): T => {
    const form = document.querySelector(idForm) as HTMLFormElement;
    const inputs = Array.from(form.elements) as HTMLInputElement[];
  
    const formObject = inputs.reduce((acc, input) => {
      if (input.id) {
        const fieldName = input.id as keyof T;
        if (typeof input.value === 'string') {
          acc[fieldName] = input.value as T[keyof T];
        }
      }
      return acc;
    }, {} as T);
  
    return formObject;
  };
  