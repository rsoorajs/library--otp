# OTP Generator for Reactjs and Nodejs

A simple npm package to generate random otp for reactjs and nodejs.

#usage for Nodejs

```
const otp = require("./node_modules/randomotp/node");

const generatedOtp = otp(6);
console.log(generatedOtp);
// otp(6) 6 -is the length of the otp
```

#usage for ReactJS

```
import otp from "../node_modules/randomotp/react";

const generatedOtp = otp(6);
console.log(generatedOtp);
// otp(6) 6 -is the length of the otp
```
