import React, { useState } from 'react';

const FAQ = [
  {
    question: "How does slice work?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam deserunt vero neque quisquam saepe, vitae architecto error animi facilis consequuntur commodi facere alias dolor voluptatem aliquid magni provident atque. Eveniet!"
  },
  {
    question: "Is my data course?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam deserunt vero neque quisquam saepe, vitae architecto error animi facilis consequuntur commodi facere alias dolor voluptatem aliquid magni provident atque. Eveniet!"
  },
  {
    question: "Does slice work well large team?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam deserunt vero neque quisquam saepe, vitae architecto error animi facilis consequuntur commodi facere alias dolor voluptatem aliquid magni provident atque. Eveniet!"
  },
  {
    question: "How do create a new account?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam deserunt vero neque quisquam saepe, vitae architecto error animi facilis consequuntur commodi facere alias dolor voluptatem aliquid magni provident atque. Eveniet!"
  }
];

const FAQComponent = ({
  questions,
  openQuestionIndex,
  setOpenQuestionIndex
}) => {
  const isOpen = (qIndex) => openQuestionIndex === qIndex;
  const handleOnClick = (qIndex) =>
    isOpen(qIndex) ? setOpenQuestionIndex(null) : setOpenQuestionIndex(qIndex);

  return (
    <>
    
      {questions.map((e, qIndex) => (
        <div key={qIndex} id="faq-wrapper" onClick={() => handleOnClick(qIndex)} className="cursor-pointer mb-4">
          <div className='flex justify-between border-b-2 pb-2'>
          <p className="lg:text-2xl text-xl ">
          {e.question}  
          </p>
          <p className='text-3xl'>{isOpen(qIndex) ? "-" : "+"} </p>
          </div>
          {isOpen(qIndex) && (
            <>
              <hr />
              <p className="mt-2">{e.answer}</p>
            </>
          )}
          
        </div>
      ))}
    </>
  );
};

export default function Faq() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  return (
    <>
      <div className="container grid lg:grid-cols-2 grid-cols-1 pb-16">
        <div>
          <h2 className='lg:text-5xl text-3xl mb-6 leading-tight lg:w-11/12  w-full'>Frequently asked Questions</h2>
          <p className='text-md leading-7 w-11/12'>
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit
            tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor.
          </p>
          <div className='mt-6'>
            <button className="primary-btn">Try for free</button>
          </div>
        </div>
        <div className='lg:mt-0 mt-10'>
          <FAQComponent
            questions={FAQ}
            openQuestionIndex={openQuestionIndex}
            setOpenQuestionIndex={setOpenQuestionIndex}
          />
        </div>
      </div>
    </>
  );
}
