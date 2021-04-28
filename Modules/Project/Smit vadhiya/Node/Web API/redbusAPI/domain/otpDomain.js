
var otp = Math.floor(100000 + Math.random() * 900000)

class Otp{
    static createOtp(){
        return otp
    }
    static verifyOtp(uOtp){
        if(uOtp == otp){
            return true
        }
        return false
    }
}

module.exports = Otp

