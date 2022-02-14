import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import Pagination from '../components/common/pagination';
import Table from '../components/common/table';
import Filter from '../components/common/filter';
import Paginate from '../../utils/paginate';
import PortfolioServices from "../services/portfolioServices";

class Listing extends Component {
    
    state = {
        records: [],
        itemCount: 0,
        currentPage: 1,
        pageSize: 2,
        search: { title: '', status: '' },
        columns: [
            {path: "title", label: "Title"},
            {path: "featured_image", label: "Featured Image", key: "featured_image", content: portfolio => <React.Fragment><img width="80" src={`./uploads/${portfolio.featured_image}`} alt={portfolio.title} /></React.Fragment> },
            {path: "status", label: "Status"},
            {path: "action", label: "Action", key: "action", content: portfolio => <React.Fragment><Link to={`/portfolio/edit/${portfolio._id}`}><i className="fa fa-pencil"></i></Link>&nbsp;|&nbsp;<Link to="#"><i className="fa fa-eye"></i></Link></React.Fragment> }
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
        const { data: records } = await PortfolioServices.getPortfolio();
        this.setState({records: records, itemCount: records.length});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }
    
    handleOnClickSearch = e => {
        const search_array = _(e.target).slice(0).take(e.target.length-1).value();
        let search_state = {...this.state.search}
        search_array.map(search => (
            search_state[search.title] = search.value
        ))
        this.setState({ search: search_state });
        
        e.preventDefault();
    }
    
    render() {
        const {records, currentPage, pageSize} = this.state;
        const response = records.filter(m => m.title.toLowerCase().indexOf(this.state.search.title.toLowerCase()) > -1 && m.status.toLowerCase().indexOf(this.state.search.status.toLowerCase()) > -1);
        const portfolio = Paginate(response, currentPage, pageSize);

        return <React.Fragment>
            <Filter addButtonUrl="/portfolio/add" addButtonLabel="Add Portfolio" handleSearch={this.handleOnClickSearch} fields={this.state.filterFields} />
            
            <Table data={portfolio} columns={this.state.columns} />
            
            <Pagination itemCount={response.length} currentPage={this.state.currentPage} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
        </React.Fragment>
    }

}

export default Listing
