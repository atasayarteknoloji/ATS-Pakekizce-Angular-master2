import { Order } from 'src/app/order/model/order';
import { Items } from 'src/app/order/model/items';

export class TurnDyehouse{
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