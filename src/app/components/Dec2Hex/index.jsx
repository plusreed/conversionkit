import React, { Component } from 'react';
import { hex } from '../../../lib/ConversionCore';

export default class Dec2Hex extends Component {
    constructor() {
        super();

        this.state = {
            number: "",
            hexRepresentation: "",
        }

        this.convertToHex = this.convertToHex.bind(this);
    }

    convertToHex(event) {
        this.setState({
            number: parseInt(event.target.value),
            hexRepresentation: hex(parseInt(event.target.value)),
        });
    }

    render() {
        return (
            <div className="p-4">
                <p className="text-sm mb-2 text-gray-600">Hex representation of {this.state.number === "" || isNaN(this.state.number) ? 'Nothing' : this.state.number} is: {this.state.hexRepresentation === "" || this.state.hexRepresentation <= -1 ? 'Nothing' : this.state.hexRepresentation}</p>
                <form>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="number"
                        placeholder="Decimal here..."
                        value={this.state.number || ""}
                        onChange={this.convertToHex}
                    />
                </form>
            </div>
        )
    }
};
