import React, { Component } from 'react';
import { binary } from '../../../lib/ConversionCore';

export default class BinaryConverter extends Component {
    constructor() {
        super();

        this.state = {
            number: null,
            binaryRepresentation: null,
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
            <div class="p-4">
                <p class="text-sm mb-2 text-gray-600">Binary representation of {this.state.number === null || isNaN(this.state.number) ? 'Nothing' : this.state.number} is: {this.state.binaryRepresentation === null || this.state.binaryRepresentation <= -1 ? 'Nothing' : this.state.binaryRepresentation}</p>
                <form>
                    <input
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="number"
                        placeholder="Decimal here..."
                        value={this.state.number}
                        onChange={this.convertToBinary}
                    />
                </form>
            </div>
        )
    }
}