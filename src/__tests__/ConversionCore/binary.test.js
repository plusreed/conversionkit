import binary from '../../lib/ConversionCore/binary'

it('converts integers to binary properly', () => {
    const result = binary(42) // 101010
    expect(result).toBe("101010")
})