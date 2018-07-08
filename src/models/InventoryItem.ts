import {InventoryLocation} from './InventoryLocation'

export class InventoryItem {
    Id : string;
    Category : string;
    SubCategory : string;
    ImageUrl : string;
    Name : string;
    Description : string;
    Location : InventoryLocation;
    DateAdded : Date
}