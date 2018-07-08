class dbConfig {
    dbHost : string;
    dbAuthKey : string;

    constructor(dbHost : string, dbAuthKey : string) {
        this.dbHost = dbHost;
        this.dbAuthKey = dbAuthKey;
    }
}

let cosmosDbConfig : dbConfig = new dbConfig(process.env.DB_HOST || '', process.env.DB_AUTH_KEY || '');
export { cosmosDbConfig };