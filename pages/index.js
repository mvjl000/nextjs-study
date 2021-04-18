import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
};

const HomePage = (props) => {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default HomePage;
