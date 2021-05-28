async function practice(fileName) {
    let x = await fetch(fileName);
    let y = await x.text();
    console.log(y);
}