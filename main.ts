input.onButtonPressed(Button.A, function () {
    radio.sendString("enviando mensaje")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
