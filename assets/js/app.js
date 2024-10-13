var cl = console.log;

const hrCall = (skill) => {
    setTimeout(()=>{
        let success = skill.toLowerCase().includes('angular');
       if(success){
        cl('A candidate is shortListed for Angular profile');
        firstTechInt();
       }else{
        cl('looking for a Angular Candidate !!!')
       }
    },3000)
}

const firstTechInt = () => {
    setTimeout(()=>{
     let error = Math.random() >= .5 ? false : true;
     if(!error){
        cl('The candidate is shortlisted for 2nd Round');
        secondTechInt()

     }else{
        cl('The candidate is not good in basics')
     }
    },2500)
}

const secondTechInt = () => {
    setTimeout(() =>{
        let error = Math.random() >= .5 ? false : true;
        if(!error){
          cl('The candidate is shortlisted for ML Round');
          MLRound();
        }else{
        cl('The candidate is struggling to write code')
        }
    },2000)
}

const MLRound = () => {
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        if(!error){
            cl('The candidate is selected for a given profile');
            hrCallForSalarNeg();
        }else{
            cl('The candidate is not able to explain his/her prev project')
        }
    },2500)
}

const hrCallForSalarNeg = () => {
    cl('congrats you are slected for given profile')
}

hrCall('angular');
