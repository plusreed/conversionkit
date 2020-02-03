import React, { Component } from 'react';
import { binary } from 'ConversionCore/';

export default class BinaryConverter extends Component {
    constructor() {
        super();

        this.state = {
            number: "",
            binaryRepresentation: "",
        };

        this.convertToBinary = this.convertToBinary.bind(this);
    }

    convertToBinary(event) {
        this.setState({
            number: parseInt(event.target.value),
            binaryRepresentation: binary(parseInt(event.target.value)),
        });
    }

    render() {
        return (
            <div className="p-4">
                <p className="text-sm mb-2 text-gray-600">Binary representation of {this.state.number === "" || isNaN(this.state.number) ? 'Nothing' : this.state.number} is: {this.state.binaryRepresentation === "" || this.state.binaryRepresentation <= -1 ? 'Nothing' : this.state.binaryRepresentation}</p>
                <form>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="number"
                        placeholder="Decimal here..."
                        value={this.state.number || ""}
                        onChange={this.convertToBinary}
                    />
                </form>
            </div>
        )
    }
}