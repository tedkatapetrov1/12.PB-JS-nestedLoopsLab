function sumOfTwoNums(input) {
    let begining = Number(input[0]);
    let finish = Number(input[1]);
    let magicNumber = Number(input[2]);
    let result = 0;
    let comb = 0;

    for (let x1 = begining; x1 <= finish; x1++) {
        for (let x2 = begining; x2 <= finish; x2++) {
            result = x1 + x2;
            comb++;
            if (result === magicNumber) {
                console.log(`Combination N:${comb} (${x1} + ${x2} = ${magicNumber})`);
                return;
            }
            
        }
    }
    console.log(`${comb} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNums(["23",
"24",
"20"])

