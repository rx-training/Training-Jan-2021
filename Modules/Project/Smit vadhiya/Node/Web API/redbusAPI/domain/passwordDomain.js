const crypto = require('crypto')

class Encdec{
    static encPassword(pass){
        var mykey1 = crypto.createCipher("aes-128-cbc", "mypassword");
        var hash = mykey1.update(pass, "utf8", "hex");
        hash += mykey1.final("hex");
        return hash
    }
    static decPassword(pass){
        var mykey = crypto.createDecipher("aes-128-cbc", "mypassword");
        var password = mykey.update(pass, "hex", "utf8");
        password += mykey.final("utf8");
        return password
    }
}

module.exports = Encdec