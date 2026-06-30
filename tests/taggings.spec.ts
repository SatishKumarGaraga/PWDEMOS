//@sanity
//@regression
//@sanity,@regression
// execute tests with both combination 
//npx playwright test taggings.spec.ts --grep "(?=.*sanity)(?=.*regression)" 
//run tests belongs to either sanity or regression
//npx playwright test taggings.spec.ts --grep "@sanity|@regression" 
//run tests belongs to sanity
// npx playwright test taggings.spec.ts --grep-invert "@sanity" 
// run test belongs to only regression and ignores sanity
// npx playwright test taggings.spec.ts --grep-invert "@sanity" "@regression"
// run test belongs to only sanity and ignores sanity
// npx playwright test taggings.spec.ts --grep-invert "@regression" "@sanity"
// to run in config file we have to write command in config file e.g grep:/@sanity/
//grespinvert:/@regression/



import {test,expect} from "@playwright/test"
// one approach
test('@sanity test',()=>
{
    console.log("test")
})

//second approach preffered

test('@sanity test 1',{tag:['@sanity','@regression']},()=>
{
    console.log("test1")
})
test('test 2',{tag:'@regression'},()=>
{
    console.log("test 2")
})
test('on test 3',{tag:'@sanity'}, ()=>
{
    console.log("test 3")
})