import { ConfigurableAccessory } from './accessories/configurable-accessory';
import { DATABASE_ACCESSORIES } from './accessories/database';
import { GledoptoDim } from './accessories/gledopto/gledopto-dim';
import { IkeaMotionSensor } from './accessories/ikea/ikea-motion-sensor';
import { IkeaOnoffSwitch } from './accessories/ikea/ikea-onoff-switch';
import { IkeaRemoteSwitch } from './accessories/ikea/ikea-remote-switch';
import { IkeaShurtcutSwitch } from './accessories/ikea/ikea-shurtcut-switch';
import { IkeaTradfriDim } from './accessories/ikea/ikea-tradfri-dim';
import { IkeaTradfriDimColor } from './accessories/ikea/ikea-tradfri-dim-color';
import { IkeaTradfriDimColortemp } from './accessories/ikea/ikea-tradfri-dim-colortemp';
import { IkeaTradfriOutlet } from './accessories/ikea/ikea-tradfri-outlet';
import { InnrWhiteTemperature } from './accessories/innr/innr-white-temperature';
import { LinkindMotionSensor } from './accessories/linkind/linkind-motion-sensor';
import { LonsonhoDoubleSwitch } from './accessories/lonsonho/lonsonho-double-switch';
import { NamronDimmer } from './accessories/namron/namron-dimmer';
import { NamronSwitch } from './accessories/namron/namron-switch';
import { NanoleafIvy } from './accessories/nanoleaf/nanoleaf-ivy';
import { PhilipsHueWhite } from './accessories/philips/philips-hue-white';
import { PhilipsHueWhiteAndColor } from './accessories/philips/philips-hue-white-and-color';
import { PhilipsHueWhiteTemperature } from './accessories/philips/philips-hue-white-temperature';
import { SonoffContactSensor } from './accessories/sonoff/contact-sensor';
import { TuyaOnoffDoubleSwitch } from './accessories/tuya/tuya-onoff-double-switch';
import { TuyaThermostatControl } from './accessories/tuya/tuya-thermostat-control';
import {
  AqaraOppleSwitch2Buttons,
  AqaraOppleSwitch4Buttons,
  AqaraOppleSwitch6Buttons,
} from './accessories/xiaomi/aqara-opple-switch';
import { XiaomiContactSensor } from './accessories/xiaomi/xiaomi-contact-sensor';
import { XiaomiLeakSensor } from './accessories/xiaomi/xiaomi-leak-sensor';
import { XiaomiLightIntensitySensor } from './accessories/xiaomi/xiaomi-light-intensity-sensor';
import { XiaomiMotionIlluminanceSensor } from './accessories/xiaomi/xiaomi-motion-illuminance-sensor';
import { XiaomiMotionSensor } from './accessories/xiaomi/xiaomi-motion-sensor';
import { XiaomiOutlet } from './accessories/xiaomi/xiaomi-outlet';
import { XiaomiTempHumiSensor } from './accessories/xiaomi/xiaomi-temp-humi-sensor';
import { XiaomiVibrationSensor } from './accessories/xiaomi/xiaomi-vibration-sensor';
import { XiaomiWirelessSwitch } from './accessories/xiaomi/xiaomi-wireless-switch';
import { registerAccessoryClass, registerAccessoryFactory } from './registry';

