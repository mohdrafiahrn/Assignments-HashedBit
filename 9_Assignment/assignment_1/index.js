
/*
Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

| Variable  | Scope          | Redeclaration | Reassignment |
|-----------|---------------=|---------------|--------------|
| var       | Function Scope | ✅ Allowed    | ✅ Allowed  |
| let       | Block Scope    | ❌ Not Allowed | ✅ Allowed  |
| const     | Block Scope    | ❌ Not Allowed | ❌ Not Allowed |
*/

function scopeVariable() {
    if (true) {
        var x = 10;
        let y = 40;
        const z = 90;
        console.log(x) // ✅ accessable
        console.log(y) // ✅ accessable
        console.log(z) // ✅ accessable
    }


    console.log(x)    // ✅ accessable
    // console.log(y) // ❌ not-accessable
    // console.log(z) // ❌ not-accessable
}
scopeVariable();