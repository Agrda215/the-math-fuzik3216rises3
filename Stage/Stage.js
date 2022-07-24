/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound("Video Game 1", "./Stage/sounds/Video Game 1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goal List" },
        this.whenIReceiveGoalList
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.KEY_PRESSED, { key: "g" }, this.whenKeyGPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11)
    ];

    this.vars.myVariable = 0;
    this.vars.n = 349685.39999998995;
    this.vars.t = 245.29999999999035;
    this.vars.nShow = "n(245) = 349685";
    this.vars.reqalphapow = 100;
    this.vars.alphapower = 0;
    this.vars.reqalphapowermul = 3;
    this.vars.goals2 = 0;
    this.vars.aloveLevel = 0;
    this.vars.aloveReq = 7500000;
    this.vars.score = 2.7718387500525257;
    this.vars.scorecom = 0;
    this.vars.scoreShow = "Score:3 / 0";
    this.vars.betapower = 0;
    this.vars.reqbetapow = 3;
    this.vars.reqbetapowmul = 0;
    this.vars.upgraderbetareq1 = 2;
    this.vars.upgradebetaeffect1 = 1;
    this.vars.upgraderbetaeffect2 = 0;
    this.vars.upgraderbetareq2 = 3;
    this.vars.batteryactive = 0;
    this.vars.batteryUsed = 0;
    this.vars.batteryUsedLimit = 4;
    this.vars.battery1effect = 350;
    this.vars.battery1active = 1;
    this.vars.gammapower = 0;
    this.vars.reqgammapow = 25;
    this.vars.upgradergammareq1 = 2;
    this.vars.upgradergammaeffect1 = 1;
    this.vars.upgradergammareq2 = 12;
    this.vars.upgradergammaeffect2 = 1;
    this.vars.seconds = 0;
    this.vars.days = 0;
    this.vars.daysEffect = 0;
    this.vars.clockactive = 0;
    this.vars.daysStart = 0;
    this.vars.secondShow = 0;
    this.vars.goals = [
      "Open this get g this generate for Close goals.",
      "You Are Completed 0 Goals.",
      "Your Are Played! (Reach 2 alpha-power Reward:Alpha Req Mulit Descreasing by 1.) (Completed)",
      "What when! (Reach 6 alpha-power Reward:Alpha Req Mulit Descreasing by 0.25.) (Completed)",
      "Ten A-POW (Reach 10 alpha-power) (Completed)",
      "Cool (Reach 13 alpha-power) (Completed)",
      "Alove Start (Reach 1 alove level) (Completed)",
      "Alove 2 (Reach 2 alove level) (Completed)",
      0,
      0
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.vars.nShow =
        "" +
        "n(" +
        ("" +
          Math.round(this.vars.t) +
          ("" + ") = " + Math.round(this.vars.n)));
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.t = 0;
    this.vars.n = 0;
    /* TODO: Implement data_hidevariable */ null;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.wait(0.1);
      this.vars.t += 0.1 * this.vars.upgradergammaeffect2;
      if (this.vars.alphapower > 4) {
        this.vars.n +=
          this.vars.t *
          Math.E **
            (this.vars.betapower +
              this.vars.gammapower * 1.8 +
              (this.vars.upgraderbetaeffect2 +
                Math.cos(this.scratchToRad(this.vars.daysEffect)))) *
          this.vars.battery1effect *
          (this.vars.alphapower *
            this.vars.upgradebetaeffect1 *
            this.vars.upgradergammaeffect1);
      } else {
        this.vars.n += this.vars.t;
      }
      yield;
    }
  }

  *whenIReceiveAlphaPower() {
    /* TODO: Implement data_showvariable */ null;
  }

  *whenGreenFlagClicked4() {
    this.vars.goals = [];
    this.vars.goals.push("Open this get g this generate for Close goals.");
    for (let i = 0; i < 9; i++) {
      this.vars.goals.push(0);
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.vars.goals.splice(
        2 - 1,
        1,
        "" + "You Are Completed " + ("" + this.vars.goals2 + " Goals.")
      );
      if (this.vars.alphapower > 1) {
        this.vars.goals.splice(
          3 - 1,
          1,
          "Your Are Played! (Reach 2 alpha-power Reward:Alpha Req Mulit Descreasing by 1.)"
        );
      } else {
        this.vars.goals.splice(
          3 - 1,
          1,
          "Your Are Played! (Reach 2 alpha-power Reward:Alpha Req Mulit Descreasing by 1.) (Completed)"
        );
      }
      if (this.vars.alphapower > 5) {
        this.vars.goals.splice(
          4 - 1,
          1,
          "What when! (Reach 6 alpha-power Reward:Alpha Req Mulit Descreasing by 0.25.)"
        );
      } else {
        this.vars.goals.splice(
          4 - 1,
          1,
          "What when! (Reach 6 alpha-power Reward:Alpha Req Mulit Descreasing by 0.25.) (Completed)"
        );
      }
      if (this.vars.alphapower > 9) {
        this.vars.goals.splice(5 - 1, 1, "Ten A-POW (Reach 10 alpha-power)");
      } else {
        this.vars.goals.splice(
          5 - 1,
          1,
          "Ten A-POW (Reach 10 alpha-power) (Completed)"
        );
      }
      if (this.vars.alphapower > 12) {
        this.vars.goals.splice(6 - 1, 1, "Cool (Reach 13 alpha-power)");
      } else {
        this.vars.goals.splice(
          6 - 1,
          1,
          "Cool (Reach 13 alpha-power) (Completed)"
        );
      }
      if (this.vars.aloveLevel > 0) {
        this.vars.goals.splice(7 - 1, 1, "Alove Start (Reach 1 alove level)");
      } else {
        this.vars.goals.splice(
          7 - 1,
          1,
          "Alove Start (Reach 1 alove level) (Completed)"
        );
      }
      if (this.vars.aloveLevel > 1) {
        this.vars.goals.splice(8 - 1, 1, "Alove 2 (Reach 2 alove level)");
      } else {
        this.vars.goals.splice(
          8 - 1,
          1,
          "Alove 2 (Reach 2 alove level) (Completed)"
        );
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.vars.alphapower > 1) {
        if (this.vars.alphapower > 5) {
          if (this.vars.alphapower > 9) {
            if (this.vars.alphapower > 12) {
              if (this.vars.aloveLevel > 0) {
                if (this.vars.aloveLevel > 1) {
                  this.vars.goals2 = 6;
                  this.vars.reqalphapowermul = 1.55;
                } else {
                  this.vars.goals2 = 5;
                  this.vars.reqalphapowermul = 1.55;
                }
              } else {
                this.vars.goals2 = 4;
                this.vars.reqalphapowermul = 1.75;
              }
            } else {
              this.vars.goals2 = 3;
              this.vars.reqalphapowermul = 1.75;
            }
          } else {
            this.vars.goals2 = 2;
            this.vars.reqalphapowermul = 1.75;
          }
        } else {
          this.vars.goals2 = 1;
          this.vars.reqalphapowermul = 2;
        }
      } else {
        this.vars.goals2 = 0;
        this.vars.reqalphapowermul = 3;
      }
      yield;
    }
  }

  *whenIReceiveGoalList() {
    /* TODO: Implement data_showlist */ null;
  }

  *whenGreenFlagClicked7() {
    /* TODO: Implement data_hidelist */ null;
  }

  *whenKeyGPressed() {
    /* TODO: Implement data_hidelist */ null;
  }

  *whenGreenFlagClicked8() {
    while (true) {
      yield* this.playSoundUntilDone("Video Game 1");
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.vars.n > this.vars.aloveReq) {
        for (let i = 0; i < 2; i++) {
          this.vars.aloveReq += this.vars.aloveReq;
          yield;
        }
        this.vars.aloveLevel += 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      this.vars.score = Math.log10(this.vars.n) / 2;
      this.vars.scoreShow =
        "" +
        "Score:" +
        ("" +
          Math.round(this.vars.score) +
          ("" + " / " + Math.round(this.vars.scorecom)));
      yield;
    }
  }

  *whenGreenFlagClicked11() {
    this.vars.aloveLevel = 0;
    this.vars.reqbetapow = 3;
  }
}
