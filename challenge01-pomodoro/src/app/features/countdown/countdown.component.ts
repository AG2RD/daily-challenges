import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subject, timer } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  state : 'STOP' | 'PLAY' | 'PAUSE' | 'FINISHED' = 'PLAY';
  @Input() countDownValue: number = 5;
  timer$: Observable<number>;
  stop$= new Subject();

  ngOnInit() {
    this.play(this.countDownValue);
  }
  pause() {
    this.state = 'PAUSE';
    this.stop$.next(true);
  }
  play(currentTime: number = 1000) {
    const startValue = this.state === 'STOP' || this.state === 'FINISHED' ? this.countDownValue : currentTime;
    this.state = 'PLAY';
    this.timer$ = timer(0, 1000).pipe(
      tap((val) =>{ if (startValue < val) {
        this.stop$.next(true);
        this.state = "FINISHED";
      }}),
      map((val) => startValue - val),
      takeUntil(this.stop$)
    );
  }
  restart() {
    this.play(this.countDownValue);
  }
  stop() {
    this.state = 'STOP';
    this.timer$ = of(this.countDownValue);
    this.stop$.next(true);
  }
}
