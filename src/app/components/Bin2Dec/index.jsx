import React, { Component } from 'react';

export default class DecimalConverter extends Component {
    constructor() {
        super();

        this.state = {
            binary: null,
            decimalRepresentation: null,
        };

        this.convertToDecimal = this.convertToDecimal.bind(this);
    }

    convertToDecimal(event) {
        this.setState({
            binary: parseInt(event.target.value),
            decimalRepresentation: parseInt(event.target.value, 2),
        });
    }

    render() {
        return (
            <div class="p-4">
                <p class="text-sm mb-2 text-gray-600">Decimal representation of {this.state.binary === null || isNaN(this.state.binary) ? 'Nothing' : this.state.binary} is: {this.state.decimalRepresentation === null || isNaN(this.state.decimalRepresentation) ? 'Nothing' : this.state.decimalRepresentation}</p>
                <form>
                    <input
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text"
                        placeholder="Binary here..."
                        value={this.state.decimal}
                        onChange={this.convertToDecimal}
                    />
                </form>
            </div>
        )
    }
}