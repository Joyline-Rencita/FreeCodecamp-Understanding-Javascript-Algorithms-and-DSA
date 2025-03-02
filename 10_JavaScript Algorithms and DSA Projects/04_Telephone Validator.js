Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

//************************************

Solution :

function telephoneCheck(str) {
  const case1 = /^\d{3}-\d{3}-\d{4}$/; // 555-555-5555
  const case2 = /^\(\d{3}\)\d{3}-\d{4}$/; // (555)555-5555
  const case3 = /^\(\d{3}\)\s{1}\d{3}-\d{4}$/; // (555) 555-5555
  const case4 = /^\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 555 555 5555
  const case5 = /^\d{10}$/; // 5555555555
  const case6 = /^1{1}\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 1 555 555 5555
  const case7 = /^1{1}\s{1}\(\d{3}\)\s{1}\d{3}-\d{4}$/; // 1 (555) 555-5555
  const case8 = /^1{1}\(\d{3}\)\d{3}-\d{4}$/; // 1(555)555-5555
  const case9 = /^1{1}\s{1}\d{3}-\d{3}-\d{4}$/; // 1 555-555-5555
  const cases = [case1, case2, case3, case4, case5, case6, case7, case8, case9];
  let outcome = false;
  let caseIndex = 0;

  while (caseIndex < cases.length){
    if (cases[caseIndex].test(str) === false){
      caseIndex += 1;
    }

    else{
      outcome = true;
      break;
    }
  }

  return outcome;
}

telephoneCheck("555-555-5555");
