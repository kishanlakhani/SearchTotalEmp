import { Component } from '@angular/core';
import { EmpArr } from './interface/EmpArr';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  // IEmpArr:EmpArr;
  titles:string= 'search-total';
  nameSearchArr:EmpArr[] = []; //for search element data store
  showName = ''; //for dropdown name value
  dropDownShowData:boolean = false;
  showNameData:EmpArr={}; // for dropdown name array object

  empArr:EmpArr[] = [

    {id:"1",name:"Kishan",age:20,salary:15000},
    {id:"2",name:"Mehul",age:19,salary:16000},
    {id:"3",name:"Nirali",age:18,salary:17000},
    {id:"4",name:"Riya",age:19,salary:18000},
    {id:"5",name:"Parth",age:20,salary:19000},
    {id:"6",name:"Deep",age:21,salary:20000},
    {id:"7",name:"Drashti",age:20,salary:21000},
    {id:"8",name:"Monika",age:21,salary:22000},
    {id:"9",name:"Vasanti",age:20,salary:23000},
    {id:"10",name:"Manthan",age:22,salary:24000}
  ];



  




  // map for only name array for option list
  nameList:string[] = this.empArr.map((emp)=>{
    return emp.name;
  });

  //using map return a option list tag
  optionList:string[] = this.nameList.map((name,index)=>{
    return `<option value=${index}>${name}</option>`;
    // return total;
  },"");
  
  //drop down many name print and string interpolation in select tag
  selectOption():void{
    console.log(this.showNameData);
    console.log(this.nameSearchArr.length);

    // console.log(this.optionList)
      document.getElementById("nameList").innerHTML ="<option  disabled='disabled'>--select--</optin>" + this.optionList;
  }
     
  // for input search box and find value with empArr;   
  searchName():void{
    this.dropDownShowData=false;
    let nameSearch:string =(<HTMLInputElement>document.getElementById("nameSearch")).value.toLowerCase();
    if(nameSearch!=""){
      // let nameReg = /[]/ig;
      let name:EmpArr[] = this.empArr.filter(emp=>{
      // console.log(emp.name.search(nameSearch))
      return emp.name.toLocaleLowerCase().search(nameSearch)!=-1?emp.name:'';
    })
    this.nameSearchArr = name;
    console.log(name)
    this.showNameData = {};
    }
    else{
      this.nameSearchArr=[];
    }    
  }

  // on total salary button click sum all salary and show
  totalSalary():void{
    let totalSalary = document.getElementById("totalSalary");

    // console.log(this.empArr)
    let totalSalarySum:number = this.empArr.reduce((pre ,emp)=>{

      //  console.log(emp.salary) 
      return pre += Number(emp.salary);
    },0)
    totalSalary.innerHTML = `Total Salary : ${totalSalarySum}` ;
    console.log(totalSalarySum);
  }

  // for drop down select show data
  showData():void{
    // console.log(document.getElementById("nameList").value)
    this.dropDownShowData=true;
    this.showName = (<HTMLInputElement>document.getElementById("nameList")).value;
    // console.log(this.showName)
    this.showNameData = this.empArr[this.showName];
    console.log(this.showNameData)
    this.nameSearchArr=[];
  }
}
