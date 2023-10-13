function Profile({ name, imgUrl, profession, awards, discoveries }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imgUrl}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li><b>Profession: </b>{profession}</li>
        <li><b>Awards: </b>{awards}</li>
        <li><b>Discovered: </b>{discoveries}</li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imgUrl="https://i.imgur.com/szV5sdGs.jpg"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoveries="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imgUrl="https://i.imgur.com/YfeOqp2s.jpg"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discoveries="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
