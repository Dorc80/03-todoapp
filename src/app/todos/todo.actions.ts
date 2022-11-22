import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO Increment',
    props<{texto: string}>()
);