import { Component } from "react";
import Joi from "joi";

class Form extends Component {

    state = {
        data: {},
        errors: {}
    }
    
    options = {abortEarly: false, allowUnknown: true};

    handleChange = ({currentTarget: input}) => {
        if(input.type !== 'file') {
            const errors = {...this.state.errors};
            const errorMessage = this.validateProperty(input);
            if(errorMessage) errors[input.name] = errorMessage;
            else delete errors[input.name];

            const data = {...this.state.data};
            data[input.name] = input.value;
            this.setState({ data, errors })
        } else {
            const errors = {...this.state.errors};
            const errorMessage = this.validateProperty(input);
            if(errorMessage) errors[input.name] = errorMessage;
            else delete errors[input.name];

            const data = {...this.state.data};
            data[input.name] = input.files[0];
            this.setState({ data, errors })
        }
    }

    handleListChange = ({currentTarget: input}, index, multi = "") => {
        const indexConvert = parseInt(index);
        const multiConvert = parseInt(multi);
        const data = {...this.state.data};
        if(multi >= 0 && multi !== '') {
            //data[input.name] = [...data[input.name], {...data[input.name][indexConvert], [multiConvert]: input.value}];
            let a1 = {...data[input.name]};
            a1[indexConvert][multiConvert] = input.value;
            data[input.name] = a1;
        } else {
            if(input.type !== 'file') {
                data[input.name][index] = input.value;
            } else {
                data[input.name][index] = input.files[0];
            }
        }
        this.setState({ data })
    }
    
    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]}

        const schemas = Joi.object(schema);
        const {error} = schemas.validate(obj, this.options);
        
        return error ? error.details[0].message : null;
    }

    validate = () => {
        let errors = {};
        const schema = Joi.object(this.schema);
        const result = schema.validate(this.state.data, this.options);

        if(!result.error) return null;

        for(let error of result.error.details)
            errors[error.path[0]] = error.message;
        return errors;
    }

    handleOnSubmit = e => {
        e.preventDefault();

        const errors = this.validate();

        this.setState({errors: errors || {} });
        if(errors) return;

        this.doSubmit();

    }
    

}

export default Form
