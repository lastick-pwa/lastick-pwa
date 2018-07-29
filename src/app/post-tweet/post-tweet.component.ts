import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Tweet } from '../tweet'
import { TweetService } from './../tweet.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {

  message;
  private snackBarDuration: number = 2000;
  subscription: Subscription;
  counter: any;
  countDownDate = new Date("July 31, 2018 15:37:25").getTime();


  constructor(private tweetService: TweetService, public snackBar: MatSnackBar) { }

  ngOnInit() {

    this.startCounter()

  }

  startCounter() {

    setInterval(() => {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      this.counter = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";



      // If the count down is over, write some text 
      // if (distance < 0) {
      //     clearInterval(x);
      //     document.getElementById("demo").innerHTML = "EXPIRED";
      // }
    }, 1000);

  }

  messageFormSubmit(messageForm: any) {

    if (messageForm.valid) {

      this.subscription = this.tweetService.postTweet(messageForm.value.message).subscribe(
        res => {
          console.log('[App] Tweet was posted', res)
          let snackBarRef = this.snackBar.open('Tweet was posted', null, {
            duration: this.snackBarDuration
          });
        },
        err => {
          let snackBarRef = this.snackBar.open('Tweet will be posted after you go online', null, {
            duration: this.snackBarDuration
          });
        });

      messageForm.reset()

    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
