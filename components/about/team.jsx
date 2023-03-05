import React from 'react';
import { Container, Row } from 'reactstrap';
import DirectorQuotes from './DirectorQuotes';
import Section from '../section';
import MemberIcon from '../memberIcon';

const directors = [
  {
    name: 'Ali Karaki',
    title: 'Co-Executive Director',
    image: '',
    linkedIn: 'https://www.linkedin.com/in/karaki-ali/',
  },
  {
    name: 'Mohamed Louai Bou Zaher',
    title: 'Co-Executive Director',
    image: '',
    linkedIn: 'https://www.linkedin.com/in/louaibouzaher/',
  },
  {
    name: 'Osama Iskandarani',
    title: 'Director of Engineering',
    image: '',
    linkedIn: 'https://www.linkedin.com/in/osama-i-a6370122a/',
  },
  {
    name: 'Johnny Jabbour',
    title: 'Outreach Manager',
    image: '',
    linkedIn: 'https://www.linkedin.com/in/johnny-jabbour/',
  },
  {
    name: 'Joseph Chaaban',
    title: 'Product Manager',
    image: '',
    linkedIn: 'https://www.linkedin.com/in/joseph-chaaban/',
  },
  {
    name: 'Tracy Mansour',
    title: 'Operations Manager',
    image: '',
    linkedIn: 'https://www.linkedin.com/in/johnny-jabbour/',
  },
  // Add more member objects as needed
];

function Team({ directorQuotes, members, alumni }) {
  members = directors;
  return (
    <Section>
      <Container>
        <DirectorQuotes content={directorQuotes} />
        <Row>
          {members.map((member) => (
            <MemberIcon
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              linkedIn={member.linkedIn}
            />
          ))}
        </Row>
        <h2 className="p-5 m-3 center"> Alumni </h2>
        <Row>
          {alumni.map((member) => (
            <MemberIcon
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              linkedIn={member.linkedIn}
            />
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default Team;
