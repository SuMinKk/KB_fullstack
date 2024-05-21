function displayA() {
    console.log('A');
}

function displayB() {
    console.log('B');
}

function displayC() {
    console.log('C');
}

displayA();
setTimeout(displayB, 2000); // displayB 함수를 2초 후에 호출
displayC();
