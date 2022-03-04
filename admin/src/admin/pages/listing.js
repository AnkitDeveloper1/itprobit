import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Pagination from '../components/common/pagination';
import Table from '../components/common/table';
import Filter from '../components/common/filter';
import CustomModel from '../components/common/customModel';
import Paginate from '../../utils/paginate';
import PagesServices from "../services/pagesServices";

class Listing extends Component {
    
    state = {
        deleteID: "",
        records: [],
        itemCount: 0,
        currentPage: 1,
        pageSize: 2,
        search: { title: '', status: '' },
        columns: [
            {path: "title", label: "Title"},
            {path: "layout", label: "Layout"},
            {path: "status", label: "Status"},
            {path: "action", label: "Action", key: "action", content: page => <React.Fragment><Link to={`/pages/edit/${page._id}`}><i className="fa fa-pencil"></i></Link>&nbsp;|&nbsp;<Link to="#deleteModel" data-bs-toggle="modal" data-bs-target="#deleteModel"  onClick={() => this.handleDeleteClick(page._id)}><i className="fa fa-trash"></i></Link></React.Fragment> }
        ],
        filterFields: [
            {
                type: "text",
                name: "title",
                placeholder: "Title",
            },
            {
                type: "select",
                name: "status",
                options: [
                    {label: "-- Select Status --", value: ""},
                    {label: "Enabled", value: "enabled"},
                    {label: "Disabled", value: "disabled"}
                ]
            }
        ]
    };

    async componentDidMount() {
        const { data: records } = await PagesServices.getPages();
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
        await PagesServices.deletePage(deleteID)
        e.preventDefault();
    }
    
    render() {
        const {records, currentPage, pageSize} = this.state;
        const response = records.filter(m => m.title.toLowerCase().indexOf(this.state.search.title.toLowerCase()) > -1 && m.status.toLowerCase().indexOf(this.state.search.status.toLowerCase()) > -1);
        const pages = Paginate(response, currentPage, pageSize);

        return <React.Fragment>
            <CustomModel modelName="deleteModel" modelTitle="Delete Page" modelContent="Are You Sure want to delete the page" buttonLabel="Delete" handleclickevent={this.handleOnClickDelete} />

            <Filter addButtonUrl="/pages/add" addButtonLabel="Add Page" handleSearch={this.handleOnClickSearch} fields={this.state.filterFields} />
            
            <Table data={pages} columns={this.state.columns} />
            
            <Pagination itemCount={response.length} currentPage={this.state.currentPage} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
        </React.Fragment>
    }

}

export default Listing
