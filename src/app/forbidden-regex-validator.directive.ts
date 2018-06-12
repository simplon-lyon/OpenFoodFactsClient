import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[forbiddenRegex]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenRegexValidatorDirective, multi: true}]
})

export class ForbiddenRegexValidatorDirective implements Validator {
  @Input('forbiddenRegex') forbiddenRegex: string;

  validate(control: AbstractControl): {[key: string]: any} | null {

    if (this.forbiddenRegex) {
      return forbiddenRegexValidator(new RegExp(this.forbiddenRegex, 'i'))(control);
    } else {
      return null;
    }

  }
  constructor() { }
  
}

export function forbiddenRegexValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenRegex': {value: control.value}} : null;
  };
}