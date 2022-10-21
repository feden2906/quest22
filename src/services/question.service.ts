import { AxiosResponse } from 'axios';

import { $api } from "./axios.config";
import { QuestionResponse, QuestionsResponse } from "../responses/question.response";
import { IQuestion } from "../types/question.interface";

export default class QuestionService {
    static async getAll(): Promise<AxiosResponse<QuestionsResponse>> {
        return $api.get<QuestionsResponse>('/forms');
    }

    static async create(data: IQuestion): Promise<AxiosResponse<QuestionResponse>> {
        return $api.post<QuestionResponse>('/forms', data);
    }
}
