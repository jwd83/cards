class GamepadTester extends Phaser.Scene {
    constructor() {
        super('GamepadTester');
    }


    create() {
        this.add.text(1920 / 2, 1080 / 10, 'Gamepad Tester', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.gamepadText = this.add.text(1920 / 6, 1080 / 10 * 2, 'No gamepad detected', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0);
    }


    update() {
        if (this.input.gamepad.total === 0) {
            this.gamepadText.setText('No gamepad detected');
            return;
        }

        const pad = this.input.gamepad.getPad(0);
        var report = [];

        report.push('Gamepad ' + pad.index + ': ' + pad.id);
        if (pad.axes.length) {

            for (var i = 0; i < pad.axes.length; i++) {
                const axis = pad.axes[i].getValue();
                report.push('Axis ' + i + ': ' + axis.toFixed(3));
            }
        }

        if (pad.buttons.length) {
            for (var i = 0; i < pad.buttons.length; i++) {
                report.push('Button ' + i + ': ' + pad.buttons[i].value);
            }
        }


        if (pad.up) {
            report.push('Up pressed');
        } else {
            report.push('Up not pressed');
        }

        if (pad.down) {
            report.push('Down pressed');
        } else {
            report.push('Down not pressed');
        }

        if (pad.left) {
            report.push('Left pressed');
        } else {
            report.push('Left not pressed');
        }

        if (pad.right) {
            report.push('Right pressed');
        } else {
            report.push('Right not pressed');
        }

        this.gamepadText.setText(report);
    }


}

export default GamepadTester;