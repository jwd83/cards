class GamepadTester extends Phaser.Scene {
    constructor() {
        super('GamepadTester');
    }


    create() {
        this.add.text(1920 / 2, 1080 / 10, 'Gamepad Tester', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5);

        this.gamepadText = this.add.text(1920 / 10, 1080 / 10 * 2, 'No gamepad detected', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0);

        this.gamepadText2 = this.add.text(1920 / 10 * 6, 1080 / 10 * 2, '--', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0);

    }


    update() {
        if (this.input.gamepad.total === 0) {
            this.gamepadText.setText('No gamepad detected');
            this.gamepadText2.setText('--');
            return;
        }

        const pad = this.input.gamepad.getPad(0);
        var report = [];
        var report2 = [];

        report.push('Gamepad ' + pad.index + ': ' + pad.id);
        report2.push('');
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
            report2.push('Up pressed');
        } else {
            report2.push('Up not pressed');
        }

        if (pad.down) {
            report2.push('Down pressed');
        } else {
            report2.push('Down not pressed');
        }

        if (pad.left) {
            report2.push('Left pressed');
        } else {
            report2.push('Left not pressed');
        }

        if (pad.right) {
            report2.push('Right pressed');
        } else {
            report2.push('Right not pressed');
        }

        if (pad.A) {
            report2.push('A pressed');
        } else {
            report2.push('A not pressed');
        }

        if (pad.B) {
            report2.push('B pressed');
        } else {
            report2.push('B not pressed');
        }

        if (pad.X) {
            report2.push('X pressed');
        } else {
            report2.push('X not pressed');
        }

        if (pad.Y) {
            report2.push('Y pressed');
        } else {
            report2.push('Y not pressed');
        }

        if (pad.L1) {
            report2.push('L1 pressed');
        } else {
            report2.push('L1 not pressed');
        }

        if (pad.R1) {
            report2.push('R1 pressed');
        } else {
            report2.push('R1 not pressed');
        }

        if (pad.L2) {
            report2.push('L2 pressed (' + pad.L2.toFixed(3) + ')');
        } else {
            report2.push('L2 not pressed');
        }

        if (pad.R2) {
            report2.push('R2 pressed (' + pad.R2.toFixed(3) + ')');
        } else {
            report2.push('R2 not pressed');
        }


        this.gamepadText.setText(report);
        this.gamepadText2.setText(report2);
    }


}

export default GamepadTester;