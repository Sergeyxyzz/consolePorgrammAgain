function getMathResult(base, num) {
    let result = null
    let repeat = base
    if (typeof(num) != 'number' || num <= 0) {
        result = base
    }
    for (let i = 1; i < num; i++) {
        repeat += `---${base+base*i}`
        result = repeat
    }
    return result
}

console.log(getMathResult(5, 4))