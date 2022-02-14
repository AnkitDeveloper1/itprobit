import React, { Component } from "react";

class CustomModel extends Component {

    render() {
        const { modelName, modelTitle, modelContent, buttonLabel, handleclickevent } = this.props;
        return (
            <div className="modal fade" id={modelName} tabIndex="-1" aria-labelledby={modelName+"Label"} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={modelName+"Label"}>{modelTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {modelContent}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclickevent}>{buttonLabel}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomModel;
