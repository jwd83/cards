class GamepadTester extends Phaser.Scene {
    constructor() {
        super('GamepadTester');
    }


    create() {
        this.add.text(1920 / 2, 1080 / 10, 'Gamepad Tester', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.gamepadText = this.add.text(1920 / 2, 1080 / 10 * 4, 'No gamepad detected', {
            fontSize: '18px',
            fill: '#fff'
        }).setOrigin(0.5);


    }


    update ()
    {
        if (this.input.gamepad.total === 0)
        {
            this.gamepadText.setText('No gamepad detected');
            return;
        }

        const pad = this.input.gamepad.getPad(0);

        if (pad.axes.length)
        {
            const axisH = pad.axes[0].getValue();
            const axisV = pad.axes[1].getValue();


            this.gamepadText.setText([
                'Gamepad detected',
                'Axis H: ' + axisH.toFixed(2),
                'Axis V: ' + axisV.toFixed(2)
            ]);
        }
    }


}

export default GamepadTester;