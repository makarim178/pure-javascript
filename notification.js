function showNotification({top = 0, right = 0, className, html}) {
    let notificationDiv = document.createElement('div');
    notificationDiv.classList.add(className);
    notificationDiv.textContent = html;
    notificationDiv.style.top = top + 'px';
    notificationDiv.style.right = right + 'px';
    notificationDiv.style.zIndex = 1000;
    notificationDiv.style.position = 'fixed';
    notificationDiv.style.borderRadius = '5px';
    notificationDiv.style.backgroundColor = 'red';
    notificationDiv.style.color = 'yellow';
    notificationDiv.style.border = '3px solid yellow';
    notificationDiv.style.padding = '10px';
    document.body.append(notificationDiv);
    setTimeout(() => notificationDiv.remove(), 1500);
}


// shows an element with the text "Hello" near the right-top of the window
setInterval(() => showNotification({
    top: 10,
    right: 15,
    html: `Hello! ${new Date().getSeconds()}`,
    className: 'welcome'
}), 3000);
