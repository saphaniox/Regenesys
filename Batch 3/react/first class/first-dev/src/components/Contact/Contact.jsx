import Button from "../button/Button";

const Contact = () => {
  let a = 22;
  let b = 34;
  let c = a + b;

  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
      }}
    >
      <h1>Thi is the Contatct Page {c} </h1>
      <Button bgColor="yellow" title="Contact Us" samllTitle="Contact us Now" />
    </div>
  );
};

export default Contact;
