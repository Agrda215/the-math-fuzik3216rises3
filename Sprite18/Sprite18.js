/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite18/costumes/costume1.svg", {
        x: 144,
        y: 81.33333778381336
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite18/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Alove" }, this.whenIReceiveAlove),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Battery" },
        this.whenIReceiveBattery
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Beta-Power" },
        this.whenIReceiveBetaPower
      ),
      new Trigger(Trigger.BROADCAST, { name: "Clock" }, this.whenIReceiveClock)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.gammapower > this.stage.vars.upgradergammareq1 - 1) {
      this.stage.vars.upgradergammareq2 += 24;
      this.stage.vars.upgradergammaeffect2 =
        this.stage.vars.upgradergammaeffect1 * 3;
      this.stage.vars.clockactive = 1;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.upgradergammaeffect2 = 1;
    this.stage.vars.upgradergammareq2 = 12;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveAlove() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveGammaPower() {
    this.visible = true;
    /* TODO: Implement data_showvariable */ null;
  }

  *whenIReceiveBattery() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveBetaPower() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenIReceiveClock() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }
}
