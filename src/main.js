// @ts-check
/**
 * VSCode Javascript Development Setup
 *
 *              | Formatting  | Linting                     | Type Checking
 * -------------+-------------+---------------------------- +---------------
 * Package      | prettier    | eslint                      | typescript
 * -------------+-------------+-----------------------------+---------------
 *              |             | eslint-config-airbnb-base   | @types/node
 * Additional   |             | eslint-config-prettier      |
 * dependencies |             | eslint-plugin-import        |
 *              |             | eslint-plugin-node          |
 * -------------+-------------+-----------------------------+---------------
 *
 * Config file  | .prettier   | .eslintrc.js                | jsconfig.json
 *
 * -------------+-------------+-----------------------------+---------------
 * VSCode       |      O      |              O              |       X
 * extensions   |             |                             |
 * -------------+-------------+-----------------------------+---------------
 */

/* eslint-disable-next-line no-console */
console.log('hello')

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`)
})
