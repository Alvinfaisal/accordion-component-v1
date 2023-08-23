import React, { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <Item
          title={faq.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
          index={i}
          key={faq.title}
        >
          {faq.text}
        </Item>
      ))}
      <Item
        curOpen={curOpen}
        onOpen={setCurOpen}
        index={23}
        key={23}
        title={"What's your life"}
      >
        some item
      </Item>
    </div>
  );
}

function Item({ title, index, curOpen, onOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = index === curOpen;

  function handleIsOpen() {
    onOpen(isOpen ? null : index);
  }

  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleIsOpen}>
      <h2 className="number">{index < 10 ? `0${index + 1}` : index + 1}</h2>
      <h2 className={isOpen ? "title text" : "title"}>{title}</h2>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && (
        <div className="content-box">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default App;
