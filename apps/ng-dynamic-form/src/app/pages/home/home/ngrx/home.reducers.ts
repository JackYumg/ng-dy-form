import { createReducer, on } from '@ngrx/store';
import { openMenu, closeMenu } from './home.actions';
export const initIsCollapsed = false;
const _homeReducer = createReducer(
    initIsCollapsed,
    on(openMenu, state => { state = true; return state }),
    on(closeMenu, state => { state = false; return state })
);
export function homeReducer(state, action) {
    return _homeReducer(state, action);
}