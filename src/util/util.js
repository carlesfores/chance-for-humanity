import { questions } from './../data/questions';

export const getPercentage = ( partial, total ) => {
    return Math.round((partial / total) * 100);
}

export const getQuestionById = (id) => {
    return questions.find( (question) => question.id === id);
}