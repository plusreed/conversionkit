import hex from '../../lib/ConversionCore/hex'

it('converts integers to hex properly', () => {
    const result = hex(42) // 2A

    expect(result).toBe('2A')
})