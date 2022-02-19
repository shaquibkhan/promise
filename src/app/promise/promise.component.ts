import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.sass']
})
export class PromiseComponent implements OnInit {

  promiseVal:any;

  dell =[{
    name : 'Dell',
    HardDisk : '2TB',
    color : 'Black'
  }]

  hp =[{
    name : 'Dell',
    HardDisk : '2TB',
    color : 'Black'
  }]

  notAvailable =[{
    Status: 'Not Purchased'
  }]

  constructor() { }

  dellAvailable(){
  return true
  }

  hpAvailable(){
  return false
  }
 
  ngOnInit(): void {
  let buyLaptop = new Promise((resolve,reject)=>{
    if(this.dellAvailable()){
      return setTimeout(()=>{
        resolve(this.dell);
      },3000)
     
    } else if(this.hpAvailable()){
      setTimeout(()=>{
        resolve(this.hp);
      },3000)
      
    }else{
      setTimeout(()=>{
        reject(this.notAvailable);
      },3000)
    }
  });

  buyLaptop.then(res=>{
    console.log("then code=>", res);
     this.promiseVal = res;
  }).catch(res=>{
    console.log("catch code=>", res);
     this.promiseVal = res;
  })
  }

}
