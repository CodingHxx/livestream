import StreamList from '../components/StreamList';
import StreamForm from '../components/StreamForm';
import GetStartedForm from "@/components/get-started";

const Page = () => {
  return (
    <div>
      <h1>Welcome to the Streaming Platform</h1>
      <StreamList />
      <StreamForm />
      <GetStartedForm />
    </div>
  );
};

export default Page;
