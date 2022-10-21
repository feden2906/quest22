import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IQuestion } from '../types/question.interface';
import { createName } from '../utils/ansvers.random';
import QuestionService from "../services/question.service";
// import cryptoRandomString from 'crypto-random-string';

const QuestionComp = () => {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<IQuestion>({ mode: 'onChange' })
    const onSubmit: SubmitHandler<IQuestion> = async (data) => {
        const j = await QuestionService.create(data)
        console.log(j)
        reset()
    }

    // @ts-ignore
    useEffect( () => {
        (async () => {
            const j = await QuestionService.getAll()
            console.log(j)
        })()

    }, [])

    return (
        <div style={{maxWidth: '200px'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>user name
                    <input {...register('name', {
                        required: 'miss name!'
                    })
                           } type={'text'} placeholder={'name'}/>
                    {errors?.name && (<div style={{ color: 'red' }}>{errors.name.message}</div>)}
                    </label>
                </div>

                <div>
                    <label>about project
                    <input style={{minHeight: '100px'}} {...register('body', {
                        required: 'miss body!'
                    })
                           } type={'text'} placeholder={'body'}/>
                    {errors?.body && (<div style={{ color: 'red' }}>{errors.body.message}</div>)}
                    </label>
                </div>
                <div>
                    <label>budget
                        <input {...register('budget', {
                            required: 'miss budget!'
                        })
                               } type={'number'} placeholder={'budget'}/>
                        {errors?.budget && (<div style={{ color: 'red' }}>{errors.budget.message}</div>)}
                    </label>
                </div>
                <div>
                    <label>term
                        <input {...register('term', {
                            required: 'miss term!'
                        })
                               } type={'number'} placeholder={'term'}/>
                        {errors?.term && (<div style={{ color: 'red' }}>{errors.term.message}</div>)}
                    </label>
                </div>
                <div>
                    <label>contact
                        <input {...register('contact', {
                            required: 'miss contact!'
                        })
                               } type={'string'} placeholder={'contact'}/>
                        {errors?.contact && (<div style={{ color: 'red' }}>{errors.contact.message}</div>)}
                    </label>
                </div>
                <div>
                    <label>comment
                        <input {...register('comment', {
                            required: 'miss comment!'
                        })
                               } type={'string'} placeholder={'comment'}/>
                        {errors?.comment && (<div style={{ color: 'red' }}>{errors.comment.message}</div>)}
                    </label>
                </div>

                <div>
                    <button>Send</button>
                </div>
            </form>
            <div>
                <button onClick={() => {
                    setValue('name', createName())
                    setValue('body', 'some body')
                }}>Set values</button>
            </div>
        </div>
    );
};

export { QuestionComp };
