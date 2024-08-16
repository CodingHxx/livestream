import HostChannel from "@/components/host-channel";
import StreamList from '@/components/StreamList';
import StreamForm from '@/components/StreamForm';

export function generateMetadata({ params: { slug } }: PageProps) {
  return {
    title: `Hosting ${slug}`,
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ChannelHostPage({ params: { slug } }: PageProps) {
  return <> <HostChannel slug={slug} />  <StreamList /> <StreamForm /> </>;

}
