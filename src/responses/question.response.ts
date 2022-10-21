import { IQuestion } from "../types/question.interface";

export interface QuestionsResponse {
    forms: IQuestion[];
    formsCount: number;
}

export interface QuestionResponse {
    form: IQuestion;
}
