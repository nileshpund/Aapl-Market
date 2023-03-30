import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public online: boolean = false;
  public backOnline: boolean = false;
  onlineMessage: string = '';
  isOnline: boolean = false;

  constructor(
    // public _app: App,
    public _platform: Platform,
    public _SplashScreen: SplashScreen,
    private network: Network,
    private statusBar: StatusBar,
    private modalController: ModalController
  ) {
    this.initializeApp();
    this.online = navigator.onLine;
    this.createOnline$().subscribe((isOnline) => {
      this.isOnline = isOnline
      console.log(isOnline);
      if (isOnline) {
        this.onlineMessage = 'You are connected to internet';
      } else {
        this.onlineMessage =
          'Connection lost, Please check your internet connection.';
      }
    });
  }

  initializeApp() {
    this._platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#e97109');
      setTimeout(() => {
        this._SplashScreen.hide();
      }, 100);
    });
  }

  createOnline$() {
    return merge(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }


}
