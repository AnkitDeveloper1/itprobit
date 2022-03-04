import React from "react";
import Joi from "joi";
import Form from "../components/common/form";
import PagesServices from "../services/pagesServices";

class Add extends Form {

    state = {
        data: { type: 'solutions', title: '', url: '', layout: 'layout_1', section_one_heading: '', section_one_content: '', section_two_heading_1: '', section_two_content_1: '', section_two_heading_2: '', section_two_content_2: '', section_two_heading_3: '', section_two_content_3: '', section_three_title: '', section_three_content: '', section_three_list: [], section_three_image: '', section_four_title: '', section_four_content: '', section_four_list: [], section_four_image: '', align_image_left: [], section_image: [], section_title: [], section_content: [], section_listing: [{0: "12"}], status: '' },
        addThreeListFormFields: [""],
        addFourListFormFields: [""],
        addMoreSectionFormFields: [""],
        errors: {}
    }

    schema = {
        type: Joi.string().min(5).max(255).required(),
        title: Joi.string().min(5).max(255).required(),
        url: Joi.string().min(5).max(255).required(),
        layout: Joi.string().min(5).max(50).required(),
        section_one_heading: Joi.string().min(5).max(255).required(),
        section_one_content: Joi.string().required(),
        //section_two_heading_1: Joi.string().min(5).max(255),
        //section_two_content_1: Joi.string(),
        //section_two_heading_2: Joi.string().min(5).max(255),
        //section_two_content_2: Joi.string(),
        //section_two_heading_3: Joi.string().min(5).max(255),
        //section_two_content_3: Joi.string(),
        //section_three_title: Joi.string().min(5).max(255),
        //section_three_content: Joi.string(),
        //section_three_list: Joi.required(),
        //section_three_image: Joi.required(),
        //section_four_title: Joi.string().min(5).max(255),
        //section_four_content: Joi.string(),
        //section_four_list: Joi.required(),
        //section_four_image: Joi.required(),
        status: Joi.required(),
    };

    handleAddThreeMoreList = () => {
        this.setState({addThreeListFormFields: [...this.state.addThreeListFormFields, ""]})
    }

    handleRemoveThreeMoreList = (index) => {
        let addThreeListFormFields = [...this.state.addThreeListFormFields];
        addThreeListFormFields.splice(index, 1);
        this.setState({addThreeListFormFields: addThreeListFormFields})
    }

    handleAddFourMoreList = () => {
        this.setState({addFourListFormFields: [...this.state.addFourListFormFields, ""]})
    }

    handleRemoveFourMoreList = (index) => {
        let addFourListFormFields = [...this.state.addFourListFormFields];
        addFourListFormFields.splice(index, 1);
        this.setState({addFourListFormFields: addFourListFormFields})
    }

    handleAddLayoutMoreList = ({currentTarget: input}, index) => {
        const indexConvert = parseInt(index);
        const data = {...this.state.data};
        let a1 = {...data.section_listing};
        let flength = Object.values(a1[indexConvert]).length;
        a1[indexConvert][flength] = "";
        data.section_listing = a1;
        this.setState({ data })
    }

    handleRemoveLayoutMoreList = ({currentTarget: input}, index, multi) => {
        const data = {...this.state.data};
        delete data['section_listing'][index][multi]
        this.setState({ data })
    }

    handleAddMoreSectionForm = () => {
        this.setState({addMoreSectionFormFields: [...this.state.addMoreSectionFormFields, []]})
        const indexlength = this.state.addMoreSectionFormFields.length
        const data = {...this.state.data};
        let a1 = {...data.section_listing};
        a1[indexlength] = {0: ""};
        data.section_listing = a1;
        this.setState({ data })
    }

    handleRemoveMoreSectionForm = (index) => {
        let addMoreSectionFormFields = [...this.state.addMoreSectionFormFields];
        addMoreSectionFormFields.splice(index, 1);
        this.setState({addMoreSectionFormFields: addMoreSectionFormFields})
    }

