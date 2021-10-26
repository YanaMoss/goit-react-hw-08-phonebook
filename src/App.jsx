// import AddContact from './components/AddContact/AddContact';
// import { FindContact } from './components/Contacts/FindContact';
// import { ContactList } from './components/Contacts/ContactList';
// import { Section } from './components/Section/Section';
import { Container } from './components/App/App.styled';
import { AppBar } from './components/AppBar/AppBar';

export default function App() {
  return (
    <>
      <AppBar />
      <Container>
        {/* <Section title={'Phonebook'}>
          <AddContact />
        </Section> */}
        {/* <FindContact title={'Find contact by name'} />
        <ContactList /> */}
      </Container>
    </>
  );
}
