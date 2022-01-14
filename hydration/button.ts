import { getTemplate } from "./get-template";

export interface ISimpleButton {
  id: string;
  disabled: boolean;
}

const initialButtonData: ISimpleButton = { id: "test-button", disabled: false };

export const simpleButtonTemplate = (data: ISimpleButton = initialButtonData) => 
  getTemplate(`<simple-button id="${data.id}" ${data.disabled ? 'disabled' : ''}>Simple button</simple-button>`);
  