    doSubmit = async () => {
        // Create an object of formData
        const formData = new FormData();
        Object.keys(this.state.data).forEach(key => {
            if(key !== "section_three_image" && key !== "section_four_image" && key !== "section_three_list" && key !== "section_four_list" && key !== "section_listing" && key !== "align_image_left" && key !== "section_image" && key !== "section_title" && key !== "section_content") {
                formData.append(key, this.state.data[key]);
            }
            if(key === "section_three_list" || key === "section_four_list" || key === "section_listing" || key === "align_image_left" || key === "section_title" || key === "section_content") {
                formData.append(key, JSON.stringify(this.state.data[key]));
            }
        });
        
        for (let i = 0 ; i < this.state.data.section_image.length ; i++) {
            formData.append("section_image", this.state.data.section_image[i], this.state.data.section_image[i].name);
        }
        if(this.state.data.section_three_image) {
            // Update the formData object
            formData.append(
                "section_three_image",
                this.state.data.section_three_image,
                this.state.data.section_three_image.name
            );
        }

        if(this.state.data.section_four_image) {
            // Update the formData object
            formData.append(
                "section_four_image",
                this.state.data.section_four_image,
                this.state.data.section_four_image.name
            );
        }
        
        await PagesServices.addPage(formData)
        // Call th server
        console.log("Form Submitted");
    }

