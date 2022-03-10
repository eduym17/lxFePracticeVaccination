import Nurse from './assets/images/nurse-blue.png';
import Star from './assets/icons/star.png';
import Schedule from './assets/icons/schedule.png';
import Location from './assets/icons/location.png';
import Calendar from './assets/icons/date_range.png';
import Vaccines from './assets/icons/vaccines.png';

const App = () => (
  <>
    <header className="bg-indigo-700 text-white flex justify-around items-center font-sans py-4">
      <a href="/" className="font-extrabold text-3xl">
        Vaccination
      </a>
      <div className="font-medium flex gap-10 items-center">
        <a href="/">Database</a>
        <a href="/">Education</a>
        <a href="/">News</a>
        <a href="/">Regulation</a>
        <button href="/" type="submit" className="bg-indigo-100 text-indigo-900 font-semibold px-4 py-2 rounded-md">
          Hoax Buster
        </button>
      </div>
    </header>
    <main className="text-white">
      <div className="bg-indigo-700 w-screen flex justify-center items-center h-[500px]">
        <div className="h-full flex flex-col justify-start w-1/3 min-w-[400px] pt-12">
          <div className="text-5xl font-bold text-left pb-6 pl-16">
            <p>Fight Virus</p>
            <p>With Vaccines</p>
          </div>
          <div className="font-light pb-6 text-left w-3/4 self-start pl-16">
            <p>
              Let&apos;s stop this pandemic by killing the virus with a vaccine,
              {' '}
              don&apos;t let yourself and your family get infected.
            </p>
          </div>
          <div className="flex justify-evenly pl-0 pb-6">
            <div className="flex items-center gap-2 font-semibold">
              <img src={Star} alt="star" />
              <p>Best protection</p>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <img src={Star} alt="star" />
              <p>Selected vaccines</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Nurse} alt="nurse" className="max-h-[500px] min-w-[600px] justify-self-start rounded-t-lg" />
          <div className="absolute bottom-8 -left-80">
            <div className="flex gap-2 items-center pb-3">
              <img src={Schedule} alt="star" />
              <p>Schedule your vaccination</p>
            </div>
            <div className="flex justify-center items-center bg-white bg-opacity-75 gap-5 p-3 rounded-md text-indigo-800">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <img src={Location} alt="location" className="bg-indigo-700 rounded-sm p-0.5" />
                  <p>Location</p>
                </div>
                <p className="font-semibold">Jakarta Utara</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <img src={Calendar} alt="calendar" className="bg-indigo-700 rounded-sm p-0.5" />
                  <p>Calendar</p>
                </div>
                <p className="font-semibold">Jakarta Utara</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <img src={Vaccines} alt="vaccines" className="bg-indigo-700 rounded-sm p-0.5" />
                  <p>Vaccines</p>
                </div>
                <p className="font-semibold">Jakarta Utara</p>
              </div>
              <button type="submit" className="bg-indigo-700 px-8 py-1.5 rounded-md text-white font-semibold text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800">
        algo
      </div>
    </main>
    <footer>
      asd
    </footer>
  </>
);

export default App;
