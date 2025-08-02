import React from 'react'; 
import ExploreDifferentAccount from "./ExploreDifferentAccount";
import Hero from "./Hero";
import InvestmentOption from "./InvestmentOption";
import QuestionAndAnswer from "./QuestionAndAnswer";
import SignUpNow from "./SignUpNow";
import StepOfOpenAccount from "./StepOfOpenAccount";

function SignupPage() {
    return ( 
        <>
          <Hero/>
          <SignUpNow/>
           <InvestmentOption/>
            <StepOfOpenAccount/>
        <ExploreDifferentAccount/>
        <QuestionAndAnswer/>
        </>
     );
}

export default SignupPage;