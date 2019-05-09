let test = 1;
async function hoge() {
    return 2;
}
async function huga() {
    let result =  await hoge()
    return result
}
huga()
.then((res) => {
    test = res
    console.log(test)
})
console.log(test)
