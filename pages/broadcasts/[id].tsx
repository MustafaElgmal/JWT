import Link from 'next/link';
import BroadcastCards from '../../components/BroadcastCards';
import { broadcasts } from '../../constants';

const broadcastsData = {
  id: 1,
  title: `Joyce Meyer LIVE | Love Life Women's Conference 2022 | Chris Tomlin, Riley Clemmons & MORE! | TBN`,
  href: '#',
  description:
    'Celebrate a Milestone with Joyce Meyer and Matt and Laurie Crouch for Joyce Meyer’s Love Life Women’s Conference in St. Louis, as they honor Joyce for her forty years of ministering the life-giving truth of Jesus around the world. Grammy and Dove-Award winning singer-worship leader Chris Tomlin will be on hand for a full concert. Additional guests: singers Riley Clemmons and Tauren Wells.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  category: { name: 'Video', href: '#' },
  videoUrl: 'https://www.youtube.com/embed/MqS-5A5LCpw',
  imageUrl:
    'https://i.ytimg.com/vi/MqS-5A5LCpw/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLAhPFyD-rhKzppfsulLWO0zknUzOA',
  preview:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  author: {
    name: 'Roel Aufderehar',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  readingLength: '6 min',
};

export default function Broadcast() {
  return (
    <>
      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-2xl font-medium text-gray-900">
                  {broadcastsData.title}
                </h1>
              </div>
            </div>
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <div className="aspect-w-16 aspect-h-9 ">
                <iframe
                  className="rounded-lg"
                  src={broadcastsData.videoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-8 lg:col-span-5">
              <div className="mt-3">
                <h2 className="text-lg font-medium text-gray-900">
                  Description
                </h2>
                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: broadcastsData.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <BroadcastCards broadcasts={broadcasts} />
      </div>
    </>
  );
}
