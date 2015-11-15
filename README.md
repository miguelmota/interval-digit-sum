# interval-digit-sum

> Find all the digits within an interval whose sum equal the target value.

# Install

```bash
npm install interval-digit-sum
```

```bash
bower install interval-digit-sum
```

# Usage

```javascript
var intervalDigitSum = require('interval-digit-sum');

var numbers = intervalDigitSum([0,100], 8);

console.log(numbers);
/*
['08', '17', '26', '35', '44', '53', '62', '71', '80']
*/
```

Unique only (non-repeating numbers)

```
var numbers = intervalDigitSum([0,100], 8, {
  unique: true
});

console.log(numbers);
/*
['08', '17', '26', '35', '53', '62', '71', '80']
*/
```

# Test

```bash
npm test
```

# License

MIT
