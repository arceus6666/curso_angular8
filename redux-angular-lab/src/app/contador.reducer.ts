import { Action } from '@ngrx/store';
export const contadorReducer = (state: number = 10, action: Action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'DECREMENTAR':
      return state - 1;
    case 'MULTIPLICAR':
      return state * 2;
    case 'DIVIDIR':
      return state / 2;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}