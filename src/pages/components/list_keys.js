
const people = [
  { id: 1, name: 'Creola Katherine Johnson', profession: 'mathematician', imageSrc: 'https://some-url-1.jpg' },
  { id: 2, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist', imageSrc: 'https://some-url-2.jpg' },
  { id: 3, name: 'Mohammad Abdus Salam', profession: 'physicist', imageSrc: 'https://some-url-3.jpg' },
  { id: 4, name: 'Percy Lavon Julian', profession: 'chemist', imageSrc: 'https://some-url-4.jpg' },
  { id: 5, name: 'Subrahmanyan Chandrasekhar', profession: 'astrophysicist', imageSrc: 'https://some-url-5.jpg' }
];

export default function List() {
  const listItems = people.map((person) =>
    <li key={person.id}>
      <img src={person.imageSrc} alt={person.name} />
    </li>
  );
  
  return <ul>{listItems}</ul>;
}
