import React from "react";
import styled from "styled-components";

const Header = styled.strong`
  display: block;
`;

const Row = styled.div`
  border-bottom: 1px solid #aaa;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr;
  padding: 10px 0;
`;

const Title = styled.strong`
  align-items: center;
  display: flex;
  font-size: 1rem;
`;

const Section = ({ type, text, name }) => {
  if (type === "json") {
    const { content } = JSON.parse(text);

    return (
      <div>
        {content.map(([title, text], index) =>
          title ? (
            <Row key={index}>
              <Title>{title}: </Title>
              <div>
                <Section text={text} />
              </div>
            </Row>
          ) : (
            <Section key={index} text={text} />
          )
        )}
      </div>
    );
  }

  const parsedText = text.split("\n");

  return (
    <div>
      {name && <Header>{name}</Header>}
      {parsedText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default Section;
