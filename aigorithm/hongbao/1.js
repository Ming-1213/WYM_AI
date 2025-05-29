/**
 * 
 * @param {number} total 
 * @param {number} num
 * @return {number[]}
 */
function hongbao(total, num) {
    const arr = [];
    // Math为内置对象
    // 包装类
    let restAmount = total; // 剩余金额
    let restNum = num; // 剩余红包个数
    for(let i = 0; i < num - 1; i++) {
        let amount = Math.random(restAmount / restNum * 2).toFixed(2); // 括号里是每次的随机金额上限
        // console.log(amount);
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    // 公平性
    // 随机性
    // 平均值
    return arr;
}
console.log(hongbao(100, 10));