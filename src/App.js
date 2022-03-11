import Nurse from './assets/images/nurse.png';
import Star from './assets/icons/star.png';
import Schedule from './assets/icons/schedule.png';
import Location from './assets/icons/location.png';
import Calendar from './assets/icons/date_range.png';
import Vaccines from './assets/icons/vaccines.png';
import Astrazeneca from './assets/icons/astrazeneca.svg';
import Pfizer from './assets/icons/pfizer.svg';
import Moderna from './assets/icons/moderna.svg';
import Minimize from './assets/icons/minimize.png';
import Shield from './assets/icons/shield.png';
import Groups from './assets/icons/groups.png';
import Immunity from './assets/icons/immunity.png';
import Girl from './assets/images/girl-nobg.png';
import Favorite from './assets/icons/favorite.png';
import Avoid from './assets/icons/avoid.png';
import Eat from './assets/icons/eat.png';
import Check from './assets/icons/check.png';
import Man from './assets/images/man-left.png';
import Call from './assets/icons/call.png';
import Chat from './assets/icons/chat.png';
import Message from './assets/icons/message.png';
import Videocall from './assets/icons/video_call.png';

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
        <button href="/" type="submit" className="bg-indigo-100 text-indigo-800 font-semibold px-4 py-2 rounded-md">
          Hoax Buster
        </button>
      </div>
    </header>
    <main className="text-white">
      <div className="bg-indigo-700 w-full flex justify-center items-center h-[500px]">
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
          <img src={Nurse} alt="nurse" className="max-h-[500px] justify-self-start rounded-t-lg" />
          <div className="absolute bottom-8 -left-80">
            <div className="flex gap-2 items-center pb-3">
              <img src={Schedule} alt="star" />
              <p>Schedule your vaccination</p>
            </div>
            <div className="flex justify-center items-center bg-white bg-opacity-75 gap-5 p-3 rounded-md text-indigo-800 shadow-indigo-900 shadow-lg">
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
                  <p>Date</p>
                </div>
                <p className="font-semibold">08 July 2021</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <img src={Vaccines} alt="vaccines" className="bg-indigo-700 rounded-sm p-0.5" />
                  <p>Vaccine Type</p>
                </div>
                <p className="font-semibold">Moderna</p>
              </div>
              <button type="submit" className="bg-indigo-700 px-8 py-1.5 rounded-md text-white font-semibold text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800">
        <div className="flex justify-center gap-28 py-14">
          <img src={Astrazeneca} alt="AstraZeneca" className="h-[70px]" />
          <img src={Pfizer} alt="Pfizer" className="h-[70px]" />
          <img src={Moderna} alt="Moderna" className="h-[70px]" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2/3">
            <p className="font-bold text-4xl pb-6">Why should I vaccine?</p>
            <p className="font-light pb-8 w-1/2 self-start text-justify">
              In order to avoid any doubts about getting the COVID-19 vaccine,
              {' '}
              identify the following 4 benefits of COVID-19 vaccination:
            </p>
          </div>
          <div className="pb-14 flex gap-6">
            <div className="bg-white w-[175px] h-[210px] p-5 flex flex-col gap-2 items-start rounded-md text-indigo-700 shadow-lg shadow-indigo-900">
              <img src={Minimize} alt="Minimize" className="bg-indigo-700 p-1.5 rounded-md" />
              <p className="font-semibold">Minimize the spread of viruses</p>
              <p className="font-normal text-xs text-indigo-900">
                Vaccine has been proven effective to prevent someone
                {' '}
                from getting infected with Coronavirus
              </p>
            </div>
            <div className="bg-white w-[175px] h-[210px] p-5 flex flex-col gap-2 items-start rounded-md text-indigo-700 shadow-lg shadow-indigo-900">
              <img src={Shield} alt="Shield" className="bg-indigo-700 p-1.5 rounded-md" />
              <p className="font-semibold">Forming antibodies</p>
              <p className="font-normal text-xs text-indigo-900">
                COVID-19 vaccine proven to help shape antibody response
                {' '}
                for immune system
              </p>
            </div>
            <div className="bg-white w-[175px] h-[210px] p-5 flex flex-col gap-2 items-start rounded-md text-indigo-700 shadow-lg shadow-indigo-900">
              <img src={Groups} alt="Groups" className="bg-indigo-700 p-1.5 rounded-md" />
              <p className="font-semibold">Protecting people nearby</p>
              <p className="font-normal text-xs text-indigo-900">
                The benefits of COVID-19 vaccination are the vaccine that we get can also help
                {' '}
                protect people around us
              </p>
            </div>
            <div className="bg-white w-[175px] h-[210px] p-5 flex flex-col gap-2 items-start rounded-md text-indigo-700 shadow-lg shadow-indigo-900">
              <img src={Immunity} alt="Immunity" className="bg-indigo-700 p-1.5 rounded-md" />
              <p className="font-semibold">Creating groups immunity</p>
              <p className="font-normal text-xs text-indigo-900">
                COVID-19 vaccination is also beneficial for creating group
                {' '}
                immunity of herd immunity
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-700 flex justify-center">
        <div className="w-3/4 flex justify-center items-end">
          <div>
            <img src={Girl} alt="Nurse" className="max-h-[600px] min-w-[500px] rounded-t-lg" />
          </div>
          <div className="w-2/3 min-w-[400px] flex flex-col">
            <p className="font-bold text-4xl pb-6 pt-14">Preparation Before Vaccine</p>
            <p className="font-light pb-6 w-3/4 self-start text-justify">
              The success of vaccines is strongly influenced by the stregth of the body&apos;s
              {' '}
              immune system. Therefore, there are several things that can be tried to make
              {' '}
              the COVID-19 vaccine work:
            </p>
            <div className="pb-14 w-[300px] ml-10">
              <div className="bg-white flex items-center justify-between text-indigo-800 p-2 my-3 rounded-md shadow-lg shadow-indigo-900">
                <div className="flex items-center gap-2">
                  <img src={Shield} alt="Shield" className="bg-indigo-700 p-1 rounded-sm h-6" />
                  <p className="font-semibold">Avoid alcoholic beverages</p>
                </div>
                <div>
                  <img src={Favorite} alt="Shield" className="bg-indigo-700 p-1 rounded-full h-5" />
                </div>
              </div>
              <div className="bg-white flex items-center justify-between text-indigo-800 p-2 my-3 rounded-md shadow-lg shadow-indigo-900">
                <div className="flex items-center gap-2">
                  <img src={Avoid} alt="Shield" className="bg-indigo-700 p-1 rounded-sm h-6" />
                  <p className="font-semibold">Avoid stress</p>
                </div>
                <div>
                  <img src={Favorite} alt="Shield" className="bg-indigo-700 p-1 rounded-full h-5" />
                </div>
              </div>
              <div className="bg-white flex items-center justify-between text-indigo-800 p-2 my-3 rounded-md shadow-lg shadow-indigo-900">
                <div className="flex items-center gap-2">
                  <img src={Eat} alt="Shield" className="bg-indigo-700 p-1 rounded-sm h-6" />
                  <p className="font-semibold">Eat healthy food</p>
                </div>
                <div>
                  <img src={Favorite} alt="Shield" className="bg-indigo-700 p-1 rounded-full h-5" />
                </div>
              </div>
              <div className="bg-white flex items-center justify-between text-indigo-800 p-2 my-3 rounded-md shadow-lg shadow-indigo-900">
                <div className="flex items-center gap-2">
                  <img src={Check} alt="Shield" className="bg-indigo-700 p-1 rounded-sm h-6" />
                  <p className="font-semibold">Get enough sleep</p>
                </div>
                <div>
                  <img src={Favorite} alt="Shield" className="bg-indigo-700 p-1 rounded-full h-5" />
                </div>
              </div>
              <div className="bg-white flex items-center justify-between text-indigo-800 p-2 my-3 rounded-md shadow-lg shadow-indigo-900">
                <div className="flex items-center gap-2">
                  <img src={Favorite} alt="Shield" className="bg-indigo-700 p-1 rounded-sm h-6" />
                  <p className="font-semibold">Exercise or physycal activity</p>
                </div>
                <div>
                  <img src={Favorite} alt="Shield" className="bg-indigo-700 p-1 rounded-full h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800 flex justify-center items-center">
        <div className="w-3/4 flex justify-center items-end">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <p className="font-bold text-4xl pb-6 pt-14">Emergency Contact</p>
              <p className="font-light pb-6 w-3/4 text-justify">
                Contact one of the contacts below if you or your family feel unwell and have
                {' '}
                similar symptoms such as COVID-19, make sure you also take care of yourself
                {' '}
                before reporting to us:
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 w-[400px] gap-4 items-center justify-items-center pb-14">
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 bg-white opacity-90 text-indigo-900 rounded-md w-full shadow-lg shadow-indigo-600">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex  items-center justify-center gap-3 pt-2">
                    <img src={Call} alt="Telephone" className="bg-indigo-700 p-1 rounded-md h-6" />
                    <div>
                      <p className="font-semibold">Call</p>
                      <p className="font-light text-sm">021.123.145.14</p>
                    </div>
                  </div>
                  <button type="submit" className="bg-indigo-700 px-4 py-1 my-4 justify-self-center rounded-md text-white w-4/5">Call Now</button>
                </div>
              </div>
              <div className="col-start-2 col-end-2 row-start-1 row-end-1 bg-white opacity-90 text-indigo-900 rounded-md w-full shadow-lg shadow-indigo-600">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex  items-center justify-center gap-3 pt-2">
                    <img src={Chat} alt="Telephone" className="bg-indigo-700 p-1 rounded-md h-6" />
                    <div>
                      <p className="font-semibold">Chat</p>
                      <p className="font-light text-sm">021.123.145.14</p>
                    </div>
                  </div>
                  <button type="submit" className="bg-indigo-700 px-4 py-1 my-4 justify-self-center rounded-md text-white w-4/5">Chat now</button>
                </div>
              </div>
              <div className="col-start-1 col-end-1 row-start-2 row-end-2 bg-white opacity-90 text-indigo-900 rounded-md w-full shadow-lg shadow-indigo-600">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex  items-center justify-center gap-3 pt-2">
                    <img src={Videocall} alt="Telephone" className="bg-indigo-700 p-1 rounded-md h-6" />
                    <div>
                      <p className="font-semibold">Video Call</p>
                      <p className="font-light text-sm">021.123.145.14</p>
                    </div>
                  </div>
                  <button type="submit" className="bg-indigo-700 px-4 py-1 my-4 justify-self-center rounded-md text-white w-4/5">Video Call Now</button>
                </div>
              </div>
              <div className="col-start-2 col-end-2 row-start-2 row-end-2 bg-white opacity-90 text-indigo-900 rounded-md w-full shadow-lg shadow-indigo-600">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex  items-center justify-center gap-3 pt-2">
                    <img src={Message} alt="Telephone" className="bg-indigo-700 p-1 rounded-md h-6" />
                    <div>
                      <p className="font-semibold">Message</p>
                      <p className="font-light text-sm">021.123.145.14</p>
                    </div>
                  </div>
                  <button type="submit" className="bg-indigo-700 px-4 py-1 my-4 justify-self-center rounded-md text-white w-4/5">Message Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Man} alt="Man" className="max-h-[600px] min-w-[500px] self-end justify-self-start rounded-t-lg" />
          </div>
        </div>
      </div>
    </main>
    <footer className="bg-indigo-700 text-white flex justify-center items-center">
      <div className="w-3/4 flex justify-between pt-4">
        <div>
          <p className="font-extrabold text-xl pb-3">Vaccination</p>
          <p className="font-light pb-6 w-3/5 text-left text-sm">Our goal is to help the world free from the ongoing pandemic</p>
        </div>
        <div className="flex gap-x-6">
          <div>
            <p className="font-extrabold text-sm pb-3">About</p>
            <div className="font-light text-sm">
              <p>About us</p>
              <p>Features</p>
              <p>News & Blog</p>
            </div>
          </div>
          <div>
            <p className="font-extrabold text-sm pb-3">Company</p>
            <div className="font-light text-sm">
              <p>How We Work?</p>
              <p>Capital</p>
              <p>Security</p>
            </div>
          </div>
          <div>
            <p className="font-extrabold text-sm pb-3">Support</p>
            <div className="font-light text-sm">
              <p>FAQs</p>
              <p>Support Center</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default App;
