/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable comma-spacing */
/* eslint-disable func-call-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable no-spaced-func */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
import {
  from,
  of ,
  interval
} from 'rxjs';
import {
  map,
  catchError
} from 'rxjs/operators';
import {
  ajax
} from 'ajax';

(() => {
  const url = '';
  const messagesElem = document.querySelector('.messages');

  interval(3000).pipe(map(() => from(ajax.getJSON(`${utl}/messages/unread`).pipe(catchError((error) => of (error))))))

    .subscribe((observerResponse) => {
      observerResponse.pipe(map((i) => i.messages)).subscribe((res) => {
        if (!res) return;

        messagesElem.innerHTML = '';

        let message;
        res.forEach((msg) => {
          message = `<li class="message">
            <div class="from">${msg.from}</div>
            <div class="subject">${msg.subject.length < 15 ? msg.subject : `${msg.subject.substring(0, 15)}...`}</div>
            <div class="received">${msg.received}</div>
            </li>`;

          messagesElem.insertAdjacentElement('afterbegin', message);
        })
      })
    })
})
