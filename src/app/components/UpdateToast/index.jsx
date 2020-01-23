import React, { Component } from 'react'

export default class extends Component {
    state = {
        showUpdateToast: false
    }

    componentDidMount() {
        window.addEventListener("CKCodeUpdated", () => {
            this.setState({
                showUpdateToast: true
            })
        })
    }

    onClickUpdate = () => {
        window.location.reload()
    }

    onClickNotNow = () => {
        this.setState({
            showUpdateToast: false
        })
    }

    render() {
        if (!this.state.showUpdateToast) {
            return null;
        }
        return (
            <div className="bg-gray-900 w-auto h-auto p-3 m-4 rounded-lg" style={{
                position: 'absolute',
                bottom: 0,
                right: 0
            }}>
                <p className="text-gray-100 text-md font-medium mr-2 md:inline mb-2">There is an update available for ConversionKit.</p>
                <button className="bg-blue-600 p-1 pl-2 pr-2 font-bold text-md text-gray-100 rounded-lg mr-2 inline" onClick={this.onClickUpdate}>Update</button>
                <button className="bg-red-600 p-1 pl-2 pr-2 font-bold text-md text-gray-100 rounded-lg inline" onClick={this.onClickNotNow}>Not now</button>
            </div>
        )
    }
}