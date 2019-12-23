import STATUS from '../constants/status';

const validateAnswer = (answer, morse) => {
    const answerString = answer.join(' ');
  
    if (answerString === morse) {
      return STATUS.Success;
    }
    else if (answerString.length >= morse.length) {
      return STATUS.Fail;
    }
    else {
      return STATUS.Incomplete;
    }
  }

  export default validateAnswer