import { useState } from "react";
import "./Career.css";

const Career = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [cardData, setCardData] = useState([
    {
      userName: "John Doe",
      email: "john@gmail.com",
      jobRole: "Frontend Dev",
      startDate: "23-34-23",
    },
    {
      userName: "Samuel James",
      email: "sam@gmail.com",
      jobRole: "Banker",
      startDate: "11-34-24",
    },
  ]);

  const postData = (e) => {
    setCardData([...cardData, { userName, email, jobRole, startDate }]);
    setUserName("");
    setEmail("");
    setJobRole("");
    setStartDate("");
    e.preventDefault();
    alert("New Career Created");
  };

  console.log("From state", cardData);
  return (
    <div className="CareerContaine">
      <section>
        <h1>Tell Us About Your Career</h1>
        <form onSubmit={postData}>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="What Job Role are you going for?"
            required
            value={jobRole}
            onChange={(e) => {
              setJobRole(e.target.value);
            }}
          />
          <br />
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          {/* <input type="file" /> */}
          <br />
          <button type="submit">Send Request</button>
        </form>
        <h1>Cards</h1>
        <main className="cardHolder">
          {cardData.map((data, i) => {
            return (
              <div className="CareerCard" key={i}>
                <p>
                  UserName: <b> {data.userName} </b>{" "}
                </p>
                <p>
                  Email: <b> {data.email} </b>{" "}
                </p>
                <p>
                  JobRole: <b> {data.jobRole} </b>{" "}
                </p>
                <p>
                  Date: <b> {data.startDate} </b>{" "}
                </p>
              </div>
            );
          })}
        </main>
      </section>
    </div>
  );
};

export default Career;
