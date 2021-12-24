import { makeId } from "./util.service";
import { logError } from './logger.service';

const elAlertContainer = document.createElement('div');
elAlertContainer.classList.add('alert-container');
document.body.appendChild(elAlertContainer);

export const alertService = {
    success,
    error
};

function success(txt) {
    const msg = { status: 'success', txt };
    _showAlert(msg);
}

function error(txt, err) {
    logError(err); 
    const msg = { status: 'error', txt };
    _showAlert(msg);
}

function _showAlert(msg) {
    const id = makeId();
    const elAlert = createAlert(msg, id);
    elAlertContainer.appendChild(elAlert);
    setTimeout(() => {
        closeAlert(id);
    }, 3000);
}

function closeAlert(id) {
    const elAlert = document.getElementById(id);
    if (elAlert) elAlert.remove();
}

function createAlert(msg, id) {
    const elAlert = document.createElement('div');
    elAlert.className = `alert ${msg.status}`;
    elAlert.id = id;

    var elTxt = document.createElement('p');
    elTxt.innerText = msg.txt;

    elAlert.appendChild(elTxt);

    return elAlert;
}