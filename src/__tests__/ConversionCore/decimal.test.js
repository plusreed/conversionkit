import decimal from '../../lib/ConversionCore/decimal'

it('converts binary to decimal properly', () => {
    const result = decimal(101010) // 42

    expect(result).toBe(42)
})