import {IFieldInterface} from "@/types/field.interface";

const fieldsList :IFieldInterface[] = [
    {
        fieldType :'input',
        inputType:"text",
        name:'first-input',
        label:'Input text label',
        placeholder:'Hello World',
        id:'first-input',
        className:"input_text_class",
        value:"first-input value",
        onChange:(e)=> {
            console.log(e)
        }
    },
    {
        fieldType :'input',
        inputType:"radio",
        name:'first-radio',
        label:'Radio label',
        id:'first-radio',
        className:"",
        value:[
            {
                label:'1 radio',
                value:'1 radio',
                id:'1',
                name:"radio-input"
            },{
                label:'2 radio',
                value:'2 radio',
                id:'2',
                name:"radio-input"
            },{
                label:'3 radio',
                value:'3 radio',
                id:'3',
                name:"radio-input"
            },
        ],
        onChange:(e)=> {
            console.log(e)
        }
    },
    {
        fieldType :'input',
        inputType:"checkbox",
        name:'first-checkbox',
        label:'Checkbox label',
        id:'first-checkbox',
        className:"",
        value:[
            {
                label:'1 checkbox',
                value:'1 checkbox',
                id:'1',
                name:"checkbox-input"
            },{
                label:'2 checkbox',
                value:'2 checkbox',
                id:'2',
                name:"checkbox-input"
            },{
                label:'3 checkbox',
                value:'3 checkbox',
                id:'3',
                name:"checkbox-input"
            },
        ],
        onChange:(e)=> {
            console.log(e)
        }
    },
    {
        fieldType :'button',
        buttonType:"button",
        name:'first-button',
        id:'first-button',
        label:'Button label',
        buttonText:'Click me',
        className:"btn_class",
        onClick:(e)=> {
            console.log(e,'Clicked by button')
        }
    },
    {
        fieldType :'select',
        name:'first-select',
        placeholder: 'Donybro',
        label:'Select label',
        id:'first-select',
        optionClassName:'select_option_class',
        className:"select_class",
        onChange:(e)=> {
            console.log(e,'Changed select')
        },
        options:[
            {value:'option1',label:'option 1'},
            {value:'option2',label:'option 2'},
            {value:'option3',label:'option 3'},
        ]
    },
]

 export default  fieldsList