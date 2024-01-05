const fs = require('fs')
const path = require('path')
const ts = require('typescript')

function generateVueComponent(tsTypePath, targetTypeAliasName, outputDir) {
  const sourceFile = ts.createSourceFile(
    tsTypePath,
    fs.readFileSync(tsTypePath, 'utf-8'),
    ts.ScriptTarget.ES2015,
    true
  )

  let targetTypeAliasNode

  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isTypeAliasDeclaration(node) &&
      node.name.escapedText === targetTypeAliasName
    ) {
      targetTypeAliasNode = node
    }
  })

  if (!targetTypeAliasNode) {
    console.error(`Type ${targetTypeAliasName} not found in the specified file.`)
    return
  }

  const props = []

  if (ts.isTypeLiteralNode(targetTypeAliasNode.type)) {
    targetTypeAliasNode.type.members.forEach((member) => {
      if (ts.isPropertySignature(member)) {
        console.log(member)
        props.push(member.name.escapedText)
      }
    })
  } else {
    console.error(`Type ${targetTypeAliasName} must be an object type.`)
    return
  }

  const componentName = targetTypeAliasName

  const componentTemplate = `
<template>
  <div>
    <!-- Your component template goes here -->
  </div>
</template>

<script setup lang="ts">

type ${targetTypeAliasNode.name.escapedText} = {
  ${props.map((prop) => `${prop}: any;`).join('\n  ')}
};

defineProps<${targetTypeAliasNode.name.escapedText}>()


</script>
  `

  const outputPath = path.join(outputDir, `${componentName}.vue`)
  fs.writeFileSync(outputPath, componentTemplate.trim())
  console.log(`Generated component: ${outputPath}`)
}

if (process.argv.length !== 5) {
  console.error(
    'Usage: node generate-component.js <path-to-ts-file> <type-alias-name> <output-dir>'
  )
  process.exit(1)
}

generateVueComponent(process.argv[2], process.argv[3], process.argv[4])
