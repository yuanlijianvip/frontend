interface Radio {
  switchRadio(): void;
}

// interface Battery {
//   checkBatteryStatus();
// }

interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}

class Car implements Radio {
  switchRadio() {

  }
}

class Cellphone implements RadioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}