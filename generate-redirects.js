// import fs from 'fs'
// import path from 'path'
const fs = require('fs')
const path = require('path')
const apiUrl = process.env.BASE_URL
const config = `
/uploads/*  ${apiUrl}uploads/:splat
/api/*  ${apiUrl}api/:splat
`
const redirectsFilePath = path.join(__dirname, 'public', '_redirects')

fs.writeFileSync(redirectsFilePath, config)