import React, { Component } from 'react';
import { decimal } from '../../../lib/ConversionCore';

export default class DecimalConverter extends Component {
    constructor() {
        super();

        this.state = {
            binary: "",
            decimalRepresentation: "",
        };

        this.convertToDecimal = this.convertToDecimal.bind(this);
    }

    convertToDecimal(event) {
        this.setState({
            binary: parseInt(event.target.value),
            decimalRepresentation: decimal(event.target.value),
        });
    }

    render() {
        return (
            <div className="p-4">
                <p className="text-sm mb-2 text-gray-600">Decimal representation of {this.state.binary === "" || isNaN(this.state.binary) ? 'Nothing' : this.state.binary} is: {this.state.decimalRepresentation === "" || isNaN(this.state.decimalRepresentation) ? 'Nothing' : this.state.decimalRepresentation}</p>
                <form>
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text"
                        placeholder="Binary here..."
                        value={this.state.decimal || ""}
                        onChange={this.convertToDecimal}
                    />
                </form>
            </div>
        )
    }
}