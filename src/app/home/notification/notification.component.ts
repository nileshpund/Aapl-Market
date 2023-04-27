import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [
    {
      date: 'Wednesday 12:30 PM',
      header: 'Order Placed',
      text: 'Congrats, order has been placed successfully',
      isActive: true,
      imgPath:'../../assets/cart.png'
    },
    {
      date: 'Wednesday 12:30 PM',
      header: 'Order Delivered',
      text: 'Order has been delivered successfully',
      isActive: true,
      imgPath:'../../assets/order.png'
    },
    {
      date: 'Wednesday 12:30 PM',
      header: 'Order Shipped',
      text: 'Order has been shipped successfully',
      imgPath:'../../assets/tracking.png'
    },
    {
      date: 'Wednesday 12:30 PM',
      header: 'Out For Delivery',
      text: 'Order has been dispatced, will recieve shortly at your doorstep',
      imgPath:'../../assets/delivery.png'
    },
    {
      date: 'Wednesday 12:30 PM',
      header: 'Order Placed',
      text: 'Congrats, order has been placed successfully',
      imgPath:'../../assets/cart.png'
    },
  ]
  constructor() { }

  ngOnInit() { }

}
