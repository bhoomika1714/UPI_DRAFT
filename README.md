# Recommended next steps:
Note: 
1. Make sure you have installed native code dependencies [here](https://reactnative.dev/docs/environment-setup#installing-dependencies)
2. Make sure your `node version` is minimum 18 and `gradle version` is 8.6

### To preview and run the project on your device:
1. Open project folder in Visual Studio Code
2. Run  `npm install`  in the terminal
3. For iOS device (only on MacOS)
    1. Run `npx pod-install`
    2. Then, run `npx react-native run-ios` to view on iOS simulator or follow the instructions [here](https://reactnative.dev/docs/running-on-device#running-your-app-on-ios-devices) to run on a physical device.
4. For Android device.
    1. Use Android Virtual Device in [Android Studio](https://developer.android.com/studio/index.html) or follow the instructions [here](https://reactnative.dev/docs/running-on-device#running-your-app-on-android-devices) to run on physical device.
    2. Then, run the following
        1. `cd android`
        2. `gradle wrapper`
        3.  `cd ..`
    3. Then, run `npx react-native run-android`
# Recommended next steps:
Note: Make sure you have installed native code dependencies [here](https://reactnative.dev/docs/environment-setup#installing-dependencies)

### To preview and run the project on your device:
1. Open project folder in <u>Visual Studio Code</u>
2. Run  `npm install`  in the terminal
3. Run  `npx expo start`  in the terminal
4. Run on For iOS device (only on MacOS)
    1. Press  `i`  to view on iOS simulator or follow the instructions [here](https://docs.expo.dev/workflow/run-on-device/) to run on a physical device.
5. Run on For android device
    1. Press  `a`  to view on Android Virtual Device or follow the instructions [here](https://docs.expo.dev/workflow/run-on-device/) to run on a physical device.
