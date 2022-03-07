import React from "react";
import Joi from "joi";
import Form from "../components/common/form";
import BlogsServices from "../services/blogsServices";
import CategoriesServices from "../services/blogsCategoriesServices";

class Add extends Form {

    state = {
        categories: [],
        data: { categories: '', title: '', content: '', featured_image: '', tags: [], url: '', status: '' },
        addThreeListFormFields: [""],
        errors: {}
    }

    schema = {
        categories: Joi.string().min(3).max(30).required(),
        title: Joi.string().min(3).max(30).required(),
        content: Joi.string().min(3).required(),
        featured_image: Joi.any().required(),
        tags: Joi.required(),
        url: Joi.string().min(3).max(30).required(),
        status: Joi.string().required(),
    };

    async componentDidMount() {
        const { data: records } = await CategoriesServices.getCategories();
        this.setState({categories: records})
    }

    handleAddThreeMoreList = () => {
        this.setState({addThreeListFormFields: [...this.state.addThreeListFormFields, '']})
    }

    handleRemoveThreeMoreList = (index) => {
        let addThreeListFormFields = [...this.state.addThreeListFormFields];
        addThreeListFormFields.splice(index, 1);
        this.setState({addThreeListFormFields: addThreeListFormFields})
    }

    doSubmit = async () => {
        // Create an object of formData
        const formData = new FormData();
        Object.keys(this.state.data).forEach(key => {
            if(key !== "featured_image" && key !== "tags") {
                formData.append(key, this.state.data[key]);
            }
            if(key === "tags") {
                formData.append(key, JSON.stringify(this.state.data[key]));
            }
        });
        // Update the formData object
        formData.append(
            "featured_image",
            this.state.data.featured_image,
            this.state.data.featured_image.name
        );
        
        await BlogsServices.addBlog(formData)
        // Call th server
        console.log("Form Submitted");
    }

    render() {
        const { errors, categories, addThreeListFormFields } = this.state;

        return <div className="row justify-content-md-center">
            <h4>Add Blog</h4>
            <div className="col col-lg-2"></div>
            <div className="col">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="categories" className="col-sm-2 col-form-label">Select Category</label>
                        <div className="col-sm-10">
                            <select className="form-control" name="categories" onChange={this.handleChange}>
                                <option value=""></option>
                                {categories.map(category => (
                                    <option key={category._id} value={category._id}>{category.name}</option>
                                ))}
                            </select>
                            {errors.categories && <div className="alert alert-danger">{errors.categories}</div>}
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
                        <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" name="content" onChange={this.handleChange} />
                            {errors.content && <div className="alert alert-danger">{errors.content}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="featured_image" className="col-sm-2 col-form-label">Featured Image</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control" name="featured_image" onChange={this.handleChange} />
                            {errors.file && <div className="alert alert-danger">{errors.file}</div>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        {addThreeListFormFields.map((x, i) => {
                            return(<div className="row mt-2" key={i}>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="tags" onChange={(e) => this.handleListChange(e, i)} />
                                    {errors.tags && <div className="alert alert-danger">{errors.tags}</div>}
                                </div>
                                <div className="col-sm-2">
                                    {i===0 &&
                                    <input type="button" onClick={this.handleAddThreeMoreList} className="btn btn-primary" value="Add More" />}
                                    {i>=1 && <input type="button" className="btn btn-danger" value="Remove" onClick={() => this.handleRemoveThreeMoreList(i)} />}
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="url" className="col-sm-2 col-form-label">Url</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="url" onChange={this.handleChange} />
                            {errors.url && <div className="alert alert-danger">{errors.url}</div>}
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
                    <button type="submit" className="btn btn-primary">Add Blog</button>
                </form>
            </div>
            <div className="col col-lg-2"></div>
        </div>
    }

}

export default Add
