const { PATH, CODE_LOCATION } = process.env

const BIN = 'node_modules/cpdf-gcf/bin'

process.env.PATH = `${PATH}:${CODE_LOCATION}/${BIN}`

module.exports.version = () => {
  return new Promise((resolve, reject) => {
    require('child_process').exec(
      'cpdf -version',
      (error, stdout, stderr) => {
        if (error) reject(error)
        else resolve(stdout)
      }
    )
  })
}
