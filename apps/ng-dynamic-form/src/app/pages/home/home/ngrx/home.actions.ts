import { createAction, props } from '@ngrx/store';

export enum TOGGLE_MENUS {
    CLOSE = '[home page] close',
    OPEN = '[home page] open'
}
export const openMenu = createAction(
    TOGGLE_MENUS.OPEN,
    props<{ isCollapsed: boolean }>()
)

export const closeMenu = createAction(
    TOGGLE_MENUS.CLOSE,
    props<{ isCollapsed: boolean }>()
);