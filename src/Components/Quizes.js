import { useState } from "react";

const Quizes = () => {
  const [totalScore, setTotalScore] = useState("");
  const [buttonStatus, setButtonStatus] = useState(false);

  const quizData = [
    {
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: ["45", "60", "90", "120"],
      answer: "90",
    },
    {
      question: "If a triangle has an angle of 90 degrees, what is it called?",
      options: ["Obtuse", "Acute", "Right Angled", "Equilateral"],
      answer: "Right Angled",
    },
    {
      question:
        "The perimeter of an isosceles triangle is 96cm . If the base is 40cm , find the length of the equal sides.",
      options: ["28cm", "24cm", "22cm", "20cm"],
      answer: "28cm",
    },
    {
      question:
        "The three sides of a triangle are 10m, 14m and 18m respectively, and then what is the area of the given triangle.",
      options: [
        "60.19 Square Meter",
        "69.65 Square Meter",
        "55.19 Square Meter",
        "64 Square Meter",
      ],
      answer: "69.65 Square Meter",
    },
    {
      question:
        "If a triangle has its sides equal to 5cm, 4cm and 6cm, then find its perimeter",
      options: ["12cm", "15cm", "18cm", "20cm"],
      answer: "15cm",
    },
    {
      question:
        "If the height of a triangle is 7cm and base length is equal to 10 cm, then find its area.",
      options: ["25 Square cm", "30 square cm", "35 square cm", "40 square cm"],
      answer: "35 square cm",
    },
    {
      question:
        "In an isosceles right-angled triangle, the perimeter is 20 meters. what will be area?",
      options: ["15.45 square m", "34.32 square m", "9.32 square m", "17.16 square m"],
      answer: "17.16 square m",
    },
    
  ];

  const checkAnswer = (e) => {
    e.preventDefault();

    let score = 0;
    let questionNumber = 0;

    let formData = new FormData(e.target);
    for (let value of formData.values()) {
      if (value === quizData[questionNumber].answer) {
        score++;
      }
      questionNumber++;
    }

    console.log(score);
    if (questionNumber === quizData.length++) {
      setTotalScore("You Scored " + score);
      setButtonStatus(true);
    } else {
      setTotalScore("Please Answer all the Questions");
    }
  };

  return (
    <div className="quizes">
      <h2>Triangle Quizes</h2>

      <form onSubmit={(e) => checkAnswer(e)}>
        {quizData.map((data, index) => (
          <div className="questions" key={index}>
            <p>
              {index + 1}) {data.question}
            </p>
            {data.options.map((option) => (
              <span key={data.options.indexOf(option)}>
                <label>
                  <input
                    type="Radio"
                    name={"question" + index}
                    value={option}
                    readOnly
                    required="required"
                  />
                  {option}
                </label>
              </span>
            ))}
          </div>
        ))}
        <button className="submitButton" disabled={buttonStatus}>
          Check Your Score
        </button>
      </form>

      <h4>{totalScore}</h4>
    </div>
  );
};

export default Quizes;
