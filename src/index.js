module.exports = function toReadable(number) {
    let zeroToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return zeroToTwenty[number];
    } else if (number < 100) {
        if (number % 10 == 0) {
            return dozens[Math.trunc(number / 10)];
        } else {
            return dozens[Math.trunc(number / 10)] + ' ' + zeroToTwenty[number % 10];
        }
    } else {
        if (number % 100 == 0) {
            return zeroToTwenty[Math.trunc(number / 100)] + ' hundred';
        } else {
            let n = number - Math.trunc(number / 100) * 100;
            if (n < 20) {
                return zeroToTwenty[Math.trunc(number / 100)] + ' hundred ' + zeroToTwenty[n];
            } else {
                if (n % 10 == 0) {
                    return zeroToTwenty[Math.trunc(number / 100)] + ' hundred ' + dozens[Math.trunc(n / 10)];
                } else {
                    return zeroToTwenty[Math.trunc(number / 100)] + ' hundred ' + dozens[Math.trunc(n / 10)] + ' ' + zeroToTwenty[n % 10];
                }
            }
        }
    }
}
