import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Pagination from '../components/common/pagination';
import Table from '../components/common/table';
import Filter from '../components/common/filter';
import CustomModel from '../components/common/customModel';
import Paginate from '../../utils/paginate';
import ReviewsServices from "../services/reviewsServices";

class Listing extends Component {
    
    state = {
        deleteID: "",
        records: [],
        itemCount: 0,
        currentPage: 1,
        pageSize: 5,
        search: { customer: '', platform: '' },
        columns: [
            {path: "customer", label: "Customer"},
            {path: "message", label: "Message"},
            {path: "platform", label: "Platform"},
            {path: "action", label: "Action", key: "action", content: review => <React.Fragment><Link to={`/reviews/edit/${review._id}`}><i className="fa fa-pencil"></i></Link>&nbsp;|&nbsp;<Link to="#deleteModel" data-bs-toggle="modal" data-bs-target="#deleteModel"  onClick={() => this.handleDeleteClick(review._id)}><i className="fa fa-trash"></i></Link></React.Fragment> }
        ],
        filterFields: [
            {
                type: "text",
                name: "customer",
                placeholder: "Customer",
            },
            {
                type: "text",
                name: "platform",
                placeholder: "Platform",
            }
        ]
    };

    async componentDidMount() {
        const { data: records } = await ReviewsServices.getReviews();
        this.setState({records: records, itemCount: records.length});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }
    
    handleOnClickSearch = e => {
        const search_array = _(e.target).slice(0).take(e.target.length-1).value();
        let search_state = {...this.state.search}
        search_array.map(search => (
            search_state[search.name] = search.value
        ))
        this.setState({ search: search_state });
        
        e.preventDefault();
    }

    handleDeleteClick = (id) => {
        this.setState({deleteID: id});
    }

    handleOnClickDelete = async (e) => {
        let deleteID = this.state.deleteID;
        await ReviewsServices.deleteReviews(deleteID)
        e.preventDefault();
    }
    
    render() {
        const {records, currentPage, pageSize} = this.state;
        const response = records.filter(m => m.customer.toLowerCase().indexOf(this.state.search.customer.toLowerCase()) > -1 && m.platform.toLowerCase().indexOf(this.state.search.platform.toLowerCase()) > -1);
        const reviews = Paginate(response, currentPage, pageSize);

        return <React.Fragment>
            <CustomModel modelName="deleteModel" modelTitle="Delete Review" modelContent="Are You Sure want to delete the review" buttonLabel="Delete" handleclickevent={this.handleOnClickDelete} />

            <Filter addButtonUrl="/reviews/add" addButtonLabel="Add Reviews" handleSearch={this.handleOnClickSearch} fields={this.state.filterFields} />
            
            <Table data={reviews} columns={this.state.columns} />
            
            <Pagination itemCount={response.length} currentPage={this.state.currentPage} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
        </React.Fragment>
    }

}

export default Listing
