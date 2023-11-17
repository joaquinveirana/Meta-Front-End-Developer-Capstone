import './Reservation.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import { useState, useEffect } from 'react';
import Button from '../../components/button/Button';
import Calendar from 'react-calendar';

const ReservationPage = () => {
  const [dateSelected, setDateSelected] = useState(new Date());
  const [hourSelected, setHourSelected] = useState(null);
  const [guestsSelected, setGuestsSelected] = useState(null);
  const [hours, setHours] = useState([]);
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    let newHours = [];
    let newGuests = [];
    for (let i = 0; i < 10; i++) {
      newHours.push({ time: i + 14, taken: Math.random() < 0.3 });
    }
    for (let i = 1; i <= 8; i++) {
      newGuests.push({ seats: i, unavailable: Math.random() < 0.3 });
    }
    setHours(newHours);
    setGuests(newGuests);
  }, [dateSelected]);

  return (
    <>
      <section className='reservation'>
        <main className='reservation-content'>
          <form name='reservationForm'>
            <div main className='reservation-content-form-title'>
              <h1 className='reservation-content-form-title-text'>
                Reserve a table!
              </h1>
              <div className='reservation-content-form-top-button'>
                <Button
                  buttonType='secondary'
                  path={null}
                  innerText='Make Reservation'
                  fillParent={false}
                  useShadow={true}
                  disabled={!hourSelected || !dateSelected || !guestsSelected}
                  callback={() => {
                    document.reservationForm.submit();
                  }}
                ></Button>
              </div>
            </div>

            <div className='reservation-content-form-time'>
              <div className='reservation-content-form-time-date'>
                <h2 className='reservation-content-subtitle'>Select date</h2>
                <Calendar
                  onChange={(newDate) => {
                    setDateSelected(newDate);
                    setGuestsSelected(null);
                    setHourSelected(null);
                  }}
                  value={dateSelected}
                  minDate={new Date()}
                />
              </div>

              <div className='reservation-content-form-hours'>
                <h2 className='reservation-content-subtitle'>Select time</h2>
                <div className='reservation-content-form-hours-buttons'>
                  {hours.map((hour, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          (hour.taken
                            ? 'reservation-content-form-hour-taken'
                            : 'reservation-content-form-hour') +
                          ' ' +
                          (hourSelected === hour.time &&
                            'reservation-content-form-hour-selected')
                        }
                        onClick={() => {
                          if (!hour.taken) setHourSelected(hour.time);
                        }}
                      >
                        {hour.time.toString() + ':00'}
                      </div>
                    );
                  })}
                </div>
                <div className='reservation-content-form-guests'>
                  <h2 className='reservation-content-subtitle'>
                    Number of guests
                  </h2>
                  <div className='reservation-content-form-hours-buttons'>
                    {guests.map((guest, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            (guest.unavailable
                              ? 'reservation-content-form-hour-taken'
                              : 'reservation-content-form-hour') +
                            ' ' +
                            (guestsSelected === guest.seats &&
                              'reservation-content-form-hour-selected')
                          }
                          onClick={() => {
                            if (!guest.unavailable)
                              setGuestsSelected(guest.seats);
                          }}
                        >
                          {guest.seats}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='reservation-content-form-bottom-button'>
                  <Button
                    buttonType='secondary'
                    path={null}
                    innerText='Make Reservation'
                    fillParent={true}
                    useShadow={true}
                    disabled={!hourSelected || !dateSelected || !guestsSelected}
                    callback={() => {
                      document.reservationForm.submit();
                    }}
                  ></Button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </section>
      <section className='reservation reservation-background'>
        <div className='reservation-content'>
          <div className='reservation-content-image-title'>
            <h1 className='reservation-content-image-title-text'>
              Check out our renovated restaurant!
            </h1>
          </div>
          <img
            className='reservation-content-image'
            src='/restaurant-inside.png'
            alt='Restaurant indoor'
          />
        </div>
      </section>
    </>
  );
};

export default ReservationPage;
