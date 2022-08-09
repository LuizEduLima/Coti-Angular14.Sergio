import { AbstractControl } from "@angular/forms";

export class PasswordMatchValidator {

    static MatchPassword(abstractControl: AbstractControl) {

        //capturar os campos do formulário que serão validadods
        let senha = abstractControl.get('senha')?.value;
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;


        //verificando se os valores são diferentes
        if (senha != senhaConfirmacao) {

            //gerar um erro de validação no campo 'senhaConfirmacao'
            abstractControl.get('senhaConfirmacao')?.setErrors({
                matchpassword: true
            })
        }
        return null;
    }
}
