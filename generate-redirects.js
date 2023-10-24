// import fs from 'fs'
// import path from 'path'
const fs = require('fs')
const path = require('path')
const apiUrl = process.env.BASE_URL
const config = `
/uploads/*  ${apiUrl}uploads/:splat 200
/api/*  ${apiUrl}api/:splat 200
`
const redirectsFilePath = path.join(__dirname, 'public', '_redirects')

fs.writeFileSync(redirectsFilePath, config)