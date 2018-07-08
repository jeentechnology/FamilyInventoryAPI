import { Client, Collection } from 'documentdb-typescript'
import { cosmosDbConfig } from './dbConfig'
import { InventoryItem } from '../models/InventoryItem'
import { InventoryLocation } from '../models/InventoryLocation'

export class dbRepository {
    client : Client;

    constructor(){
        this.client = new Client(cosmosDbConfig.dbHost, cosmosDbConfig.dbAuthKey);
        this.client.enableConsoleLog = true;
    }

    public async GetInventoryItem(id: string) : Promise<InventoryItem> {
        var coll = new Collection('InventoryCollection', 'FamilyInventoryData', this.client);
        var exists = await coll.existsAsync(id);
        if(exists) {
            var item = await coll.findDocumentAsync(id);
            return this.ConvertToInventoryItem(item);
        } else {
            return null;
        }
    }

    public async SaveInventoryItem(data: InventoryItem) : Promise<boolean> {
        return false;
    }

    private ConvertToInventoryItem(data : any) : InventoryItem {
        return new InventoryItem();
        // need to finish this method
    }
    
}