import { AppConfig } from '../../../app.config';
import { BcUtilsService } from '../../services/bcUtils';

import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Component({
  selector: 'bc-upfile',
  templateUrl: './bcUpfile.html',
  styleUrls: ['./bcUpfile.scss'],
})
export class BcUpfile implements OnInit {
  @Input() returnUrl: string;
  @Input() tcode: string;

  @Input() defaultValue: string = '';
  @ViewChild('fileUpload') public _fileUpload: ElementRef;
  @ViewChild('inputText') public _inputText: ElementRef;

  action: string = '';
  url: string;

  constructor(
    private config: AppConfig,
    private http: Http,
    private el: ElementRef,
    private router: Router,
    private utilsService: BcUtilsService,
    private renderer: Renderer,
  ) { }

  ngOnInit () {
    this.action = this.utilsService.extractAction(this.tcode);
    this.url = this.config.apiUrl + '/upload/';
    console.log(this.url);
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  fileChanged(event) {
    console.log(event.target.files[0]);
    this._inputText.nativeElement.value = event.target.files[0].name;
  }

  /* To get value and navigate the link */
  private onClick(): void {
    const files = this._fileUpload.nativeElement.files;
    // const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#file');
    // const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    if (files.length) {
    // if (fileCount > 0) {
       const file = files[0];
       formData.append('file', file);
       // formData.append('file', inputEl.files.item(0));
       this.http.post(this.url, formData, this.utilsService.jwt())
         .map((res: Response) => res.json())
         .subscribe(
           (success) => {
             alert(success.message);
             // Or emit an event to tell user or trigger data processing
             console.log(success);
           },
           (error) => {
             alert(error._body);
             // Or emit an event to tell user
             console.log(error);
           },
           () => { console.log('Subscription is completed'); },
         );
     }
  }

  /* To return the home of tcode */
  private return(): void {
    this.router.navigate([this.returnUrl]);
  }

}
