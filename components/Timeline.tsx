const data = [
  {
    date: 'March, 1998',
    title: 'Born in Kathmandu, Nepal',
  },

  {
    date: 'June, 2016',
    title: 'Completed High School',
  },

  {
    date: 'September, 2022',
    title: 'Joined Leapfrog Technology',
  },

  {
    date: 'September 2022',
    title: 'Complete Undergraduate Studies',
  },
];

const Timeline = () => {
  return (
    <section className="bg-section py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          My Life's Timeline
        </h2>

        <ul className="timeline my-10">
          {data.map(({ date, title }, index) => (
            <li key={date}>
              <div className={index % 2 === 0 ? 'direction-r' : 'direction-l'}>
                <div className="flag-wrapper">
                  <span className="flag text-primary-normal">{date}</span>
                  {/*
<span className="time-wrapper">
                    <span className="time">{date}</span>
                  </span>
                     */}
                </div>
                <div className="text-black dark:text-white">{title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
