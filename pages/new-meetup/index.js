// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/Head'

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    router.push('/')
  }
  return (
    <Fragment>
      <Head>
        <title>Add Meetup</title>
        <meta name="Add Meetup" content="add meetup here to mongoDB" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>);
}

export default NewMeetupPage;