    render() {
        const { errors, addThreeListFormFields, addFourListFormFields, addMoreSectionFormFields } = this.state;

        return <div className="row justify-content-md-center">
            <h4>Add Page</h4>
            <div className="col col-lg-2"></div>
            <div className="col">
                <form className="row" encType="multipart/form-data" onSubmit={this.handleOnSubmit}>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Type</label>
                            <select className="form-control" name="type" onChange={this.handleChange}>
                                <option value="solutions">Solutions</option>
                                <option value="industries">Industries</option>
                                <option value="testing">Testing</option>
                            </select>
                            {errors.type && <div className="alert alert-danger">{errors.type}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" onChange={this.handleChange} />
                            {errors.title && <div className="alert alert-danger">{errors.title}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label htmlFor="url" className="form-label">Url</label>
                            <input type="text" className="form-control" name="url" onChange={this.handleChange} />
                            {errors.url && <div className="alert alert-danger">{errors.url}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label htmlFor="layout" className="form-label">Layout</label>
                            <select className="form-control" name="layout" onChange={this.handleChange}>
                                <option value="layout_1">Layout 1</option>
                                <option value="layout_2">Layout 2</option>
                            </select>
                            {errors.layout && <div className="alert alert-danger">{errors.layout}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="mb-3">
                            <label htmlFor="section_one_heading" className="form-label">Section One Heading</label>
                            <input type="text" className="form-control" name="section_one_heading" onChange={this.handleChange} />
                            {errors.section_one_heading && <div className="alert alert-danger">{errors.section_one_heading}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="section_one_content" className="form-label">Section One Content</label>
                            <textarea type="text" className="form-control" name="section_one_content" rows="3" onChange={this.handleChange} />
                            {errors.section_one_content && <div className="alert alert-danger">{errors.section_one_content}</div>}
                        </div>
                    </div>
                    {this.state.data.layout === "layout_1" &&
                    <>
                        <div className="col-sm-12">
                            <div className="mb-3">
                                <label htmlFor="section_two_heading_1" className="form-label">Section Two Heading 1</label>
                                <input type="text" className="form-control" name="section_two_heading_1" onChange={this.handleChange} />
                                {errors.section_two_heading_1 && <div className="alert alert-danger">{errors.section_two_heading_1}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_two_content_1" className="form-label">Section Two Content 1</label>
                                <textarea type="text" className="form-control" name="section_two_content_1" rows="3" onChange={this.handleChange} />
                                {errors.section_two_content_1 && <div className="alert alert-danger">{errors.section_two_content_1}</div>}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="mb-3">
                                <label htmlFor="section_two_heading_2" className="form-label">Section Two Heading 2</label>
                                <input type="text" className="form-control" name="section_two_heading_2" onChange={this.handleChange} />
                                {errors.section_two_heading_2 && <div className="alert alert-danger">{errors.section_two_heading_2}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_two_content_2" className="form-label">Section Two Content 2</label>
                                <textarea type="text" className="form-control" name="section_two_content_2" rows="3" onChange={this.handleChange} />
                                {errors.section_two_content_2 && <div className="alert alert-danger">{errors.section_two_content_2}</div>}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="mb-3">
                                <label htmlFor="section_two_heading_3" className="form-label">Section Two Heading 3</label>
                                <input type="text" className="form-control" name="section_two_heading_3" onChange={this.handleChange} />
                                {errors.section_two_heading_3 && <div className="alert alert-danger">{errors.section_two_heading_3}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_two_content_3" className="form-label">Section Two Content 3</label>
                                <textarea type="text" className="form-control" name="section_two_content_3" rows="3" onChange={this.handleChange} />
                                {errors.section_two_content_3 && <div className="alert alert-danger">{errors.section_two_content_3}</div>}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="mb-3">
                                <label htmlFor="section_three_title" className="form-label">Section Three Title</label>
                                <input type="text" className="form-control" name="section_three_title" onChange={this.handleChange} />
                                {errors.section_three_title && <div className="alert alert-danger">{errors.section_three_title}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_three_content" className="form-label">Section Three Content</label>
                                <textarea type="text" className="form-control" name="section_three_content" rows="3" onChange={this.handleChange} />
                                {errors.section_three_content && <div className="alert alert-danger">{errors.section_three_content}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_three_list" className="form-label">Section Three List</label>
                                {addThreeListFormFields.map((x, i) => {
                                    return(<div className="row mt-2" key={i}>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" name="section_three_list" onChange={(e) => this.handleListChange(e, i)} />
                                            {errors.section_three_list && <div className="alert alert-danger">{errors.section_three_list}</div>}
                                        </div>
                                        <div className="col-sm-2">
                                            {i===0 &&
                                            <input type="button" onClick={this.handleAddThreeMoreList} className="btn btn-primary" value="Add More" />}
                                            {i>=1 && <input type="button" className="btn btn-danger" value="Remove" onClick={() => this.handleRemoveThreeMoreList(i)} />}
                                        </div>
                                    </div>)
                                })}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_three_image" className="form-label">Section Three Image</label>
                                <input type="file" className="form-control" name="section_three_image" onChange={this.handleChange} />
                                {errors.section_three_image && <div className="alert alert-danger">{errors.section_three_image}</div>}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="mb-3">
                                <label htmlFor="section_four_title" className="form-label">Section Four Title</label>
                                <input type="text" className="form-control" name="section_four_title" onChange={this.handleChange} />
                                {errors.section_four_title && <div className="alert alert-danger">{errors.section_four_title}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_four_content" className="form-label">Section Four Content</label>
                                <textarea type="text" className="form-control" name="section_four_content" rows="3" onChange={this.handleChange} />
                                {errors.section_four_content && <div className="alert alert-danger">{errors.section_four_content}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_four_list" className="form-label">Section Four List</label>
                                {addFourListFormFields.map((x, i) => {
                                    return(<div className="row mt-2" key={i}>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" name="section_four_list" onChange={(e) => this.handleListChange(e, i)} />
                                            {errors.section_four_list && <div className="alert alert-danger">{errors.section_four_list}</div>}
                                        </div>
                                        <div className="col-sm-2">
                                            {i===0 &&
                                            <input type="button" onClick={this.handleAddFourMoreList} className="btn btn-primary" value="Add More" />}
                                            {i>=1 && <input type="button" className="btn btn-danger" value="Remove" onClick={() => this.handleRemoveFourMoreList(i)} />}
                                        </div>
                                    </div>)
                                })}
                                {errors.section_four_list && <div className="alert alert-danger">{errors.section_four_list}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="section_four_image" className="form-label">Section Four Image</label>
                                <input type="file" className="form-control" name="section_four_image" onChange={this.handleChange} />
                                {errors.section_four_image && <div className="alert alert-danger">{errors.section_four_image}</div>}
                            </div>
                        </div>
                    </>}
                    
                    {this.state.data.layout === "layout_2" &&
                        <div className="col-sm-12">
                            {addMoreSectionFormFields.map((value, index) => {
                                return(
                                <div key={index}>
                                    <br/>
                                    <div className="card">
                                        <div className="card-header">
                                            Section {index+1}
                                        </div>
                                        <div className="card-body row">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label htmlFor="align_image_left" className="form-label">Align Image</label>
                                                    <select className="form-control" name="align_image_left" onChange={(e) => this.handleListChange(e, index)}>
                                                        <option value="left">Left</option>
                                                        <option value="right">Right</option>
                                                    </select>
                                                    {errors.align_image_left && <div className="alert alert-danger">{errors.align_image_left}</div>}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label htmlFor="section_image" className="form-label">Image</label>
                                                    <input type="file" className="form-control" name="section_image" onChange={(e) => this.handleListChange(e, index)} />
                                                    {errors.section_image && <div className="alert alert-danger">{errors.section_image}</div>}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="mb-3">
                                                    <label htmlFor="section_title" className="form-label">Title</label>
                                                    <input type="text" className="form-control" name="section_title" onChange={(e) => this.handleListChange(e, index)} />
                                                    {errors.section_title && <div className="alert alert-danger">{errors.section_title}</div>}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="section_content" className="form-label">Content</label>
                                                    <textarea type="text" className="form-control" name="section_content" rows="3" onChange={(e) => this.handleListChange(e, index)} />
                                                    {errors.section_content && <div className="alert alert-danger">{errors.section_content}</div>}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="mb-3">
                                                    <label htmlFor="section_listing" className="form-label">Listing</label>
                                                    {this.state.data.section_listing[index] && Object.values(this.state.data.section_listing[index]).map((x, i) => {
                                                        return(<div className="row mt-2" key={i}>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" name="section_listing" value={x} onChange={(e) => this.handleListChange(e, index, i)} />
                                                                {errors.section_listing && <div className="alert alert-danger">{errors.section_listing}</div>}
                                                            </div>
                                                            <div className="col-sm-3">
                                                                {i===0 &&
                                                                <input type="button" onClick={(e) => this.handleAddLayoutMoreList(e, index)} className="btn btn-primary" value="Add More Item" />}
                                                                {i>=1 && <input type="button" className="btn btn-danger" value="Remove" onClick={(e) => this.handleRemoveLayoutMoreList(e, index, i)} />}
                                                            </div>
                                                        </div>)
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        {index>=1 && <div className="card-footer">
                                            <input type="button" className="btn btn-danger" value="Remove" onClick={() => this.handleRemoveMoreSectionForm(index)} />
                                        </div>}
                                    </div>
                                </div>
                                )
                            })}
                            <div className="card mt-5">
                                <div className="card-header">
                                    <input type="button" className="btn btn-primary" value="Add More" onClick={this.handleAddMoreSectionForm} />
                                </div>
                            </div>
                        </div>
                    }

                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select className="form-control" name="status" onChange={this.handleChange}>
                                <option value="">-- Select Status --</option>
                                <option value="enabled">Enabled</option>
                                <option value="disabled">Disabled</option>
                            </select>
                            {errors.status && <div className="alert alert-danger">{errors.status}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12 mt-5">
                        <button type="submit" className="btn btn-primary">Add Page</button>
                    </div>
                </form>
            </div>
            <div className="col col-lg-2"></div>
        </div>
    }

}

export default Add
