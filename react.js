// Random OTP Generator

const otp = (limit) => {
    const numbers = "0123456789";
    let generatedOtp = "";

    for (let i = 0; i < limit; i++) {
        generatedOtp += numbers[Math.floor(Math.random() * 10)];
    }
    return generatedOtp;
};

export default otp;
