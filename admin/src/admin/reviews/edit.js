import Joi from "joi";
import React from "react";
import { useParams } from "react-router-dom";
import Form from "../components/common/form";
import ReviewsServices from "../services/reviewsServices";

class Edit extends Form {
    state = {
        data: { customer: '', message: '', platform: '' },
        errors: {}
    }

    schema = {
        customer: Joi.string().min(3).max(30).required(),
        message: Joi.string().required(),
        platform: Joi.string().min(3).max(30).required(),
    };

    async componentDidMount() {
        const { route } = this.props;
        const editCategory = await ReviewsServices.getReview(route.id)
        
        this.setState({
            data: {
                customer: editCategory.data.customer,
                message: editCategory.data.message,
                platform: editCategory.data.platform,
            }
        })
    }

    doSubmit = async () => {
        const { route } = this.props;
        await ReviewsServices.updateReviews(route.id, this.state.data)
        // Call th server
        console.log("Form Submitted");
    }
    render() {
        const { errors } = this.state;
        
        return <div className="row justify-content-md-center">
            <h4>Edit Review</h4>
            <div className="col col-lg-2"></div>
            <div className="col">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="customer" className="col-sm-2 col-form-label">Customer</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="customer" value={this.state.data.customer} onChange={this.handleChange} />
                            {errors.customer && <div className="alert alert-danger">{errors.customer}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="message" value={this.state.data.message} onChange={this.handleChange} />
                            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="platform" className="col-sm-2 col-form-label">Platform</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="platform" value={this.state.data.platform} onChange={this.handleChange} />
                            {errors.platform && <div className="alert alert-danger">{errors.platform}</div>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Review</button>
                </form>
            </div>
            <div className="col col-lg-2"></div>
        </div>
    }

}

// Wrap and export
export default function Test(props) {
    const route = useParams();
  
    return <Edit {...props} route={route} />;
}
