import { Client } from './client';
import { Order } from './order';

export class NewOrderDetail{
    id:Order;
    ficheNo:string;
    statusId:number;
    status:any;
    clientId:number;
    client:Client;
    createTime:Date;
    createBy:number;
    updateTime:Date;
    updateBy:number;
}