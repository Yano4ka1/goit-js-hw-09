// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_orange.css";

import { Notify } from "notiflix/build/notiflix-notify-aio";


const refs = {
    btnStart: document.querySelector('button[data-start]'),
    dataDays: document.querySelector('span[data-days]'),
    dataHours: document.querySelector('span[data-hours]'),
    dataMinutes: document.querySelector('span[data-minutes]'),
    dataSeconds: document.querySelector('span[data-seconds]'),
};

let dateTime = null;

//  З констекту
const options = {
    enableTime: true, 
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };