import React from "react";
import Joi from "joi";
import Form from "../components/common/form";
import ReviewsServices from "../services/reviewsServices";

class Add extends Form {

    state = {
        data: { customer: '', message: '', platform: '' },
        errors: {}
    }

    schema = {
        customer: Joi.string().min(3).max(30).required(),
        message: Joi.string().required(),
        platform: Joi.string().min(3).max(30).required(),
    };

    doSubmit = async () => {
        await ReviewsServices.addReviews(this.state.data)
        // Call th server
        console.log("Form Submitted");
    }

    render() {
        const { errors } = this.state;

        return <div className="row justify-content-md-center">
            <h4>Add Reviews</h4>
            <div className="col col-lg-2"></div>
            <div className="col">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="customer" className="col-sm-2 col-form-label">Customer</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="customer" onChange={this.handleChange} />
                            {errors.customer && <div className="alert alert-danger">{errors.customer}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="message" onChange={this.handleChange} />
                            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="platform" className="col-sm-2 col-form-label">Platform</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="platform" onChange={this.handleChange} />
                            {errors.platform && <div className="alert alert-danger">{errors.platform}</div>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Reviews</button>
                </form>
            </div>
            <div className="col col-lg-2"></div>
        </div>
    }

}

export default Add
