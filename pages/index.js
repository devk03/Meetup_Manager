import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/Head'
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetup Manager</title>
        <meta name="meetup manager" content="interactice meetup manager built with react.js, mongoDB, node.js, and next.js" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>);
}

export async function getStaticProps() {

  const client = await MongoClient.connect(
    'mongodb+srv://dev-kunjadia:monkey555@cluster0.nqynwdp.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  };
}

export default HomePage;
