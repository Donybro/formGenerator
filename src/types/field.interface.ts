import {IOptionInterface} from "@/types/option.interface";
import {IRadioOptionInterface} from "@/types/radio.option.interface";

type FIELD_TYPE = 'input' | 'button' | 'select'

type INPUT_TYPES =  'text' | 'radio' | 'checkbox'
type BUTTON_TYPES =  'reset' | 'submit' | 'button'

export interface IFieldInterface {
    fieldType :FIELD_TYPE,
    name:string,
    inputType?: INPUT_TYPES,
    buttonType?: BUTTON_TYPES,
    placeholder?:string,
    buttonText?:string,
    label?:string,
    id:string,
    className?:string,
    optionClassName?:string,
    value?:string | IRadioOptionInterface[],
    onChange?:(e:Event)=> void,
    onClick?:(e:Event)=> void,
    options?:IOptionInterface[]
}
