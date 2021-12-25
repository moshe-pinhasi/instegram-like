import { makeId } from "./util.service";

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

let instances = []

function _showAlert(msg) {
  const id = makeId();
  const type = msg.status === 'error' ? 'danger' : msg.status
  const elMsg = createAlert(msg, type, id)
  const lastEl = instances[instances.length-1] || {style: {}}
  let pos = (parseInt(lastEl.style['bottom'], 10) || 40) + 30
  elMsg.style['bottom'] = `${pos}px`;

  setTimeout(() => {
    elMsg.classList.add('app-message-fade-enter')
  }, 100);
  
  document.body.appendChild(elMsg)
  instances.push(elMsg)
  startTimer(id)
}
  
function startTimer(id) {
  const elMsg = document.getElementById(id);
  if (!elMsg) return

  setTimeout(() => {
    elMsg.classList.remove('app-message-fade-enter')
    instances = instances.filter(ints => id !== ints.id)

    instances.forEach(ints => {
      const pos = parseInt(ints.style['bottom'], 10) - 30
      ints.style['bottom'] = `${pos}px`;
    })

    setTimeout(elMsg.remove, 0)
  }, 3000);
}

function createAlert(msg, type, id) {
    const elMsg = document.createElement('div');
    elMsg.className = `app-message`;
    elMsg.id = id;

    const elAlert = document.createElement('div');
    elAlert.className = `app-alert alert-${type} is-dark`;

    var elTxt = document.createElement('app-alert-content');
    elTxt.innerText = msg.txt;

    // var elCloseBtn = document.createElement('button');
    // elCloseBtn.className = 'has-close-btn';
    // elCloseBtn.innerText = 'x';
    // elCloseBtn.onclick = () => closeAlert(id);
    // elAlert.appendChild(elCloseBtn);

    elAlert.appendChild(elTxt);
    elMsg.appendChild(elAlert);
    return elMsg;
}