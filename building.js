function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let result = "";

    for (let floorsNeeded = floors; floorsNeeded > 0; floorsNeeded--) {
        for (let roomsNeeded = 0; roomsNeeded < rooms; roomsNeeded++) {

            if (floorsNeeded === floors) {
                if (roomsNeeded === rooms - 1) {
                    result = result + "L" + floorsNeeded + roomsNeeded;
                } else {
                    result = result + "L" + floorsNeeded + roomsNeeded + " ";
                }
            } else if (floorsNeeded % 2 === 0) {
                if (roomsNeeded === rooms - 1) {
                    result = result + "O" + floorsNeeded + roomsNeeded;
                } else {
                    result = result + "O" + floorsNeeded + roomsNeeded + " ";
                }
            } else {
                if (roomsNeeded === rooms - 1) {
                    result = result + "A" + floorsNeeded + roomsNeeded;
                } else {
                    result = result + "A" + floorsNeeded + roomsNeeded + " ";
                }
            }
        }
        console.log(result);
        result = "";
    }

}

building(["6", "4"])