const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

  companies.forEach(company => {
      console.log(company.name)
  })

// Alternative method
//   for(let i = 0; i<companies.length; i++){
//       console.log(companies[i]);
//   }


// filter

// Get 21 and older

// const canDrink = ages.filter(age => {
//   if (age >= 21) {
//     return true;
//   }
// })

// ES6 Version

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink)

// Alternate method
// for (let i =0; i<ages.length; i++){
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Filter Retail Companies

// const retailCompanies = companies.filter((company) => {
//   if(company.category === 'Retail') {
//     return true;
//   }
// })

// ES6 Version

const retailCompanies = companies.filter(company => company.category === 'Retail')

console.log(retailCompanies)

// Get 80's companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))

console.log(eightiesCompanies)

// Get companies that lasted 10 years or more

const tenYearCompanies = companies.filter(company => (company.end - company.start >= 10))

console.log(tenYearCompanies)

// Map

// Create array of company names

// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

const testMap = companies.map(company => `${company.name} [${company.end} - ${company.start}]`)
console.log(testMap)

//   'Company One [2004 - 1981]',
//   'Company Two [2008 - 1992]',
//   'Company Three [2007 - 1999]',
//   'Company Four [2010 - 1989]',
//   'Company Five [2014 - 2009]',
//   'Company Six [2010 - 1987]',
//   'Company Seven [1996 - 1986]',
//   'Company Eight [2016 - 2011]',
//   'Company Nine [1989 - 1981]' ]

const agesSquare = ages
// square roots each age
  .map(age => Math.sqrt(age))
// multipies each age by 2
  .map(age => age * 2)

console.log(agesSquare)


// Sort

// Sorting out companies by their start dates (earliest to latest)
// const sortedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedCompanies)

const sortedCompanyDates = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

console.log(sortedCompanyDates)
// [ { name: 'Company One',
//     category: 'Finance',
//     start: 1981,
//     end: 2004 },
//   { name: 'Company Nine',
//     category: 'Retail',
//     start: 1981,
//     end: 1989 },
//   { name: 'Company Seven',
//     category: 'Auto',
//     start: 1986,
//     end: 1996 },
//   { name: 'Company Six',
//     category: 'Finance',
//     start: 1987,
//     end: 2010 },
//   { name: 'Company Four',
//     category: 'Retail',
//     start: 1989,
//     end: 2010 },
//   { name: 'Company Two',
//     category: 'Retail',
//     start: 1992,
//     end: 2008 },
//   { name: 'Company Three',
//     category: 'Auto',
//     start: 1999,
//     end: 2007 },
//   { name: 'Company Five',
//     category: 'Technology',
//     start: 2009,
//     end: 2014 },
//   { name: 'Company Eight',
//     category: 'Technology',
//     start: 2011,
//     end: 2016 } ]

// Sort Ages

const sortAgesDes = ages.sort((a, b) => b - a)

console.log(sortAgesDes)
// [ 64, 61, 54, 45, 44, 33, 32, 25, 21, 20, 16, 15, 13, 12, 5 ]

const sortAgesAsc = ages.sort((a, b) => a - b)

console.log(sortAgesAsc)
// [ 5, 12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 54, 61, 64 ]


// Reduce

let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);
// 460

// acc -> accumulator (total), idx -> index (age), zero represents starting point
const reduceAges = ages.reduce((acc, idx) => acc + idx, 0)
console.log(reduceAges);

// Get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears)

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)

  console.log(combined)