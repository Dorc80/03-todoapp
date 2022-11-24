import { createReducer, on } from "@ngrx/store";
import { setFiltro } from "./filtro.action";

// export let initialState: filtrosValidos = "todos";
export const initialState = "todos";

export const filtroReducer = createReducer(initialState,
    on(setFiltro, (state, { filtro }) => filtro)
);