import { generatePswrd } from './password-gen.js'
import { assessPswrdStrength } from './password-strength-check.js'

function generateMePassword () {
    const password = generatePswrd()
    const assess = assessPswrdStrength(password)

    return password + " " + assess
}

console.log(generateMePassword())