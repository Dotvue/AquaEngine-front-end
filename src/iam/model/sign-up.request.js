/**
 * Sign up request
 * @summary
 * Represents a sign-up request
 */
export class SignUpRequest {
    /**
     * Constructor
     * @param {string} username - The username
     * @param {string} password - The password
     * @param {string} fullName - The full name
     * @param {string} phoneNumber - The phone number
     * @param {string} dniNumber - The DNI
     */
    constructor(username, password, fullName, phoneNumber, dniNumber) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.phoneNumber=  phoneNumber;
        this.dniNumber = dniNumber;
    }
}