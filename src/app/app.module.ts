import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { AppComponent } from './app.component';

import { ConfigService } from './config.service';
import { PushService } from './push.service';
import { TweetService } from './tweet.service';

import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetFeedsComponent } from './tweet-feeds/tweet-feeds.component';

import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { ControlPushComponent } from './control-push/control-push.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { WindowRef } from './window-ref';
import { NewComponentComponent } from './new-component/new-component.component';

export function initConfiguration(configService: ConfigService): Function {
  return () => configService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    ControlPushComponent,
    TweetFeedsComponent,
    PostTweetComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    Ng2CarouselamosModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfiguration,
      deps: [ConfigService],
      multi: true
    },
    TweetService,
    PushService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
