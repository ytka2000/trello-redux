class CredentialsStorage {

    /*
    * credentials - {username: $username, email: $email, jwt: $jwt}
    * */
    save(credentials) {throw new Error("Abstract method")}
    /*
    * returns credentials
    * */
    get() {throw new Error("Abstract method")}
    /*
    * returns only credentials.jwt
    * */
    getJwt() {throw new Error("Abstract method")}
}
export default CredentialsStorage;