import { Order } from './order';
import { Items } from './items';

export class Packaging{
    id:number;
    orderId:number;
    order:Order;
    amount:number;
    altUnitId:number;
    altUnit:any;
    itemId:number;
    item:Items;
    createTime:Date;
    createBy:number;
    updateTime:Date;
    updateBy:number;
}