// Given the basic salary and benefits of an employee, 
// write a program that would calculate the 
// Payee Tax, NHIF, NSSF Deductions and net salary
const prompt = require("prompt-sync")();
let payee;
let extra_taxable_pay;
let netSalary;
let grossPay=parseInt(prompt("Enter the Amount:"));
//PAYEE
function payeeTax(amount){
    if(amount<=24000){
        payee=amount*0.1
        console.log(`payee:${payee}`);
    }else if(amount<=32333){
        payee=2400;
        extra_taxable_pay = amount-24000
        payee=(extra_taxable_pay*0.25)+payee;
        console.log(`payee:${payee}`);
    }else if(amount>32334){
        payee=4483
        extra_taxable_pay=amount-32333
        payee=(extra_taxable_pay*0.30)+payee;

        console.log(`payee:${payee}`);

    }

}
const paye=payeeTax(grossPay);

//NHIF


function nhifDeducations(amount){
    if(amount<=5999){
        console.log("NHIF Deducation is:"+15);
    }else if(amount<8000){
        console.log("NHIF Deducation is:"+300);
    }else if(amount<12000){
        console.log("NHIF Deducation is:"+400);
    }else if(amount<15000){
        console.log("NHIF Deducation is:"+500);
    }else if(amount<20000){
        console.log("NHIF Deducation is:"+600);
    }else if(amount<25000){
        console.log("NHIF Deducation is:"+700);
    }else if(amount>=100000){
        console.log("NHIF Deducation is:"+1700);
    }
        
    }
const NHIF=nhifDeducations(grossPay);
//NSSF
function pensionablePay(amount){
    let tier1=((amount*6)/100);
    if(amount<=6000){
        console.log("Pension is:"+tier1);
    }else if(amount>=18000){
        console.log("Pension is:"+tier1);
    }

}
const nssf=pensionablePay(grossPay);

const totalDeductions=NHIF+nssf+paye
// netSalary=amount-totalDeductions

console.log("Total Deductions: " +totalDeductions);




