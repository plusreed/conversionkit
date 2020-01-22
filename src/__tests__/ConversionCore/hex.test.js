import hex from '../../lib/ConversionCore/hex'

it('converts integers to hex properly', () => {
    const result = hex(42) // 10000002A

    expect(result).toBe('10000002A')
})