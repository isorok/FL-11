let counter = 0;
let newActionAdd = document.getElementById('add_action');
let buttonAdd = document.getElementById('add_box_button');
let actionChanged = 1;
let elementDrag = null;

newActionAdd.addEventListener('keyup', inputChecker);
buttonAdd.addEventListener('click', actionsLimit);

function actionsLimit() {
    if (newActionAdd.value.trim()) {
        let maxItems = 10;
        if (counter < maxItems) {
            addAction();
        }
        if (counter === maxItems) {
            document.getElementById('overflow').textContent = 'Maximum item per list are created';
            newActionAdd.value = '';
            newActionAdd.setAttribute('disabled', 'disabled');
        }
    }
}

function addAction() {
    let list = document.getElementById('actions');
    let item = document.createElement('li');
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', start, false);
    item.addEventListener('dragover', end, false);
    item.addEventListener('drop', drop, false);
    item.setAttribute('class', 'actions');
    list.appendChild(item);
    list.addEventListener('click', itemClicker);
    let textAndBox = document.createElement('div');
    textAndBox.setAttribute('class', 'actions');
    item.appendChild(textAndBox);
    let uncheckedBox = document.createElement('i');
    textAndBox.appendChild(uncheckedBox);
    uncheckedBox.setAttribute('class', 'material-icons md-36 unchecked-square');
    let uncheckedTextBox = document.createTextNode('check_box_outline_blank');
    uncheckedBox.appendChild(uncheckedTextBox);
    let textAction = document.createElement('p');
    textAndBox.appendChild(textAction);
    let actionText = document.createTextNode(newActionAdd.value);
    textAction.appendChild(actionText);
    let bucket = document.createElement('i');
    item.appendChild(bucket);
    bucket.setAttribute('class', 'material-icons md-36 delete');
    let bucketText = document.createTextNode('delete');
    bucket.appendChild(bucketText);

    counter += actionChanged;

    newActionAdd.value = '';
    buttonAdd.setAttribute('class', 'material-icons md-dark md-inactive md-36');
    buttonAdd.style.cursor = 'default';
}

function inputChecker() {
    if (newActionAdd.value.trim()) {
        buttonAdd.setAttribute('class', 'material-icons md-36');
        buttonAdd.style.cursor = 'pointer';
    } else {
        buttonAdd.setAttribute('class', 'material-icons md-dark md-inactive md-36');
    }
}

function itemClicker(act) {
    if (act.target.classList.contains('delete')) {
        actionDelete(act);
    }
    if (act.target.classList.contains('unchecked-square')) {
        actionDone(act);
    }
}

function actionDone(act) {
    act.target.textContent = 'check_box';
    act.target.setAttribute('id', 'checked-square');
}

function actionDelete(act) {
    act.target.parentElement.remove();
    counter -= actionChanged;
    document.getElementById('overflow').textContent = '';
    newActionAdd.removeAttribute('disabled');
    buttonAdd.setAttribute('class', 'material-icons md-36');
    buttonAdd.style.cursor = 'pointer';
}

function start(act) {
    elementDrag = this;
    act.dataTransfer.effectAllowed = 'move';
    act.dataTransfer.setData('text/html', this.innerHTML);
}

function drop(act) {
    if (act.stopPropagation) {
        act.stopPropagation();
    }
    if (elementDrag !== this) {
        elementDrag.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html');
        this.addEventListener('click', itemClicker);
        elementDrag.addEventListener('click', itemClicker);
    }
    return false;
}

function end(act) {
    if (act.preventDefault) {
        act.preventDefault();
    }
    return false;
}