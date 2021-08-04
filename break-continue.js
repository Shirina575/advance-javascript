const nums = [-1, -2, -3, -4, -5, -6, -7, -8, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 3) {
        break;
    }
    else if(element < 0){
        console.log('continue');
        continue;

    }
    console.log(element);
}

