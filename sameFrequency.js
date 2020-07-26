function sameFrequency(n1, n2) {
    let digitFreq = {};
    while (n1 > 0) {
        digitFreq[n1 % 10] = (digitFreq[n1 % 10] || 0) + 1;
        n1 = Math.floor(n1 / 10);
    }
    while (n2 > 0) {
        if (digitFreq[n2 % 10]) {
            digitFreq[n2 % 10]--;
        } else {
            return false;
        }
        n2 = Math.floor(n2 / 10);
    }
    return true;
}