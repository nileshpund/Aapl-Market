import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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

  constructor(
    // public _app: App,
    public _platform: Platform,
    public _SplashScreen: SplashScreen,
    private network: Network,
    private statusBar: StatusBar
    ) {
    this.initializeApp();
    this.online = navigator.onLine;
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

  checkNetwork() {
    window.addEventListener('offline', () => {
      this.online = false;
    });
    window.addEventListener('online', () => {
      this.online = true;
      this.backOnline = true;
      setTimeout(data => {
        this.backOnline = false;
      }, 2000);
    });
    // watch network for a disconnection
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.online = false;
    });

    // stop disconnect watch
    // disconnectSubscription.unsubscribe();


    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      if (this.online == false)
        this.backOnline = true;
      this.online = true;

      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        this.backOnline = false;
      }, 3000);
    });

  }

}
