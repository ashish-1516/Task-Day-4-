console.log('Assignment 4 - Medium');

// Declare four variables without assigning values and print them in console

let a,b;
var c,d;

console.log(a+" "+b+" "+c+" "+d);

// How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar = "+ myvar);
// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let f1Name="Pratik";
let l1Name="Pande";
let Married1="False";
let Country1="India";
let Age1=22;
// 4.  store your first namDeclare variables toe, last name, marital status, country and age in a single line
let fName="Pratik", Name="Pande", Married="False",Country="India", Age=22;
// 5. Declare variables and assign string, boolean, undefined and null data types
let s="", t="true",u, n=null;
console.log(s,t,n,u);

// I am 25 years old. 
// You are 30 years old.
// 6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)
var an=20;
let aint=parseInt(an);
let anum=Number(an);
let nplus=(+an);

console.log(aint+""+anum+""+nplus);




//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//Use the same rest countries and print all countries name, region, sub region and population (sub region and population not given)

//1. create XHR object
let req= new XMLHttpRequest();
//2. open connection - API KEY - 8e6bbd3fe57c93e0e7c9f065966247f0 - changed to http(less secure) - https://restcountries.com/v2/all
req.open('GET','https://restcountries.com/v2/all',true);
//3. send request
req.send();    
//4. event handler for onload
req.onload=function(){
        //5. convert to string
        let result=JSON.parse(req.response);

        
        //Get all the countries from Asia continent /region using Filter function
        console.log('countries from Asia continent');
        result.filter((ele)=>{
            if(ele.region=='Asia')
                console.log(ele.name);
        })
        // Get all the countries with a population of less than 2 lakhs using Filter function
        console.log('countries with a population of less than 2 lakhs');
        result.filter((ele)=>{
            if(ele.population<2000000)
                console.log(ele.name);
        })

        // Print the following details name, capital, flag using forEach function
        console.log('name, capital, flag using forEach function');
        result.forEach(element => {
            console.log('name= '+element.name+' capital=' +element.capital+' flag = '+element.flag)
            
        });
        // Print the total population of countries using reduce function
        console.log('total population of countries using reduce function');
        let tot=result.reduce((total, i)=>{
            return total+parseInt(i.population);
        },0)
        console.log(tot)
        // Print the country which uses US Dollars as currency.
        console.log('country which uses US Dollars as currency');
        result.filter((ele)=>{
         if(ele.currencies){
            if(ele.currencies[0].name=='United States dollar')
            console.log(ele.name);
         }
            
        })

}
