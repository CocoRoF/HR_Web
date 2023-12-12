"use client";
import React, { useState } from 'react';
import Select from "react-select";
import Link from 'next/link';
import Image from "next/image";
import Loading from '@/components/common/Common_Loading';
import question from '@/assets/img/icon_Question.png';

const DetailRaamCustom = () => {
    const [model, setModel] = useState(null);
    const [analysisModel, setAnalysisModel] = useState(null);
    const [responsePrompt, setResponsePrompt] = useState(null);
    const [analysisPrompt, setAnalysisPrompt] = useState(null);
    const [inputText, setInputText] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleModelChange = (selectedOption) => {
        setModel(selectedOption);
    };
    const handleAnalysisModelChange = (selectedOption) => {
        setAnalysisModel(selectedOption);
    };
    const handleResponsePromptChange = (selectedOption) => {
        setResponsePrompt(selectedOption);
    };
    const handleAnalysisPromptChange = (selectedOption) => {
        setAnalysisPrompt(selectedOption);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setData(null);
        setIsSuccess(false)
        if (model && analysisModel && responsePrompt && analysisPrompt && inputText) {
            try {
                const response = await fetch('http://localhost:8080/api/raam/basic/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        model: model.value,
                        analysis_model: analysisModel.value,
                        response_prompt: responsePrompt.value,
                        analysis_prompt: analysisPrompt.value,
                        user_input: inputText}),
                });

                const result = await response.json();

                if (response.ok) {
                    setIsSuccess(true);
                    setIsLoading(false);
                    setData(result);
                } 

                else {
                    setIsLoading(false);
                    setData({"response" : "서버 오류 또는 잘못된 요청입니다."});
                }
            } 
            
            catch (error) {
                setIsLoading(false);
                setData({"response" : "요청을 보낼 수 없습니다."});
                console.error('요청을 보낼 수 없습니다.', error);
            }
        } 

        else {
            setIsLoading(false);
            setData({"response" : "모델 선택 혹은 리뷰를 입력하세요."});
            console.error('모델 선택 혹은 리뷰를 입력하세요.');
        }
    };

    const responseStyle = {
        'textAlign' : (isSuccess ? "justify" : "center"),
        'fontSize' : (isSuccess ? "1.65vh" : "2.3vh"),
    };

    const modelOptions = [
        { value: 'gpt-4-1106-preview', label: 'OpenAI: GPT-4 turbo' },
        { value: 'gpt-4', label: 'OpenAI: GPT-4' },
        { value: 'gpt-3.5-turbo-1106', label: 'OpenAI: GPT-3.5 turbo extended' },
        { value: 'gpt-3.5-turbo', label: 'OpenAI: GPT-3.5 turbo' },
    ];

    const analysisModelOptions = [
        { value: 'gpt-4-1106-preview', label: 'OpenAI: GPT-4 turbo' },
        { value: 'gpt-4', label: 'OpenAI: GPT-4' },
        { value: 'gpt-3.5-turbo-1106', label: 'OpenAI: GPT-3.5 turbo extended' },
        { value: 'gpt-3.5-turbo', label: 'OpenAI: GPT-3.5 turbo' },
        { value: 'llama2_7b', label: 'META: LLAMA-2 7B (Not Ready)'},
        { value: 'llama2_13b', label: 'META: LLAMA-2 13B (Not Ready)'},
        { value: 'palm2', label: 'Google: PaLM2 (Not Ready)'},
        { value: 'phi15', label: 'Microsoft: PHI-1.5 (Not Ready)'},
    ];

    const responsePromptOptions = [
        { value: 'response_prompt_1', label: 'Response Prompot 1' },
        { value: 'Response_prompt_2', label: 'Response Prompot 2' },
    ];

    const analysisPromptOptions = [
        { value: 'analysis_prompt_1', label: 'Analysis Prompot 1' },
        { value: 'analysis_prompt_2', label: 'Analysis Prompot 2' },
    ];

    return (
        <div className="raam__inner">
            <div className="raam__header">
                <h1>RAAM</h1>
                <Link href="/raam/">Public Mode</Link>
            </div>
            <div className="raam__main">
                <div className="model__custom__select">
                    <div className='module__select'>
                        <Select
                            options={modelOptions}
                            value={model}
                            onChange={handleModelChange}
                            placeholder="Select Model"
                        />
                    </div>
                    <Image src={question} alt="Question"/>
                    <p className='arrow_box'>모델에 관한 설명을 나타내며 모든 정보를 추합하여 답변을 생성하는 과정에서 사용되는 모델을 지정합니다.</p>
                </div>
                <div className="model__custom__select">
                    <div className='module__select'>
                        <Select
                            options={analysisModelOptions}
                            value={analysisModel}
                            onChange={handleAnalysisModelChange}
                            placeholder="Select Analysis Model"
                        />
                    </div>
                    <Image src={question} alt="Question"/>
                    <p className='arrow_box'>분석 모델에 관한 설명을 나타내며 소비자의 리뷰를 통하여 특정한 정보를 추출하는 과정에서 사용되는 모델을 지정합니다.</p>
                </div>
                <div className="model__custom__select">
                    <div className='module__select'>
                        <Select
                            options={responsePromptOptions}
                            value={responsePrompt}
                            onChange={handleResponsePromptChange}
                            placeholder="Select Response Prompt"
                        />
                    </div>
                    <Image src={question} alt="Question"/>
                    <p className='arrow_box'>답변을 생성하는 과정에서 사용되는 모델의 프롬프트를 지정합니다.</p>
                </div>
                <div className="model__custom__select">
                    <div className='module__select'>
                        <Select
                            options={analysisPromptOptions}
                            value={analysisPrompt}
                            onChange={handleAnalysisPromptChange}
                            placeholder="Select Analysis Prompt"
                        />
                    </div>
                    <Image src={question} alt="Question"/>
                    <p className='arrow_box'>리뷰에 대한 분석을 진행하는 과정에서 사용되는 모델의 프롬프트를 지정합니다.</p>
                </div>
                <div className="model__input">
                    <textarea
                        placeholder="Please Enter Your Review"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="model__submit">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            <div className="raam__result">
                {isLoading 
                ? (
                    <Loading />
                )
                : (
                    data 
                    ? ( 
                        <div style={responseStyle}>
                            <p>{JSON.stringify(data.response)}</p>
                        </div>
                    )
                    : (
                        <div>
                            <h2>Ready</h2>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default DetailRaamCustom;