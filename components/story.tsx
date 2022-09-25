import { AppProps } from "../types";

export default function Story({ stories }: AppProps) {
  return (
    <div className="pt-10">
      {stories?.map((story) => (
        <div key={story.id}>
          {story.id % 2 == 0 ? (
            <div className="div1 pb-16 lg:relative  lg:pb-0">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <div className="relative z-10 lg:-my-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-4xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <img
                        className="object-cover lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                    <div>
                      <p className="mt-6 text-2xl text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue. Amet feugiat est
                        integer dolor auctor adipiscing nunc urna, sit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="div2 pb-16 lg:relative  lg:pb-0">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                    <div>
                      <p className="mt-6 text-2xl text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue. Amet feugiat est
                        integer dolor auctor adipiscing nunc urna, sit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 lg:-my-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-4xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <img
                        className="object-cover lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
