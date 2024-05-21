function displayA() {
    console.log('A');
}

function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        if (callback) callback();
    }, 2000);
}

function displayC() {
    console.log('C');
}

displayA();
displayB(displayC); // displayB가 2초 후에 실행되고, 완료되면 displayC가 실행됩니다.
