import { Items } from 'src/app/order/model/items';
import { Order } from 'src/app/order/model/order';

export class ToDyehouse{
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