function travelling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let neededMoney = Number(input[index]);
    index++;
    let isEnd = false;
    let money = 0;

    while (destination !== "End") {
        while (neededMoney > money) {
            let savedMoney = input[index];
            if (savedMoney !== "End") {
                savedMoney = Number(input[index])
            } else {
                isEnd = true;
                break;
            }
            index++;
            money += savedMoney;
        }
        if (isEnd) {
            break;
        }
        console.log(`Going to ${destination}!`);

        destination = input[index];
        index++;
        neededMoney = Number(input[index]);
        index++;
        money = 0;
    }
}

travelling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])