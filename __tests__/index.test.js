/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const { execSync } = require('child_process')
const fs = require('fs')

const reconstructedFilename = 'reconstructed.js'

const keliling = (jariJari) => {
  let solution = fs.readFileSync('./index.js', 'utf-8')

  solution = solution.replace(/(let|var) jariJari .*/, `$1 jariJari = ${jariJari}`)

  fs.writeFileSync(reconstructedFilename, solution)

  return String(execSync(`node ${reconstructedFilename}`))
}

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename)
  }
})
/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/

/*
========================================================================================================
PASTIKAN SOLUSI YANG DITULIS SESUAI DENGAN SKENARIO DIBAWAH INI
========================================================================================================
*/
describe('Calculate Circumference', () => {
  it('Should produce correct result (100)', () => {
    const val = 0
    const val2 = -10
    const val3 = 10
    const val4 = 17900
    const val5 = 999999
    expect(keliling(val5)).toMatch(String(6283179.023994279))
    expect(keliling(val4)).toMatch(String(112469.01699851459))
    expect(keliling(val3)).toMatch(String(62.83185307179586))
    expect(keliling(val2)).toMatch(String(-62.83185307179586))
    expect(keliling(val)).toMatch(String(0))
  })
})
