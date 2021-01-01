import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo-album';
  imgList = [{img:"https://picsum.photos/id/684/600/400", descripcion: 'Photo tag'},
  {img:"https://picsum.photos/id/237/300/100", descripcion: 'Photo tag'},
  {img:"https://picsum.photos/id/1020/400/200", descripcion: 'Photo tag'},
  {img:"https://picsum.photos/id/1076/500/300",descripcion: 'Photo tag'}
];
  angleList = [];
  constructor(){};
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initializeAngles();
  }
  initializeAngles(){
    for(let i = 0; i<this.imgList.length; i++)
    {this.angleList.push(Math.random() * (20 - (-20)) + (-20))}
    console.log(this.angleList)
  }
}
