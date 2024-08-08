import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.weddellagrilabs.rawmaterial',
  appName: 'Raw Material',
  webDir: 'out',
  server: {
    url: 'http://192.168.150.77:3000',
    cleartext: true
  },

};

export default config;
