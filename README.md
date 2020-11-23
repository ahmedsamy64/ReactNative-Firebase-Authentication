# ReactNative-Firebase-Authentication
minimal React-Native application that uses Firebase Authentication including Email and password, Phone number, Google Auth, and Facebook Login attached with the steps of firebase configurations.





in this README i will demonstrate the configurations and setups to implement firebase with android in react-native.

First of all, This is the link to the .apk app of this project you can check the output here:
https://drive.google.com/file/d/1KmGyoYCldG6lIoN2OvY0SFhFm3ePbj61/view?usp=sharing

jumping to the implementation: 

-first you need to have a firebase project ( go to https://firebase.google.com/ choose get started then add project (any name will do the job) hit continue then choose the default account for firebase and wait until your project is ready 

-go to your project and next to project overview choose project settings, under your apps choose Android, you will go to Add Firebase to your Android app page 
choose android package name to start with com, ex: com.project ,now we need the SHA1 certificate, so leave this page now and go to your editor and navigate to android folder in the console, then write this command: ./gradlew signingreport , grap the SHA1 number and paste it in firebase page then hit register, the next step download google-services.json and put it on yourprojectpath/android/app folder, next step make sure to follow the instruction on the page to Add firebase SDK ( add some code to build.gradle) then continue to the console, and here you are having react-native Android project linked with firebase 

-to use authentication with specific type, under Develop choose Authentication then enable the Authenication type.
-in google btn component change the Client id with the client id in google-services.json 
