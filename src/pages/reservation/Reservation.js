import React, { useState, useEffect } from 'react';
import './Reservation.css';
import 'react-calendar/dist/Calendar.css';
import 'react-notifications/lib/notifications.css';
import Calendar from 'react-calendar';
import Button from '../../components/button/Button';
import { NotificationContainer } from 'react-notifications';
import createNotification from '../../components/notification/Notification';
import differenceInDays from 'date-fns/differenceInDays';

const fetchGetURL = 'https://5f4d322aeeec51001608e934.mockapi.io/reservation';
const fetchPostURL = 'https://5f4d322aeeec51001608e934.mockapi.io/reservation';
const defaultHours = [
  { time: 16, taken: false },
  { time: 17, taken: false },
  { time: 18, taken: false },
  { time: 19, taken: false },
  { time: 20, taken: false },
];
const defaultOccasion = [
  { occasion: 'Birthday' },
  { occasion: 'Anniversary' },
  { occasion: 'Other' },
];

const createReservationsMap = (resList) => {
  let res = {};
  for (const reservation of resList) {
    let date = new Date();
    date.setDate(date.getDate() + reservation.day);
    const adjustedDay = date.getDate();
    reservation.day = adjustedDay;
    if (res[reservation.day])
      res[reservation.day] = res[reservation.day].concat([reservation]);
    else res[reservation.day] = [reservation];
  }
  return res;
};

const ReservationPage = () => {
  const [reservationObtained, setReservationObtained] = useState(null);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [hourSelected, setHourSelected] = useState(null);
  const [guestsSelected, setGuestsSelected] = useState(null);
  const [occasionSelected, setOccasionSelected] = useState(null);
  const [hours, setHours] = useState(defaultHours);
  const [reservationMade, setReservationMade] = useState(false);

  // Get reservations
  useEffect(() => {
    fetch(fetchGetURL)
      .then((response) => response.json())
      .then((data) => setReservationObtained(createReservationsMap(data)))
      .then(() => setDateSelected((dateSelected) => new Date(dateSelected)))
      .catch((err) => {
        createNotification('error', 'Get reservations failed', err)();
      });
  }, [reservationMade]);

  // Set reserved hours
  useEffect(() => {
    if (reservationObtained && dateSelected) {
      let newHours = JSON.parse(JSON.stringify(defaultHours));
      if (reservationObtained[dateSelected.getDate()])
        for (const reservation of reservationObtained[dateSelected.getDate()]) {
          let reservedHour = newHours.find(
            (elem) => elem.time === reservation.hour
          );
          if (reservedHour) reservedHour.taken = true;
        }
      setHours(newHours);
    }
  }, [dateSelected, reservationObtained]);

  // Make new reservation
  const createReservation = () => {
    const reservation = {
      day: differenceInDays(dateSelected, new Date()) + 1,
      hour: hourSelected,
      guests: guestsSelected,
      occasion: occasionSelected,
    };
    fetch(fetchPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    })
      .then(() => createNotification('success', 'Reservation created!', '')())
      .then(() => setReservationMade(!reservationMade))
      .catch((err) =>
        createNotification('error', 'Get reservations failed', err)()
      )
      .finally(() => {
        setHourSelected(null);
        setGuestsSelected(null);
        setOccasionSelected(null);
      });
  };

  return (
    <>
      <section className={'reservation'}>
        <main className='reservation-content'>
          <form name='reservationForm'>
            <div className='reservation-content-form-title'>
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
                  disabled={
                    !hourSelected ||
                    !dateSelected ||
                    !guestsSelected ||
                    !occasionSelected
                  }
                  callback={() => createReservation()}
                ></Button>
              </div>
            </div>

            <div className='reservation-content-form-time'>
              <div className='reservation-content-form-time-date'>
                <h2 className='reservation-content-subtitle'>Select date</h2>
                <Calendar
                  onChange={(newDate) => {
                    setDateSelected(newDate);
                    setHourSelected(null);
                    setOccasionSelected(null);
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
                        data-testid='hour-container'
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
                    <input
                      aria-label='guests-number-selector'
                      type='number'
                      className='reservation-content-form-hours-buttons-input'
                      value={guestsSelected}
                      min={1}
                      max={15}
                      step={1}
                      placeholder='1 - 15'
                      onChange={(val) => setGuestsSelected(val.target.value)}
                    />
                  </div>
                </div>
                <div className='reservation-content-form-guests'>
                  <h2 className='reservation-content-subtitle'>Occasion</h2>
                  <div className='reservation-content-form-hours-buttons'>
                    {defaultOccasion.map((item, index) => {
                      return (
                        <div
                          key={index}
                          data-testid='occasion-container'
                          className={
                            'reservation-content-form-hour' +
                            ' ' +
                            (occasionSelected === item.occasion &&
                              'reservation-content-form-hour-selected')
                          }
                          onClick={() => setOccasionSelected(item.occasion)}
                        >
                          {item.occasion}
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
                    disabled={
                      !hourSelected ||
                      !dateSelected ||
                      !guestsSelected ||
                      !occasionSelected
                    }
                    callback={() => createReservation()}
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
        <NotificationContainer />
      </section>
    </>
  );
};

export default ReservationPage;
