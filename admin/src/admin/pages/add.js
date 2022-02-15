import React from "react";
import Joi from "joi";
import Form from "../components/common/form";
import PagesServices from "../services/pagesServices";

class Add extends Form {

    state = {
        data: { type: '', title: '', url: '', layout: '', section_one_heading: '', section_one_content: '', section_two_heading_1: '', section_two_content_1: '', section_two_heading_2: '', section_two_content_2: '', section_two_heading_3: '', section_two_content_3: '', section_three_title: '', section_three_content: '', section_three_list: '', section_three_image: '', section_four_title: '', section_four_content: '', section_four_list: '', section_four_image: '', status: '' },
        errors: {}
    }

    schema = {
        type: Joi.string().min(5).max(255).required(),
        title: Joi.string().min(5).max(255).required(),
        url: Joi.string().min(5).max(255).required(),
        layout: Joi.string().min(5).max(50).required(),
        section_one_heading: Joi.string().min(5).max(255).required(),
        section_one_content: Joi.string().required(),
        section_two_heading_1: Joi.string().min(5).max(255).required(),
        section_two_content_1: Joi.string().required(),
        section_two_heading_2: Joi.string().min(5).max(255).required(),
        section_two_content_2: Joi.string().required(),
        section_two_heading_3: Joi.string().min(5).max(255).required(),
        section_two_content_3: Joi.string().required(),
        section_three_title: Joi.string().min(5).max(255).required(),
        section_three_content: Joi.string().required(),
        section_three_list: Joi.required(),
        section_three_image: Joi.required(),
        section_four_title: Joi.string().min(5).max(255).required(),
        section_four_content: Joi.string().required(),
        section_four_list: Joi.required(),
        section_four_image: Joi.required(),
        status: Joi.required(),
    };

    doSubmit = async () => {
        // Create an object of formData
        const formData = new FormData();
        Object.keys(this.state.data).forEach(key => {
            if(key !== "section_three_image" && key !== "section_four_image") {
                formData.append(key, this.state.data[key]);
            }
        });
        // Update the formData object
        formData.append(
            "section_three_image",
            this.state.data.section_three_image,
            this.state.data.section_three_image.name
        );

        // Update the formData object
        formData.append(
            "section_four_image",
            this.state.data.section_four_image,
            this.state.data.section_four_image.name
        );
        
        await PagesServices.addPage(formData)
        // Call th server
        console.log("Form Submitted");
    }

    render() {
        const { errors } = this.state;

        return <div className="row justify-content-md-center">
            <h4>Add Page</h4>
            <div className="col col-lg-2"></div>
            <div className="col">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="type" onChange={this.handleChange} />
                            {errors.type && <div className="alert alert-danger">{errors.type}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" onChange={this.handleChange} />
                            {errors.title && <div className="alert alert-danger">{errors.title}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="url" className="col-sm-2 col-form-label">Url</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="url" onChange={this.handleChange} />
                            {errors.url && <div className="alert alert-danger">{errors.url}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="layout" className="col-sm-2 col-form-label">Layout</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="layout" onChange={this.handleChange} />
                            {errors.layout && <div className="alert alert-danger">{errors.layout}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_one_heading" className="col-sm-2 col-form-label">Section One Heading</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_one_heading" onChange={this.handleChange} />
                            {errors.section_one_heading && <div className="alert alert-danger">{errors.section_one_heading}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_one_content" className="col-sm-2 col-form-label">Section One Content</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_one_content" onChange={this.handleChange} />
                            {errors.section_one_content && <div className="alert alert-danger">{errors.section_one_content}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_two_heading_1" className="col-sm-2 col-form-label">Section Two Heading 1</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_two_heading_1" onChange={this.handleChange} />
                            {errors.section_two_heading_1 && <div className="alert alert-danger">{errors.section_two_heading_1}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_two_content_1" className="col-sm-2 col-form-label">Section Two Content 1</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_two_content_1" onChange={this.handleChange} />
                            {errors.section_two_content_1 && <div className="alert alert-danger">{errors.section_two_content_1}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_two_heading_2" className="col-sm-2 col-form-label">Section Two Heading 2</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_two_heading_2" onChange={this.handleChange} />
                            {errors.section_two_heading_2 && <div className="alert alert-danger">{errors.section_two_heading_2}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_two_content_2" className="col-sm-2 col-form-label">Section Two Content 2</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_two_content_2" onChange={this.handleChange} />
                            {errors.section_two_content_2 && <div className="alert alert-danger">{errors.section_two_content_2}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_two_heading_3" className="col-sm-2 col-form-label">Section Two Heading 3</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_two_heading_3" onChange={this.handleChange} />
                            {errors.section_two_heading_3 && <div className="alert alert-danger">{errors.section_two_heading_3}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_two_content_3" className="col-sm-2 col-form-label">Section Two Content 3</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_two_content_3" onChange={this.handleChange} />
                            {errors.section_two_content_3 && <div className="alert alert-danger">{errors.section_two_content_3}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_three_title" className="col-sm-2 col-form-label">Section Three Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_three_title" onChange={this.handleChange} />
                            {errors.section_three_title && <div className="alert alert-danger">{errors.section_three_title}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_three_content" className="col-sm-2 col-form-label">Section Three Content</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_three_content" onChange={this.handleChange} />
                            {errors.section_three_content && <div className="alert alert-danger">{errors.section_three_content}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_three_list" className="col-sm-2 col-form-label">Section Three List</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_three_list" onChange={this.handleChange} />
                            {errors.section_three_list && <div className="alert alert-danger">{errors.section_three_list}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_three_image" className="col-sm-2 col-form-label">Section Three Image</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control" name="section_three_image" onChange={this.handleChange} />
                            {errors.section_three_image && <div className="alert alert-danger">{errors.section_three_image}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_four_title" className="col-sm-2 col-form-label">Section Four Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_four_title" onChange={this.handleChange} />
                            {errors.section_four_title && <div className="alert alert-danger">{errors.section_four_title}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_four_content" className="col-sm-2 col-form-label">Section Four Content</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_four_content" onChange={this.handleChange} />
                            {errors.section_four_content && <div className="alert alert-danger">{errors.section_four_content}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_four_list" className="col-sm-2 col-form-label">Section Four List</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="section_four_list" onChange={this.handleChange} />
                            {errors.section_four_list && <div className="alert alert-danger">{errors.section_four_list}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="section_four_image" className="col-sm-2 col-form-label">Section Four Image</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control" name="section_four_image" onChange={this.handleChange} />
                            {errors.section_four_image && <div className="alert alert-danger">{errors.section_four_image}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <select className="form-control" name="status" onChange={this.handleChange}>
                                <option value="">-- Select Status --</option>
                                <option value="enabled">Enabled</option>
                                <option value="disabled">Disabled</option>
                            </select>
                            {errors.status && <div className="alert alert-danger">{errors.status}</div>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Page</button>
                </form>
            </div>
            <div className="col col-lg-2"></div>
        </div>
    }

}

export default Add
