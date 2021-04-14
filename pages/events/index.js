import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHanlder = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHanlder} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
