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
            fontSize: '32px',
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
        var report = [];

        report.push('Gamepad ' + pad.index + ': ' + pad.id);
        if (pad.axes.length)
        {

            var i = 0;

            while (i < pad.axes.length)
            {
                const axis = pad.axes[i].getValue();
                report.push('Axis ' + i + ': ' + axis.toFixed(3));
                i++;
            }


        }
        this.gamepadText.setText(report);
    }


}

export default GamepadTester;