export function registerSupportedDevices(): void {
  registerAccessoryClass('GLEDOPTO', ['GL-C-009'], GledoptoDim);
  registerAccessoryClass(
    ['Philips', 'Signify Netherlands B.V.'],
    ['LWA001', 'LWA002', 'LWB006', 'LWB010', 'LWB014'],
    PhilipsHueWhite
  );
  registerAccessoryClass(
    ['Philips', 'Signify Netherlands B.V.'],
    ['LTA001'],
    PhilipsHueWhiteTemperature
  );
  registerAccessoryClass(
    ['Philips', 'Signify Netherlands B.V.'],
    [
      'LCT001',
      'LCT007',
      'LCT010',
      'LCT012',
      'LCT014',
      'LCT015',
      'LCT016',
      'LCT021',
      'LCT002',
      'LCT011',
      'LCT003',
      'LCT024',
      'LCA001',
      'LCA002',
      'LCA003',
      'LST003',
      'LST004',
      'LST002',
    ],
    PhilipsHueWhiteAndColor
  );
  registerAccessoryClass(
    'IKEA of Sweden',
    [
      'LED1545G12',
      'LED1546G12',
      'LED1537R6/LED1739R5',
      'LED1536G5',
      'LED1903C5/LED1835C6',
      'LED1733G7',
      'LED1732G11',
      'LED1736G9',
    ],
    IkeaTradfriDimColortemp
  );
  registerAccessoryClass(
    'IKEA of Sweden',
    [
      'LED1623G12',
      'LED1650R5',
      'LED1837R5',
      'LED1842G3',
      'LED1622G12',
      'LED1649C5',
      'LED1836G9',
      'LED1934G3',
      'ICPSHC24-10EU-IL-1',
      'ICPSHC24-30EU-IL-1',
    ],
    IkeaTradfriDim
  );
  registerAccessoryClass('IKEA of Sweden', ['E1603/E1702'], IkeaTradfriOutlet);
  registerAccessoryClass('IKEA of Sweden', ['LED1624G9'], IkeaTradfriDimColor);
  registerAccessoryClass('IKEA of Sweden', ['E1743', 'TRADFRI on/off switch'], IkeaOnoffSwitch);
  registerAccessoryClass(
    'IKEA of Sweden',
    ['E1812', 'TRADFRI SHORTCUT Button'],
    IkeaShurtcutSwitch
  );
  registerAccessoryClass('IKEA of Sweden', ['E1524/E1810'], IkeaRemoteSwitch);
  registerAccessoryClass(
    'IKEA of Sweden',
    ['E1525/E1745', 'TRADFRI motion sensor'],
    IkeaMotionSensor
  );

  registerAccessoryClass('innr', ['RB 278 T'], InnrWhiteTemperature);

  registerAccessoryClass(
    'Xiaomi',
    [
      'ZNCZ02LM' /*ZH*/,
      'ZNCZ03LM' /*TW*/,
      'ZNCZ04LM' /*EU*/,
      'SP-EUC01' /*EU-Aqara*/,
      'ZNCZ12LM' /*US*/,
    ],
    XiaomiOutlet
  );
  registerAccessoryClass(
    'LUMI',
    [
      'ZNCZ02LM' /*ZH*/,
      'ZNCZ03LM' /*TW*/,
      'ZNCZ04LM' /*EU*/,
      'SP-EUC01' /*EU-Aqara*/,
      'ZNCZ12LM' /*US*/,
    ],
    XiaomiOutlet
  );

  registerAccessoryClass('LUMI', ['DJT11LM', 'DJT12LM'], XiaomiVibrationSensor);

  registerAccessoryClass('Xiaomi', ['WSDCGQ01LM', 'WSDCGQ11LM'], XiaomiTempHumiSensor);
  registerAccessoryClass(
    'Xiaomi',
    ['lumi.sensor_magnet', 'lumi.sensor_magnet.aq2'],
    XiaomiContactSensor
  );
  registerAccessoryClass('Xiaomi', ['GZCGQ01LM'], XiaomiLightIntensitySensor);
  registerAccessoryClass('Xiaomi', ['WXKG11LM', 'WXKG03LM', 'WXKG12LM'], XiaomiWirelessSwitch);
  registerAccessoryClass('Xiaomi', ['WXCJKG11LM'], AqaraOppleSwitch2Buttons);
  registerAccessoryClass('Xiaomi', ['WXCJKG12LM'], AqaraOppleSwitch4Buttons);
  registerAccessoryClass('Xiaomi', ['WXCJKG13LM'], AqaraOppleSwitch6Buttons);
  registerAccessoryClass(
    'LUMI',
    ['lumi.weather', 'lumi.sensor_ht.agl02', 'lumi.sensor_ht'],
    XiaomiTempHumiSensor
  );
  registerAccessoryClass(
    'LUMI',
    ['lumi.sensor_magnet', 'lumi.sensor_magnet.aq2'],
    XiaomiContactSensor
  );
  registerAccessoryClass('LUMI', ['lumi.sen_ill.mgl01'], XiaomiLightIntensitySensor);
  registerAccessoryClass(
    'LUMI',
    [
      'lumi.sensor_switch.aq2',
      'lumi.sensor_switch',
      'lumi.remote.b1acn01',
      'lumi.sensor_86sw1',
      'lumi.remote.b186acn01',
    ],
    XiaomiWirelessSwitch
  );
  registerAccessoryClass('LUMI', ['lumi.remote.b286opcn01'], AqaraOppleSwitch2Buttons);
  registerAccessoryClass('LUMI', ['lumi.remote.b486opcn01'], AqaraOppleSwitch4Buttons);
  registerAccessoryClass('LUMI', ['lumi.remote.b686opcn01'], AqaraOppleSwitch6Buttons);
  registerAccessoryClass('LUMI', ['lumi.sensor_motion'], XiaomiMotionSensor);
  registerAccessoryClass('Xiaomi', ['lumi.sensor_motion'], XiaomiMotionSensor);
  registerAccessoryClass('LUMI', ['lumi.sensor_motion.aq2'], XiaomiMotionIlluminanceSensor);
  registerAccessoryClass('Xiaomi', ['lumi.sensor_motion.aq2'], XiaomiMotionIlluminanceSensor);
  registerAccessoryClass('LUMI', ['lumi.sensor_wleak.aq1'], XiaomiLeakSensor);
  registerAccessoryClass('TuYa', ['GDKES-02TZXD'], TuyaOnoffDoubleSwitch);
  registerAccessoryClass('TuYa', ['TS0012'], LonsonhoDoubleSwitch);
  registerAccessoryClass('lk', ['ZB-MotionSensor-D0003'], LinkindMotionSensor);
  registerAccessoryClass('NAMRON AS', ['4512700', '1402755'], NamronDimmer);
  registerAccessoryClass('NAMRON AS', ['4512704'], NamronSwitch);
  registerAccessoryClass('TuYa', ['TS0601_thermostat'], TuyaThermostatControl);
  registerAccessoryClass('Moes', ['HY369RT'], TuyaThermostatControl);
  registerAccessoryClass(
    ['_TZE200_ckud7u2l', '_TZE200_ywdxldoj'],
    ['TS0601'],
    TuyaThermostatControl
  );
  registerAccessoryClass('eWeLink', ['DS01'], SonoffContactSensor);
  registerAccessoryClass('Nanoleaf', ['NL08-0800'], NanoleafIvy);

  // Register devices defined in local database
  DATABASE_ACCESSORIES.forEach(deviceConfig =>
    registerAccessoryFactory(
      deviceConfig.manufacturer,
      deviceConfig.models,
      (platform, accessory, client, device) =>
        new ConfigurableAccessory(platform, accessory, client, device, deviceConfig.services)
    )
  );
}
