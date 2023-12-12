"use client";
import React, { useState } from 'react';
import Select from "react-select";
import Link from 'next/link';
import Loading from '@/components/common/Common_Loading';

const DetailRaam = () => {
    const [model, setModel] = useState(null);
    const [inputText, setInputText] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleModelChange = (selectedOption) => {
        setModel(selectedOption);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setData(null);
        setIsSuccess(false)
        if (model && inputText) {
            try {
                const response = await fetch('http://localhost:8080/api/raam/basic/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ model: model.value, inputText }),
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

    const options = [
        { value: 'gpt-4-1106-preview', label: 'OpenAI: GPT-4 turbo' },
        { value: 'gpt-4', label: 'OpenAI: GPT-4' },
        { value: 'gpt-3.5-turbo-1106', label: 'OpenAI: GPT-3.5 turbo extended' },
        { value: 'gpt-3.5-turbo', label: 'OpenAI: GPT-3.5 turbo' },
        // { value: 'llama2_7b', label: 'META: LLAMA-2 7B'},
        // { value: 'llama2_13b', label: 'META: LLAMA-2 13B'},
        // { value: 'palm2', label: 'Google: PaLM2'},
        // { value: 'phi15', label: 'Microsoft: PHI-1.5'},
    ];

    return (
        <div className="raam__inner">
            <div className="raam__header">
                <h1>RAAM</h1>
                <Link href="/raam/custom/">Personal Mode</Link>
            </div>
            <div className="raam__main">
                <div className="model__select">
                    <Select
                        options={options}
                        value={model}
                        onChange={handleModelChange}
                        placeholder="Select Model"
                    />
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

export default DetailRaam;